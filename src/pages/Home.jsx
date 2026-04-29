import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <header>
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              
              <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
              </Link>

              {/* Aquí estaba el error: eliminamos los imports repetidos que estaban dentro del return */}
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
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
                      <use xlinkHref="#grid"></use>
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
              </ul>
            </div>
          </div>
        </div>
        
        {/* Resto del diseño (Busqueda y Login) */}
        <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
              
            </form>
            <div className="text-end">
                <Link to= "/Login">
              <button type="button" className="btn btn-light text-dark me-2">Iniciar Sesion</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mt-4">
        <h2>Panel de Alumno</h2>
        <p>Bienvenido a tu sección.</p>
      </main>
    </>
  );
}

export default Home;