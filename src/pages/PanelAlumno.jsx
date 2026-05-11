import { Link } from "react-router-dom";
import "./Panel.css";
import Navbar from "../components/Navbar";
import TarjetaClase from "../components/TarjetaClase";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";

// ... (tus imports iguales)

function PanelAlumno() {
  return (
    <>
      <Navbar
        logo={
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img 
              src={miLogo} 
              alt="Logo Escuela Virtual" 
              style={{ height: '60px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>
        }
      
        rightsesion={ 
          <Link to="/" className="btn btn-outline-danger btn-sm">
            Cerrar sesión
          </Link>
        }
      />

      <main className="container mt-4">
        <h2>Bienvenido Ciro Jeronimo Giovinazzo</h2>
        <p className="text-muted">Acá vas a poder ver tus clases.</p>

        {/* CONTENEDOR DE LAS TARJETAS */}
       <div className="contenedor-grid">
  <TarjetaClase 
    nombre="Matemática" 
    profesor="Ing. Silva" 
    curso="6to Año TC" 
    ruta="/Matematica" 
    icono="📐" 
    colorFondo="#f0610e" /* Azul claro */
  />

  <TarjetaClase 
    nombre="Física" 
    profesor="Prof. Méndez" 
    curso="6to Año TC" 
    ruta="/Fisica" 
    icono="⚛️" 
   colorFondo="rgba(122, 194, 40, 0.65)" /* Rojizo claro */
  />

  <TarjetaClase 
    nombre="Programación" 
    profesor="Lic. Pérez" 
    curso="6to Año TC" 
    ruta="/Programacion" 
    icono="💻"  
    colorFondo="rgba(119, 10, 165, 0.75)" /* Verdoso claro */
  />  
</div>
          
          {/* Puedes agregar más tarjetas aquí y se acomodarán solas */}
      </main>
    </>
  );
}

export default PanelAlumno;