import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>

    <Navbar


      logo={
              <Link to="/PanelAlumno" className="text-white text-decoration-none">
                <h4>Escuela Virtual</h4>
              </Link>
}
      left = {
          <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
              </Link>

      }

      center = {
        <>
              <li>
                  <Link to="/alumno" className="nav-link text-secondary">
                    <svg className="bi d-block mx-auto mb-1" width="24" height="24" aria-hidden="true">
                      <use xlinkHref="#home"></use>
                    </svg>
                    Home
                  </Link>
                </li>
                <li> 
                  <Link to="/nosotros" className="nav-link text-white">
                    <svg className="bi d-block mx-auto mb-1" width="24" height="24" aria-hidden="true">
                      <use xlinkHref="#gr  id"></use>
                    </svg>
                    ¿Quiénes somos?
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="nav-link text-white">
                    <svg className="bi d-block mx-auto mb-1" width="24" height="24" aria-hidden="true">
                      <use xlinkHref="#people-circle"></use>
                    </svg>
                    Contacto
                  </Link>
                </li>
        </>
      }


      rightsesion={
<     Link to="/Login">
              <button type="button" className="btn btn-light text-dark me-2">Iniciar Sesion</button>
              </Link>
      }
           
                
    
      
  />

      <main className="container mt-4">
        <h2>Panel de Alumno</h2>
        <p>Bienvenido a tu sección.</p>
      </main>
    </>
  );
}

export default Home;