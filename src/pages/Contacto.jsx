import React, { useState } from 'react';
import './Contacto.css';
import Navbar from "../components/Navbar";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";


const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

 const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(

      "http://localhost:3001/contacto",

      formData

    );

    console.log(response.data);

    alert("Mensaje enviado correctamente");

    setFormData({
      nombre: "",
      email: "",
      mensaje: ""
    });

  } catch (error) {

    console.log(error);

    alert("Error al enviar mensaje");

  }

}; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar 
        logo={<Link to="/"><img src={miLogo} alt="Logo" style={{height:'60px'}}/></Link>}
         rightsesion={
                  <Link to="/Login">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" 
                      alt="Login" 
                      className="img-login" 
                      style={{ width: '40px' }}
                    />
                  </Link>
                }   
         center={
                  <>
                    <li><Link to="/" className="nav-link-custom">Inicio</Link></li>
                    <li><Link to="/nosotros" className="nav-link-custom">¿Quiénes somos?</Link></li>
                  </>
                }
      />
      <main className="container-contacto">
        <div className="contacto-card">
          <h1 className="titulo-seccion">Contáctanos</h1>
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
              Enviar
            </button>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Contacto;