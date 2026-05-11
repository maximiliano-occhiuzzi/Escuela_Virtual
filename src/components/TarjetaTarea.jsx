import React from 'react';
import './TarjetaTarea.css';

function TarjetaTarea({ titulo, fecha, estado, colorMateria }) {
  return (
    <div className="tarea-card">
      <div className="tarea-header-blanco">
        <span className="tarea-icono-file">📄</span>
        <span className="tarea-fecha">{fecha}</span>
      </div>
      <div className="tarea-cuerpo-color" style={{ backgroundColor: colorMateria }}>
        <h5 className="tarea-titulo">{titulo}</h5>
        <div className="tarea-footer">
          <span className="tarea-estado">{estado}</span>
          <button className="btn-ver-tarea">Ver tarea</button>
        </div>
      </div>
    </div>
  );
}

export default TarjetaTarea;