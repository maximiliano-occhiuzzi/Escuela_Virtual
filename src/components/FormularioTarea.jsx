import React, { useState } from 'react';
import './FormularioTarea.css';
import axios from "axios";

const FormularioTarea = ({ materiaNombre, colorMateria }) => {
 
  const [tarea, setTarea] = useState({
    titulo: '',
    descripcion: '',
    fechaEntrega: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setTarea({  ...tarea, [name]: value  });
  };

  
const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(

      "http://localhost:3001/tareas",

      {

        ...tarea,

        materia: materiaNombre

      }

    );

    console.log(response.data);

    alert(`Tarea de ${materiaNombre} guardada`);

    setTarea({

      titulo: "",

      descripcion: "",

      fechaEntrega: ""

    });

  } catch (error) {

    console.log(error);

    alert("Error al guardar tarea");

  }

};

  return (
    <div className="form-container">npm 
      <div className="form-card">
     
        <div className="form-header" style={{ backgroundColor: colorMateria }}>
          <h2>Nueva Tarea: {materiaNombre}</h2>
        </div>

        <form onSubmit={handleSubmit} className="form-body">
          <div className="form-group">
            <label>Título</label>
            <input 
              type="text" 
              name="titulo"
              value={tarea.titulo} 
              onChange={handleChange} 
              placeholder="Escribe aquí el titulo..."
              required 
            />
          </div>

          <div className="form-group">
            <label>Instrucciones</label>
            <textarea 
              type="text"
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
              onChange={handleChange} required
            />
          </div>

          <button type="submit" className="btn-submit">
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioTarea;