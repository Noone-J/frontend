import React, { useContext, useEffect } from 'react';
import FicheContext from '../context/FicheContext';

const FichePage = () => {
    const { laFiche, callFiche } = useContext(FicheContext);

    useEffect(() => {
        callFiche(); // Appeler la fonction pour récupérer les données
      }, [callFiche]);


    return (
        <div>
            <h1>Bienvenue sur votre fiche</h1>
            {laFiche && Object.values(laFiche).map((player) => (
                <div key={player.id}>
                    {console.log(laFiche)}
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

export default FichePage;