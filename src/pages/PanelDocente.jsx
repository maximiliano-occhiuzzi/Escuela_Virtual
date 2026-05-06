import { Link } from "react-router-dom";
import "./Panel.css";
import { useNavigate } from "react-router-dom";

function PanelDocente() {
  return (
    <>
      {/* NAVBAR */}
      <header>
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container"> 
            <div className="d-flex flex-wrap align-items-center justify-content-between">

              {/* Logo / Inicio */}
              <Link to="/PanelDocente" className="text-white text-decoration-none">
                <h4>Escuela Virtual</h4>
              </Link>

             
            

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
  <h2>Bienvenido PROFESOR 👨‍🎓</h2>

  <p className="text-muted">
    Acá vas a poder ver tus tareas y avisos.
  </p>

  {/* Envolvemos la tarjeta con el componente Link correctamente */}
  <Link to="/TarjetaTarea" className="text-decoration-none text-dark">
    <div className="card mt-3 p-3 shadow-sm">
      <h5>Tarea de Matemática</h5>
      <p>Resolver ejercicios de la página 45</p>
      <small className="text-danger">Entrega: 25/04</small>
    </div>
  </Link>
</main>
      
    </>
  );
}

export default PanelDocente;