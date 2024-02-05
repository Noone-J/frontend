import React, { useContext } from 'react';
import FicheContext from '../context/FicheContext';

const FichePage = () => {
    let {players} = useContext(FicheContext);

    return (
        <div>
            <h1>Bienvenue sur votre fiche</h1>
            {players && players.map((player) => (
                <div key={player.id}>
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