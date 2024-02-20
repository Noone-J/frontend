import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardContext from '../context/CardContext';

const CardPage = () => {
    const { TheCard, callCard } = useContext(CardContext);

    useEffect(() => {
        callCard(); // Appeler la fonction pour récupérer les données
      }, [callCard]);

    return (
        <div>
            <h1>Bienvenue sur votre Card</h1>
            <Card style={{ width: '18rem' }}>
                {TheCard && (
                    <>
                        <Card.Img variant="top" src={TheCard.profil_image_path} />
                        <h2>{`${TheCard.user.first_name} ${TheCard.user.last_name}`}</h2>
                        <p>Mail: {TheCard.user.email}</p>
                        <p>Username: {TheCard.user.username}</p>
                        <p>Victoires: {TheCard.nbr_victoire}</p>
                        <p>Défaites: {TheCard.nbr_defaites}</p>
                        <p>Expérience: {TheCard.experience}</p>
                    </>
                )}
            </Card>
        </div>
    );
};

export default CardPage;