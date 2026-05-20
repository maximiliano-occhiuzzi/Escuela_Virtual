import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import Navbar from "../components/Navbar";
import miLogo from "../assets/Contemporary Crescent Moon logo with Text.png";

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
    <>
    <Navbar
        logo={
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img
              src={typeof miLogo !== 'undefined' ? miLogo : ""} // Evita romper si no está definido
              alt="Logo Escuela"
              style={{ height: "60px", width: "auto", objectFit: "contain" }}
            />
          </Link>
        }
      />
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
    </>
  );
}

export default Login;