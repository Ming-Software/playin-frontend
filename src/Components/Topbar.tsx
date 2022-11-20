import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useUserStore } from "../Stores/userStore";

import User from "../Models/User/user";
import { UserPropsShort } from "../Models/User/user.interface";

//The TopBar receives de user email as an argument.
//To use TopBar it is necessary to have a user legged in to show his email.

export const Topbar = () => {
  const [user, setUser] = useState("");
  const currentUser = useUserStore();
  if (currentUser.email == "") {
    User.setTopBarName()
      .then((data: UserPropsShort) => {
        currentUser.setEmail(data.name);
      })
      .catch((err) => console.log(err))
      .finally();
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/login" className="navbar-item">
          <img src="../public/logo-color.png" className="image is-64x64" />
        </Link>
        <div className="navbar-start">
          <Link to="/portal/events" className="navbar-item">
            Eventos
          </Link>

          <Link to="/portal/newEvent" className="navbar-item">
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
              <strong>{currentUser.email}</strong>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
