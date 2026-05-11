import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PanelAlumno from "./pages/PanelAlumno";
import Login from "./pages/Login";
import PanelDocente from "./pages/PanelDocente"
import Matematica from  "./pages/Matematica"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"
import FormularioTarea from "./components/FormularioTarea"
import Fisica from "./pages/Fisica"
import Programacion from "./pages/Programacion"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/PanelAlumno" element={<PanelAlumno/>} />
        <Route path="/PanelDocente" element={<PanelDocente/>} />
        <Route path="/FormularioTarea" element={<FormularioTarea/>} />
        <Route path="/Matematica" element={<Matematica/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/fisica" element={<Fisica/>} />
        <Route path="/programacion" element={<Programacion/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;