import React, { useState, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';


const Header = () => {
  let { user, logoutUser } = useContext(AuthContext)
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
                to="/Fiche" 
                onClick={() => updateExpanded(false)}
                >
                Fiche
              </Nav.Link>
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
              {user && <p>Hello {user.username}!</p>}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header