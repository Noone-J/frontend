import { createContext, useState, useCallback} from "react"

const TablePartyContext = createContext()

export default TablePartyContext;

export const TablePartyProvider = ({children}) => {
    let [TheTableParty, setTheTableParty] = useState([]);

    let callTableParty = useCallback(async () => {
        console.log("tchek TableParty 1")
        const response = await fetch('/battle/parties/',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
    
        });
        let data = await response.json();
        
        if(data){
            console.log("tchek TableParty 2")
            localStorage.setItem('TheTableParty', JSON.stringify(data));
            setTheTableParty(data)
            console.log(data)
        } else {
            console.log("tchek TableParty 3")
            alert("une erreur c'est produit lors de la connection àl'api")
        }
    }, []);   
    let contextData = {
        TheTableParty: TheTableParty,
        setTheTableParty: setTheTableParty,
        callTableParty: callTableParty,
    }

    return(
        <TablePartyContext.Provider value={contextData}>
            {children}
        </TablePartyContext.Provider>
    )
}