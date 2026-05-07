import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>

    <Navbar


      logo={
              <Link to="/" className="text-white text-decoration-none">
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
  <Link to="/Login">
    <img 
      src="data:image/png;base64,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" 
      alt="Login" 
      className="rounded-circle border" 
      style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
    />
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