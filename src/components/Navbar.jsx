  import { Link } from "react-router-dom";
  import "./Navbar.css";


  function Navbar({center, rightsesion, logo }) {
    return (
      <header className="navbar-custom">
        <div className="navbar-container">
          


            <div className="navbar-left"
            >{logo}</div>

          

            <nav className="navbar-center">
            <ul className="nav-links">
              {center}
            </ul>
          </nav>

              <div className="navbar-right">
              {rightsesion} 
                </div>


              
          
          </div>
        
      </header>

    );
  }



  export default Navbar;