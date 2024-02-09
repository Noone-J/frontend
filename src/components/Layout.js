import React, { useContext } from 'react';
import { NavbarContext } from '../context/NavbarContext';

const Layout = ({ children }) => {
  const { height } = useContext(NavbarContext);

  return (
    <div style={{ paddingTop: `${height}px` }}>
      {children}
    </div>
  );
};

export default Layout;