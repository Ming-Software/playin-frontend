import { Link } from "react-router-dom";

import { useUserStore } from "../Stores/userStore";

import User from "../Models/User/user";
import { UserPropsShort } from "../Models/User/user.interface";
import { useState } from "react";

//The TopBar receives de user email as an argument.
//To use TopBar it is necessary to have a user legged in to show his email.

export const Topbar = () => {
  const [burger, setBurger] = useState(false);

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
            Events
          </Link>
          <Link to="/portal/newevent" className="navbar-item">
            Create Event
          </Link>
          <Link to="/portal/myevents" className="navbar-item">
            My Events
          </Link>
          <Link to="/portal/myinvites" className="navbar-item">
            My Invites
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/myPage" className="button is-primary">
                <strong>{currentUser.name}</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
