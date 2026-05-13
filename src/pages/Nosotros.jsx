import React from 'react';
import './Nosotros.css';
import Navbar from "../components/Navbar"; // No olvides el Navbar para volver
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Nosotros = () => {
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
                    <li><Link to="/" className="nav-link-custom">Home</Link></li>
                    <li><Link to="/nosotros" className="nav-link-custom">¿Quiénes somos?</Link></li>
                    <li><Link to="/contacto" className="nav-link-custom">Contacto</Link></li>
                  </>
                }

                
      />

      
      <main className="container-nosotros">
        <div className="nosotros-card">
          <h1 className="titulo-seccion">Quiénes Somos 🚀</h1>
          
          <section className="nosotros-section">
            <h2>Nuestra Misión</h2>
            <p>
              En <strong>Instituto Luna</strong>, nos dedicamos a transformar la educación 
              mediante herramientas tecnológicas innovadoras que rompen las barreras 
              geográficas y conectan el conocimiento con las personas.
            </p>
          </section>

          <section className="nosotros-section">
            <h2>¿Por qué nosotros?</h2>
            <ul className="nosotros-lista">
              <li>✅ Acceso 24/7 a contenido educativo.</li>
              <li>✅ Plataforma intuitiva y fácil de usar.</li>
              <li>✅ Interfaz bonita a la hora de navegar.</li>
            </ul>
          </section>

          <section className="nosotros-section">
            <h2>Nuestro Equipo</h2>
            <p>Somos educadores que buscamos que todos los alumnos tengan las mismas oportunidades.
            </p>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Nosotros;