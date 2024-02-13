import { createContext, useState, useCallback } from "react"

const CardContext = createContext()

export default CardContext;

export const CardProvider = ({children}) => {
    let [TheCard, setTheCard] = useState(null)

    let callCard = useCallback (async () => {
        console.log("tchek Card 1")
        const response = await fetch('/battle/joueurs/',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
    
        });
        let data = await response.json();

        if(data){
            console.log("tchek Card 2")
            localStorage.setItem('TheCard', JSON.stringify(data));
            setTheCard(data)
            console.log(data)
        } else {
            console.log("tchek Card 3")
            alert("une erreur c'est produit lors de la connection àl'api")
        }
    }, []);
    let contextData = {
        TheCard: TheCard,
        setTheCard: setTheCard,
        callCard: callCard,
    }

    return(
        <CardContext.Provider value={contextData}>
            {children}
        </CardContext.Provider>
    )
}