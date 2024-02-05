import React,{ useContext } from "react";
import DeckContext from "../context/DeckContext";
// import { DeckProvider } from "../context/DeckContext";

const DeckAffichage = () => {
    let {callDeck} = useContext(DeckContext)
    
    return (
        <div onInput={callDeck}>
            <input type="input"/>
        </div>
    )
}

export default DeckAffichage