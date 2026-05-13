import { Link } from "react-router-dom";
import "./Panel.css";
import Navbar from "../components/Navbar";
import TarjetaClase from "../components/TarjetaClase";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";
import Footer from "../components/Footer";



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
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <h2>¡Bienvenido!</h2>
                <p className="text-muted">Acá vas a poder ver tus clases.</p>
            </div><spam className= "badge bg-primary p-2">Perfil: Alumno</spam>
        </div>


   
       <div className="contenedor-grid">
  <TarjetaClase 
    nombre="Matemática" 
    profesor="Ing. Silva" 
    curso="6to Año TC" 
    ruta="/Matematica" 
    colorFondo="#f0610e"
  />

  <TarjetaClase 
    nombre="Física" 
    profesor="Prof. Méndez" 
    curso="6to Año TC" 
    ruta="/Fisica" 
   colorFondo="rgba(122, 194, 40, 0.65)"
  />

  <TarjetaClase 
    nombre="Programación" 
    profesor="Lic. Pérez" 
    curso="6to Año TC" 
    ruta="/Programacion" 
    colorFondo="rgba(119, 10, 165, 0.75)" 
  />  
</div>
          
         
      </main>
      <Footer/>
    </>
  );
}

export default PanelAlumno;