import { useState } from "react";
import { Link } from "react-router-dom";

export const Topbar = () => {

  //const[loged] = useState[Boolean](false)

    return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/login" className="navbar-item">
        <img src="logo-color.png" width="100%" height="100%"/>
      </Link>
  
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/events" className="navbar-item">
          Eventos
        </Link>
  
        <Link to="/newEvent" className="navbar-item">
          Criar Evento
        </Link>
  
        <Link to="/myEvents" className="navbar-item">
        Meus Eventos
        </Link>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>)
}

export default Topbar;