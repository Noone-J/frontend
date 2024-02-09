import React, { useContext, useEffect } from 'react';
import ScoreboardContext from '../../context/context2/ScoreboardContext';

const FichePage = () => {
    const { leScoreboard, callScoreboard } = useContext(ScoreboardContext);

    useEffect(() => {
        callScoreboard(); // Appeler la fonction pour récupérer les données
      }, [callScoreboard]);


    return (
        <div>
            {leScoreboard.map((scoreboard) => (
                <div key={scoreboard.id}>
                    <h2>Partie ID: {scoreboard.id}</h2>
                    <p>Date de début: {new Date(scoreboard.date_debut).toLocaleString()}</p>
                    <p>Statut: {scoreboard.statut}</p>
                    <ul>
                        {scoreboard.joueurs.map((joueur) => (
                            <li key={joueur.id}>
                                <img src={joueur.profil_image_path} alt={`${joueur.user.first_name} ${joueur.user.last_name}`} />
                                <span>{joueur.user.username}</span>
                                <span>{joueur.user.email}</span>
                                <span>Victoires: {joueur.nbr_victoire}</span>
                                <span>Défaites: {joueur.nbr_defaites}</span>
                                <span>Expérience: {joueur.experience}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
};

export default FichePage;