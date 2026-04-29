import { Link } from "react-router-dom";
import "./PanelAlumno.css";

function PanelAlumno() {
  return (
    <>
      {/* NAVBAR */}
      <header>
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between">

              {/* Logo / Inicio */}
              <Link to="/alumno" className="text-white text-decoration-none">
                <h4>Escuela Virtual</h4>
              </Link>

              {/* Navegación */}
              <ul className="nav">
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
              </ul>

              {/* Botón logout */}
              <div>
                <Link to="/" className="btn btn-light">
                  Cerrar sesión
                </Link>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="container mt-4">
        <h2>Bienvenido Alumno 👨‍🎓</h2>

        <p className="text-muted">
          Acá vas a poder ver tus tareas y avisos.
        </p>

        {/* Ejemplo de tarjeta */}
        <div className="card mt-3 p-3">
          <h5>Tarea de Matemática</h5>
          <p>Resolver ejercicios de la página 45</p>
          <small className="text-danger">Entrega: 25/04</small>
        </div>
      </main>
    </>
  );
}

export default PanelAlumno;