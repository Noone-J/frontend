import { createContext, useState } from "react"

const FicheContext = createContext()

export default FicheContext;

export const FicheProvider = ({children}) => {
    let [laFiche, setlaFiche] = useState(null)

    let callFiche = async () => {
        console.log("tchek 1")
        const response = await fetch('/battle/joueurs/',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
    
        });
        let data = await response.json();

        if(data){
            console.log("tchek 2")
            localStorage.setItem('leDeck', JSON.stringify(data));
            setlaFiche(data)
            console.log(data)
        } else {
            console.log("tchek 3")
            alert("une erreur c'est produit lors de la connection àl'api")
        }
    }    
    let contextData = {
        laFiche: laFiche,
        callFiche: callFiche,
    }

    return(
        <FicheContext.Provider value={contextData}>
            {children}
        </FicheContext.Provider>
    )
}