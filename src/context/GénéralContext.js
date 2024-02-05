import { createContext, useState } from "react"

const DeckContext = createContext()

export default DeckContext;

export const DeckProvider = ({children}) => {
    let [leDeck, setleDeck] = useState(null)

    let callDeck = async (e) => {
        console.log("tchek 1")
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/battle/cartes/',{
            method:'',
            headers: {
                'Content-Type': 'application/json'
            },
    
        });
        let data = await response.json();

        if(data){
            console.log("tchek 2")
            localStorage.setItem('leDeck', JSON.stringify(data));
            setleDeck(data)
            console.log(data)
        } else {
            console.log("tchek 3")
            alert("une erreur c'est produit lors de la connection àl'api")
        }
    }    
    let contextData = {
        leDeck: leDeck,
        callDeck: callDeck,
    }

    return(
        <DeckContext.Provider value={contextData}>
            {children}
        </DeckContext.Provider>
    )
}