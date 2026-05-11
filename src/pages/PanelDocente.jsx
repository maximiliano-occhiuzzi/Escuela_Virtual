import { Link } from "react-router-dom";
import "./Panel.css";
import Navbar from "../components/Navbar";
import TarjetaClase from "../components/TarjetaClase";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";


function PanelDocente() {
  return (
    <>
 <Navbar
            logo={
                      <Link to="/" className="d-flex align-items-center text-decoration-none">
                        <img 
                          src={miLogo} 
                          alt="Logo Escuela Virtual" 
                          style={{ 
                            height: '60px', // Aumenté un poco el tamaño para que se aprecie el texto
                            width: 'auto',
                            objectFit: 'contain'
                          }} 
                        />
                      </Link>
                    }
                    
            center= {
               <>
                <li className="nav-item">
                  <Link to="/alumno" className="nav-link text-white">
                    Inicio
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Tareas
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Avisos
                  </a>
                </li>
                
              </>
            }
              
             rightsesion={ 
                <Link to="/" className="btn btn-light">
                  Cerrar sesión
                </Link>
            }
 />

      <main className="container mt-4">
        <h2>Bienvenido Profesor 👨‍🎓</h2>

        <p className="text-muted">
          Acá vas a poder ver tus Clases.
        </p>
      <TarjetaClase
      nombre="Matematica"
      profesor="romo"
      ruta ="/Matematica"

      />
         
      </main>

      
    </>  );
}

export default PanelDocente;