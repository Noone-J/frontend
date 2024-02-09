import { createContext, useState, useCallback} from "react"

const ScoreboardContext = createContext()

export default ScoreboardContext;

export const ScoreboardProvider = ({children}) => {
    let [leScoreboard, setleScoreboard] = useState([]);

    let callScoreboard = useCallback(async () => {
        console.log("tchek 1")
        const response = await fetch('/battle/parties/',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
    
        });
        let data = await response.json();

        if(data){
            console.log("tchek 2")
            localStorage.setItem('leScoreboard', JSON.stringify(data));
            setleScoreboard(data)
            console.log(data)
        } else {
            console.log("tchek 3")
            alert("une erreur c'est produit lors de la connection àl'api")
        }
    }, []);   
    let contextData = {
        leScoreboard: leScoreboard,
        setleScoreboard: setleScoreboard,
        callScoreboard: callScoreboard,
    }

    return(
        <ScoreboardContext.Provider value={contextData}>
            {children}
        </ScoreboardContext.Provider>
    )
}