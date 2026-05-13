import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FormularioTarea from "../components/FormularioTarea";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";
import Footer from '../components/Footer';

function Matematica() {
  const colorMateria = "#f0610e"; 
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <>
      <Navbar 
        logo={<Link to="/"><img src={miLogo} alt="Logo" style={{height:'60px'}}/></Link>}
        rightsesion={<Link to="/" className="btn btn-outline-danger">Cerrar Sesion</Link>}
      />
      
      <main className="container mt-5">
        <div className="header-materia d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1>Matemática</h1>
            <p className="text-muted">Curso: 6to Año TC | Prof. Silva</p>
          </div>

          <button 
            className={`btn ${mostrarForm ? 'btn-danger' : 'btn-dark'} shadow`} 
            style={{ borderRadius: '50%', width: '60px', height: '60px', fontSize: '30px', border: '3px solid #000' }}
            onClick={() => setMostrarForm(!mostrarForm)}
          >
            {mostrarForm ? '−' : '+'}
          </button>
        </div>
        <hr />

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {mostrarForm && (
              <div className="contenedor-formulario-animado">
                <FormularioTarea materiaNombre="Matemática" colorMateria={colorMateria} />
              </div>
            )}

            {!mostrarForm && (
              <div className="text-center py-5">
                <p className="text-muted">No hay tareas nuevas para mostrar.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Matematica;