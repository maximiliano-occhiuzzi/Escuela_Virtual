import React from 'react';
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <img src={miLogo} alt="Logo" style={{ height: '40px' }} />
      <p>© 2026 Instituto Luna - Escuela Virtual</p>
    </footer>
  );
};

export default Footer;