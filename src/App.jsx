import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PanelAlumno from "./pages/PanelAlumno";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/alumno" element={<PanelAlumno />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;