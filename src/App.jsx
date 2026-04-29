import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PanelAlumno from "./pages/PanelAlumno";
import Login from "./pages/Login";
import PanelDocente from "./pages/PanelDocente"
import TarjetaTarea from "./components/TarjetaTarea"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/PanelAlumno" element={<PanelAlumno/>} />
        <Route path="/PanelDocente" element={<PanelDocente/>} />
        <Route path="/TarjetaTarea" element={<TarjetaTarea/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;