import React, { useContext, useEffect } from 'react';


const FichePage = () => {
    const { leCarousel, callCarousel } = useContext(CarouselContext);

    useEffect(() => {
        callCarousel(); // Appeler la fonction pour récupérer les données
      }, [callCarousel]);


    return (
        <div>
            {leCarousel.map((scoreboard) => (
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