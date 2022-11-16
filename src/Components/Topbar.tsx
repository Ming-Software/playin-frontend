import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { Link } from "react-router-dom";

//The TopBar receives de user email as an argument.
//To use TopBar it is necessary to have a user legged in to show his email.

export const Topbar = (email: { userEmail: string }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/login" className="navbar-item">
          <img src="logo-color.png" className="image is-64x64" />
        </Link>
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
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/myPage" className="button is-primary">
              <strong>{email.userEmail}</strong>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
