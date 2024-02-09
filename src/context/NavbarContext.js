import React, { createContext, useState, useEffect } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [height, setHeight] = useState(0); // Retirez le signe dollar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navbarElement = document.querySelector('.navbar');
    if (navbarElement) {
      setHeight(navbarElement.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContext.Provider value={{ height, isMenuOpen, toggleMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};
