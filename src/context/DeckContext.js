import { createContext, useState, useCallback } from "react"

const DeckContext = createContext()

export default DeckContext;

export const DeckProvider = ({children}) => {
    let [leDeck, setleDeck] = useState(null)

    let callDeck = useCallback(async () => {
        console.log("Deck tchek  1");
        // e.preventDefault() // Supprimez cette ligne si vous n'avez pas besoin de l'événement
        const response = await fetch('/battle/cartes/',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let data = await response.json();
    
        if(data){
            console.log("Deck tchek  2");
            localStorage.setItem('leDeck', JSON.stringify(data));
            setleDeck(data);
            console.log(data);
        } else {
            console.log("Deck tchek  3");
            alert("une erreur c'est produit lors de la connection à l'api");
        }
    }, []);
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