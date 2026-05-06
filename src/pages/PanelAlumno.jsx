import { Link } from "react-router-dom";
import "./Panel.css";
import Navbar from "../components/Navbar";

function PanelAlumno() {
  return (
    <>
      
   <Navbar

             logo={
              <Link to="/PanelAlumno" className="text-white text-decoration-none">
                <h4>Escuela Virtual</h4>
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
        <h2>Bienvenido Alumno 👨‍🎓</h2>

        <p className="text-muted">
          Acá vas a poder ver tus tareas y avisos.
        </p>

        {/* Ejemplo de tarjeta */}
          <div className="card mt-3 p-3">
            <button>
          <h5>Tarea de Matemática</h5>
          <p>Resolver ejercicios de la página 45</p>
          <small className="text-danger">Entrega: 25/04</small>
          <Link to= "/TarjetaTarea">
          </Link>
          </button>
        </div>  
      </main>
    </>
  );
}

export default PanelAlumno;