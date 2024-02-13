import { createContext, useState, useCallback} from "react"

const TableParty2Context = createContext()

export default TableParty2Context;

export const TableParty2Provider = ({children}) => {
    let [TheTableParty2, setTheTableParty2] = useState([]);

    let callTableParty2 = useCallback(async () => {
        console.log("tchek TableParty2 1")
        const response = await fetch('/battle/parties/joignable/',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
    
        });
        let data = await response.json();

        if(data){
            console.log("tchek TableParty2 2")
            localStorage.setItem('TheTableParty2', JSON.stringify(data));
            setTheTableParty2(data)
            console.log(data)
        } else {
            console.log("tchek TableParty2 3")
            alert("une erreur c'est produit lors de la connection àl'api")
        }
    }, []);   
    let contextData = {
        TheTableParty2: TheTableParty2,
        setTheTableParty2: setTheTableParty2,
        callTableParty2: callTableParty2,
    }

    return(
        <TableParty2Context.Provider value={contextData}>
            {children}
        </TableParty2Context.Provider>
    )
}