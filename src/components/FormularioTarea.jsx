import React, { useState } from 'react';
import './FormularioTarea.css';

const FormularioTarea = ({ materiaNombre, colorMateria }) => {
  // 1. Definimos el objeto que guarda los datos (como un POJO de Java)
  const [tarea, setTarea] = useState({
    titulo: '',
    descripcion: '',
    fechaEntrega: ''
  });

  // 2. El "ActionListener" para los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Creamos un objeto nuevo copiando el anterior y pisando el campo modificado
    setTarea({ 
      ...tarea, 
      [name]: value 
    });
  };

  // 3. El manejador del botón de enviar
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que la página se recargue (consume event)
    console.log("Datos de la tarea listos para enviar:", tarea);
    alert(`Tarea de ${materiaNombre} guardada.`);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        {/* Usamos el color de la materia que viene por Props */}
        <div className="form-header" style={{ backgroundColor: colorMateria }}>
          <h2>Nueva Tarea: {materiaNombre}</h2>
        </div>

        <form onSubmit={handleSubmit} className="form-body">
          <div className="form-group">
            <label>Título</label>
            <input 
              type="text" 
              name="titulo" // Debe coincidir con la propiedad del objeto
              value={tarea.titulo} 
              onChange={handleChange} 
              placeholder="Ej: TP de Integrales"
              required 
            />
          </div>

          <div className="form-group">
            <label>Instrucciones</label>
            <textarea 
              name="descripcion" 
              value={tarea.descripcion} 
              onChange={handleChange} 
              placeholder="Escribe aquí las consignas..."
              required 
            />
          </div>

          <div className="form-group">
            <label>Fecha Límite</label>
            <input 
              type="date" 
              name="fechaEntrega" 
              value={tarea.fechaEntrega} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="btn-submit">
            Publicar Tarea
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioTarea;