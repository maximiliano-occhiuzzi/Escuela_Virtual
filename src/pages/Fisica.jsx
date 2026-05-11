import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TarjetaTarea from "../components/TarjetaTarea";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";

function Fisica() {
  const colorMateria = "#D4E6F1"; // Azul

  return (
    <>
      <Navbar 
        logo={<Link to="/"><img src={miLogo} alt="Logo" style={{height:'60px'}}/></Link>}
        rightsesion={<Link to="/" className="btn btn-outline-danger">Cerrar Sesion</Link>}
      />
      
      <main className="container mt-5">
        <div className="header-materia mb-4">
          <h1>Matemática 📐</h1>
          <p className="text-muted">Curso: 6to Año TC</p>
          <hr />
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <TarjetaTarea 
              titulo="Ecuaciones Cuadráticas" 
              fecha="12/05" 
              estado="Pendiente" 
              colorMateria={colorMateria} 
            />
          </div>
          <div className="col-md-4 mb-3">
            <TarjetaTarea 
              titulo="Funciones" 
              fecha="05/05" 
              estado="Entregado" 
              colorMateria={colorMateria} 
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Fisica;