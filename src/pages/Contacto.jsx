import React, { useState } from 'react';
import './Contacto.css';
import Navbar from "../components/Navbar";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";
import { Link } from "react-router-dom";

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar 
        logo={<Link to="/"><img src={miLogo} alt="Logo" style={{height:'60px'}}/></Link>}
        rightsesion={<Link to="/" className="btn-salir">Volver</Link>}
      />
      <main className="container-contacto">
        <div className="contacto-card">
          <h1 className="titulo-seccion">Contáctanos ✉️</h1>
          <p className="subtitulo">Déjanos tus dudas y te responderemos a la brevedad.</p>

          <form onSubmit={handleSubmit} className="form-contacto">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              className="input-custom"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="input-custom"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              rows="5"
              className="input-custom"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn-enviar-contacto">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contacto;