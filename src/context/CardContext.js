import { createContext, useState, useCallback, useContext } from "react"
import AuthContext from '../context/AuthContext';

const CardContext = createContext()

export default CardContext;

export const CardProvider = ({children}) => {
    let [TheCard, setTheCard] = useState(null)
    const { authTokens } = useContext(AuthContext);
    const { authId } = useContext(AuthContext);

    let callCard = useCallback(async () => {
        const response = await fetch(`/battle/joueurs/${authId}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authTokens}`
            },
        });
        let data = await response.json();
    
        if (data) {
            console.log("check Card  2");
            localStorage.setItem('TheCard', JSON.stringify(data));
            setTheCard(data);
            console.log(data);
        } else {
            console.log("check Card  3");
            alert("Une erreur s'est produite lors de la connexion à l'API");
        }
    }, [authTokens, authId]); // Inclure authId dans le tableau de dépendances
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