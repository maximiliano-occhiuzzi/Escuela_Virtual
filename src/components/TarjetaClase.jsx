import { Link } from "react-router-dom";

function TarjetaClase({ nombre, profesor, ruta }) {
  return (
    <Link to={ruta} className="text-decoration-none">
      <div className="card mt-3 p-3">

        <h4>{nombre}</h4>
        <p>{profesor}</p>

      </div>
    </Link>
  );
}

export default TarjetaClase;