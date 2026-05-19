import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleLogin = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(

      "http://localhost:3001/login",

      {
        email,
        password
      }

    );

 const usuario = response.data.usuario;

localStorage.setItem(
  "usuario",
  JSON.stringify(usuario)
);

if (usuario.rol === "alumno") {

  navigate("/PanelAlumno");

} else if (usuario.rol === "docente") {

  navigate("/PanelDocente");

}

  } catch (error) {

    console.log(error);

    alert("Email o contraseña incorrectos");

  }

};

  return (
    <div className="login-bg">
        
      <div className="login-card shadow">
        <h2 className="text-center mb-4">Inicia sesión en Escuela Virtual</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;