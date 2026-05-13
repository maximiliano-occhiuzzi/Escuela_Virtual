import React from 'react';
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <img src={miLogo} alt="Logo" style={{ height: '40px' }} />
      <p>© Instituto Luna 2026</p>
    </footer>
  );
};

export default Footer;