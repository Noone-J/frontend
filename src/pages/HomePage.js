import React, { useContext, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";
import CarouselContext from "../context/CarouselContext";
import { useNavigate  } from 'react-router-dom'; 

import "../index.css";

function HomePage() {
  const navigate = useNavigate();
  const imgurl = process.env.REACT_APP_CDN;

  const { leCarousel, callCarousel } = useContext(CarouselContext);

  useEffect(() => {
    callCarousel(); // Appeler la fonction pour récupérer les données
  }, [callCarousel]);

  const handleImageClick = (gameId) => {
    navigate(`/TableParty/${gameId}`); // Naviguez vers la page du tableau des scores avec l'ID du jeu
  };

  return (
    <div className="center-content">
      <Container fluid className="home-section" id="home">
        <Carousel slide={false}>
          {leCarousel && Object.values(leCarousel).map((game) => (
            <Carousel.Item key={game.name} onClick={() => handleImageClick(game.id)}>
              <div>
                <img src={imgurl + game.url} alt={game.name} />
              </div>
              <Carousel.Caption>
                <h3>{game.name}</h3>
                <p>{game.type === 'solo' ? 'Jouez seul' : 'Jouez en multijoueur'}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default HomePage;
