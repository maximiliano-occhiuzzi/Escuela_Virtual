import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import FormularioTarea from "../components/FormularioTarea";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";



function Matematica() {
const navigate = useNavigate();
  const colorMateria = "#f0610e";

  const [mostrarForm, setMostrarForm] = useState(false);

  const [tareas, setTareas] = useState([]);

  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  useEffect(() => {

    obtenerTareas();

  }, []);

  const obtenerTareas = async () => {

    try {

      const response = await axios.get(
        "http://localhost:3001/tareas"
      );

      setTareas(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <>
      <Navbar
        logo={
          <Link to="/">
            <img
              src={miLogo}
              alt="Logo"
              style={{ height: '60px' }}
            />
          </Link>
        }
         center={
  <>

    <li>

      <Link

        to={
          usuario?.rol === "docente"
            ? "/PanelDocente"
            : "/PanelAlumno"
        }

        className="nav-link-custom"
      >

          Volver al Panel

      </Link>

    </li>

  </>
}

        rightsesion={

  <button

    className="btn btn-outline-danger"

    onClick={() => {

      localStorage.removeItem("usuario");

      navigate("/");

    }}

  >

    Cerrar Sesion

  </button>

}
      />

      <main className="container mt-5">

        <div className="header-materia d-flex justify-content-between align-items-center mb-4">

          <div>

            <h1>Matemática</h1>

            <p className="text-muted">
              Curso: 6to Año TC | Prof. Silva
            </p>

          </div>

          {

            usuario?.rol === "docente" && (

              <button
                className={`btn ${mostrarForm ? 'btn-danger' : 'btn-dark'} shadow`}
                style={{
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  fontSize: '30px',
                  border: '3px solid #000'
                }}

                onClick={() =>
                  setMostrarForm(!mostrarForm)
                }
              >

                {mostrarForm ? '−' : '+'}

              </button>

            )

          }

        </div>

        <hr />

        <div className="row justify-content-center">

          <div className="col-md-8 col-lg-6">

            {

              usuario?.rol === "docente" && mostrarForm && (

                <div className="contenedor-formulario-animado">

                  <FormularioTarea
                    materiaNombre="Matemática"
                    colorMateria={colorMateria}
                  />

                </div>

              )

            }

            <div className="mt-4">

              {

                tareas
                  .filter(
                    (tarea) =>
                      tarea.materia === "Matemática"
                  )

                  .map((tarea) => (

                    <div
                      key={tarea.id}
                      className="card shadow mb-3 p-3"
                    >

                      <h3>{tarea.titulo}</h3>

                      <p>{tarea.descripcion}</p>

                      <small>

                  Fecha límite: {

                   new Date(
                   tarea.fecha_entrega
                   ).toLocaleDateString("es-AR")

                    }

                    </small>
                    </div>

                  ))

              }

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );

}

export default Matematica;