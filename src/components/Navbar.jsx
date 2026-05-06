import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar({ left, center, rightsesion }) {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">

          <div className="logo"
          >{logo}</div>

            <div className="izquierda">{left}</div>

            <ul className="nav">
              {center}
            </ul>

            <div className="text-end">
              {rightsesion}
            </div>


            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;