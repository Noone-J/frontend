import React, { useState, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';

import '../index.css'

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className="header-content">
      <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/">
            Cards Games
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" defaultActiveKey="#home">

              <Nav.Item>
                <Nav.Link
                  as={Link} 
                  to="/Home" 
                  onClick={() => updateExpanded(false)}
                  >
                  Home
                </Nav.Link>
              </Nav.Item>


              {/* la page fiche apparrais que si on est log */}
              <Nav.Item>

                {user ? (
                <Nav.Link
                  as={Link} 
                  to="/Card" 
                  onClick={() => updateExpanded(false)}
                  >
                  Card
                </Nav.Link>
                ) : null}
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link} 
                  to="/Deck" 
                  onClick={() => updateExpanded(false)}
                  >
                  Deck
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                {user ? (
                    <Nav.Link  
                    as={Link}
                    onClick={logoutUser}
                    >Logout</Nav.Link>
                ) : (
                  <Nav.Link 
                  as={Link}
                  to="/login"
                  onClick={() => updateExpanded(false)} 
                  >
                    Login
                  </Nav.Link>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header