import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";

const usuario = JSON.parse(
  localStorage.getItem("usuario")
);
function Home() {
  return (
    <div className="pagina-inicio">
      <Navbar
        logo={
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img 
              src={miLogo} 
              alt="Logo Escuela" 
              style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>
        }
        center={
          <>
            <li><Link to="/nosotros" className="nav-link-custom">¿Quiénes somos?</Link></li>
            <li><Link to="/contacto" className="nav-link-custom">Contacto</Link></li>
          </>
        }
       rightsesion={

  usuario ? (

    <Link
      to={
        usuario.rol === "docente"
        ? "/PanelDocente"
        : "/PanelAlumno"
      }
    >

      <img
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="Panel"
        className="img-login"
        style={{ width: '40px' }}
      />

    </Link>

  ) : (

    <Link to="/Login">

      <img
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="Login"
        className="img-login"
        style={{ width: '40px' }}
      />

    </Link>

  )

}
/>

      <main className="contenido-principal">
        
        <header className="home-presentacion">
          <div className="bloque-texto">
            <h1>Potenciá tu futuro en el <br /> <span>Instituto Luna</span></h1>
            <p>La mejor plataforma para estudiar desde tu casa con tecnología de punta.</p>
            <div className="botones-accion">
              <Link to="/Login" className="btn-azul-luna">Iniciar Sesión</Link>
            </div>
          </div>
        </header>

        <section className="seccion-cuadros">
          <div className="cuadro-info">
            <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt="Icono" />
            <h3>Clases Online</h3>
            <p>Estudiá a tu ritmo desde cualquier dispositivo y en cualquier horario.</p>
          </div>

          <div className="cuadro-info">
            <img src="https://cdn-icons-png.flaticon.com/512/166/166258.png" alt="Icono" />
            <h3>Comunidad</h3>
            <p>Conectate con otros alumnos y profesores en nuestros foros en vivo.</p>
          </div>

          <div className="cuadro-info">
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Icono" />
            <h3>Tu Progreso</h3>
            <p>Mirá tus notas y seguí tus tareas pendientes de forma fácil.</p>
          </div>
        </section>

      </main>

      <footer className="pie-pagina">
        <img src={miLogo} alt="Logo" style={{ height: '40px' }} />
        <p>© 2026 Instituto Luna - Escuela Virtual</p>
      </footer>
    </div>
  );
}

export default Home;