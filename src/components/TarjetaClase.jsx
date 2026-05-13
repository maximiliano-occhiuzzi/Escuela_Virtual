import React from "react";
import { Link } from "react-router-dom";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";
import "./TarjetaClase.css";

function TarjetaClase({
  nombre,
  profesor,
  curso,
  ruta,
  icono = "📁",
  colorFondo = "#8B5CF6"
}) {
  return (
    <Link to={ruta} className="tarjeta-link">
      <div className="tarjeta-mosaico">

        {/* PARTE SUPERIOR */}
        <div className="tarjeta-superior">

          <img
            src={miLogo}
            alt="Logo"
            className="logo-instituto-card"
          />

          <div className="tarjeta-icono">
            {icono}
          </div>

        </div>


        <div
          className="tarjeta-inferior"
          style={{ background: colorFondo }}
        >
          <h4 className="tarjeta-nombre">
            {nombre}
          </h4>

          <p className="tarjeta-profesor">
            {profesor}
          </p>

          <span className="tarjeta-curso">
            {curso}
          </span>
        </div>

      </div>
    </Link>
  );
}

export default TarjetaClase;