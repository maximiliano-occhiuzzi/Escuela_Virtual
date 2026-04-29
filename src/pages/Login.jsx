import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleLogin = (e) => {
  e.preventDefault();

  if (!email.endsWith("@fatimarem.edu.ar")) {
    alert("Correo inválido");
    return;
  }

  const usuario = email.split("@")[0];

 
 if (!isNaN(usuario)) {
  navigate("/alumno");
} else {  
  navigate("/docente");
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

        <p className="text-center mt-3 small text-muted">
          Docente: sebastiandavalos@fatimarem.edu.ar <br />
          Alumno: 48318493@fatimarem.edu.ar
        </p>
      </div>
    </div>
  );
}

export default Login;