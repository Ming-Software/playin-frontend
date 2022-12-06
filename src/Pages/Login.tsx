import { createContext, useState } from "react";
import ApiService from "../Services/Api.service";
import AuthService from "../Services/Auth.service";
import { Route, useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import create from "zustand";
import { useUserStore } from "../Stores/userStore";
>>>>>>> 4e38924fc0417f998cafcd20528ab6a07059d13e

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<String>();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [responseLogin, setResponseLogin] = useState("");
<<<<<<< HEAD
  const navigate = useNavigate();

=======

  const navigate = useNavigate();

>>>>>>> 4e38924fc0417f998cafcd20528ab6a07059d13e
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLoginRequest = (event: any) => {
    event.preventDefault();
    setLoading(true);
    AuthService.LoginRequest({
      Email: email,
      Password: password,
    })
      .then((data) => {
<<<<<<< HEAD
        navigate("/about");
=======
        navigate("/portal/events");
>>>>>>> 4e38924fc0417f998cafcd20528ab6a07059d13e
        setLoggedin(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setResponseLogin("Não foi possível efetuar login.");
        setLoggedin(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value) {
      setError("Email is Required.");
    } else if (!isValidEmail(event.currentTarget.value)) {
      setError("Email is invalid.");
    } else {
      setError("");
    }

    setEmail(event.currentTarget.value);
  };

  const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

<<<<<<< HEAD
=======
  const handleToSignUp = (event: any) => {
    navigate("/signup");
  };

>>>>>>> 4e38924fc0417f998cafcd20528ab6a07059d13e
  return (
    <>
      <header className="hero is-primary">
        <div className="hero-body">
          <p className="title">Playin</p>
          <p className="subtitle">By Ming Software</p>
        </div>
      </header>
      <main className="hero">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half">
              <form className="box is-link">
                <figure className="image container is-128x128">
                  <img src="./logo-color.png" />
                </figure>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input value={email} type="email" className="input is-primary" placeholder="Endereço-email" onChange={handleChange} />
                    {email.length == 0 && <p className="help is-danger">{error}</p>}
                    {error && email.length != 0 && <p className="help is-danger">{error}</p>}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input value={password} onChange={handlePassword} className="input is-primary" type="password" placeholder="Password" />
                    <a href="forget.html" className="is-size-7 has-text-primary">
                      Esqueceu-se da palavra-passe?
                    </a>
                  </div>
                </div>
                <button onClick={handleLoginRequest} className="button is-primary is-fullwidth has-text-center is-center" type="submit">
                  Login
                </button>
<<<<<<< HEAD
                {!loggedin && <p className="help is-danger">{responseLogin}</p>}
=======
                {!loggedin && <p className="help is-danger pb-5">{responseLogin}</p>}

                <label className="label">Não tem conta?</label>
                <button onClick={handleToSignUp} className="button is-primary has-text-center is-center" type="submit">
                  Criar nova conta
                </button>
>>>>>>> 4e38924fc0417f998cafcd20528ab6a07059d13e
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
