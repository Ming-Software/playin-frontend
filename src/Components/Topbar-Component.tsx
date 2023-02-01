import { Link } from "react-router-dom";

import { useUserStore } from "../Stores/userStore";

import User from "../Models/User/user";
import { UserPropsShort } from "../Models/User/user.interface";
import { useState } from "react";
import AuthService from "../Services/Auth.service";

//The TopBar receives de user email as an argument.
//To use TopBar it is necessary to have a user legged in to show his email.

export const Topbar = () => {
  const [burger, setBurger] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const currentUser = useUserStore();
  if (currentUser.name === "") {
    User.getSignInUser()
      .then((data: UserPropsShort) => {
        currentUser.setId(data.id);
        currentUser.setEmail(data.email);
        currentUser.setName(data.name);
      })
      .catch((err) => console.log(err))
      .finally();
  }

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    setDropdown(!dropdown);
    User.logoutUser();
    AuthService.Logout();
    currentUser.setId("");
    currentUser.setEmail("");
    currentUser.setName("");
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img src="/logo-no-background.png" />
        </div>
        <a className={`navbar-burger ${burger && "is-active"}`} data-target="navbarItems" onClick={() => setBurger(!burger)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarItems" className={`navbar-menu ${burger && "is-active"}`}>
        <div className="navbar-start">
          <Link to="/portal/events" className="navbar-item">
            Eventos
          </Link>
          <Link to="/portal/newevent" className="navbar-item">
            Criar Evento
          </Link>
          <Link to="/portal/myevents" className="navbar-item">
            Meus Eventos
          </Link>
          <Link to="/portal/mypermissions" className="navbar-item">
            Pedidos para Eventos
          </Link>
          <Link to="/portal/myinvites" className="navbar-item">
            Convites para Eventos
          </Link>
          <Link to="/portal/partevents" className="navbar-item">
            Participações
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className={`dropdown ${dropdown && "is-active"}`}>
              <div className="dropdown-trigger">
                <button className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu" onClick={handleClick}>
                  <strong>{currentUser.name}</strong>
                  <span className="icon is-small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                  <Link to="/" className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
