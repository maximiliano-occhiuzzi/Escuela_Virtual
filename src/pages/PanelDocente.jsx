import React from 'react';
import { Link } from "react-router-dom";
import "./Panel.css";
import Navbar from "../components/Navbar";
import TarjetaClase from "../components/TarjetaClase";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";
import Footer from "../components/Footer";

function PanelDocente() {
  return (
    <>
      <Navbar
        logo={
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img src={miLogo} alt="Logo" style={{ height: '60px', width: 'auto' }} />
          </Link>
        }
        rightsesion={ 
          <Link to="/" className="btn btn-outline-danger btn-sm">Cerrar sesión</Link>
        }
      />

      <main className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <h2>¡Bienvenido!</h2>
                <p className="text-muted">Seleccione una materia para gestionar tareas y contenidos.</p>
            </div><spam className= "badge bg-primary p-2">Perfil: Docente</spam>
        </div>

        <div className="contenedor-grid">
          <TarjetaClase 
            nombre="Matemática" 
            profesor="Gestionar Curso" 
            curso="6to Año TC" 
            ruta="/Matematica" 
            icono="" 
            colorFondo="#f0610e" 
          />

          <TarjetaClase 
            nombre="Física" 
            profesor="Gestionar Curso" 
            curso="6to Año TC" 
            ruta="/Fisica" 
            icono="" 
            colorFondo="rgba(122, 194, 40, 0.65)" 
          />

          <TarjetaClase 
            nombre="Programación" 
            profesor="Gestionar Curso" 
            curso="6to Año TC" 
            ruta="/Programacion" 
            icono=""  
            colorFondo="rgba(119, 10, 165, 0.75)" 
          />   
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default PanelDocente;