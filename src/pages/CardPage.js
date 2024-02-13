import React, { useContext, useEffect } from 'react';
import CardContext from '../context/CardContext';

const CardPage = () => {
    const { TheCard, callCard } = useContext(CardContext);

    useEffect(() => {
        callCard(); // Appeler la fonction pour récupérer les données
      }, [callCard]);


    return (
        <div>
            <h1>Bienvenue sur votre Card</h1>
            {TheCard && Object.values(TheCard).map((player) => (
                <div key={player.id}>
                    {console.log(TheCard)}
                    <h2>{`${player.user.first_name} ${player.user.last_name}`}</h2>
                    <p>Username: {player.user.username}</p>
                    <p>Email: {player.user.email}</p>
                    <p>Victoires: {player.nbr_victoire}</p>
                    <p>Défaites: {player.nbr_defaites}</p>
                    <p>Expérience: {player.experience}</p>
                </div>
            ))}
        </div>
    );
};

export default CardPage;