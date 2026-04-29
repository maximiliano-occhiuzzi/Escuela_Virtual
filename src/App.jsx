import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Login from "./pages/Login";
  import PanelAlumno from "./pages/PanelAlumno"
  import PanelDocente from "./pages/PanelDocente"
  import AuthContext from "./context/AuthContext"
  import FormularioTarea from "./components/FormularioTarea"
  import Navbar from "./components/Navbar"
  import TarjetaTarea from "./components/TarjetaTarea"


  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;