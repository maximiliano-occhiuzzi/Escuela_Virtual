import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar({center, rightsesion, logo }) {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">

          <div className="logo"
          >{logo}</div>


            <ul className="nav">
              {center}
            </ul>

            <div className="position-absolute top-0 end-0 m-3">
             {rightsesion}
              </div>


            
          </div>
        </div>
      </div>
    </header>

  );
}



export default Navbar;