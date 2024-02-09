import React, { useContext, useEffect } from "react";
import DeckContext from "../context/DeckContext";

const DeckAffichage = () => {
    const { leDeck, callDeck } = useContext(DeckContext);

    useEffect(() => {
        callDeck(); // Appel de la fonction pour récupérer les données
    }, [callDeck]);

    return (
        <div>
            {leDeck && leDeck.map((card, index) => (
                <div key={index}>
                    <h1>{card.title}</h1> {/* Remplacez par les propriétés appropriées de chaque carte */}
                    {/* Affichez d'autres informations sur la carte  ici */}
                </div>
            ))}
        </div>
    );
}

export default DeckAffichage;
