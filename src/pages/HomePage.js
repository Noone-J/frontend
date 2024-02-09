import React, { useContext, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";
import CarouselContext from "../context/CarouselContext";

import "../index.css";

function HomePage() {
  const imgurl = process.env.REACT_APP_CDN;

  const { leCarousel, callCarousel } = useContext(CarouselContext);

  useEffect(() => {
    callCarousel(); // Appeler la fonction pour récupérer les données
  }, [callCarousel]);

  return (
    <div class="center-content">
      <Container fluid className="home-section" id="home">
        <Carousel slide={false}>
          {leCarousel && Object.values(leCarousel).map((game) => (
            <Carousel.Item key={game.name}>
              <div >
                <img src={imgurl + game.url} alt={game.name}  />
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
