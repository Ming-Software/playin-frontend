import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../Services/Auth.service";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error2Password, setError2Password] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [none2, setNone2] = useState(false);
  const [futebol, setFutebol] = useState(false);
  const [futsal, setFutsal] = useState(false);
  const [voleibol, setVoleibol] = useState(false);
  const [padel, setPadel] = useState(false);
  const [tenis, setTenis] = useState(false);
  const [none, setNone] = useState(false);
  const [competitive, setCompetitive] = useState(false);
  const [social, setSocial] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [responseLogin, setResponseLogin] = useState("");
  const navigate = useNavigate();

  let preferencesSocial = "";
  let preferencesAct: string[] = [];

  const submitRequest = (event: any) => {
    event.preventDefault();
    prefList();
    prefStrSocial();
    AuthService.SignUpRequest({
      Email: email,
      Password: password,
      Name: name,
      Social: preferencesSocial,
      Activities: preferencesAct,
    })
      .then((data) => {
        navigate("/");

        console.log("deu");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      })
      .finally();
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPassword = (password: string) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#~!%^())_+|`-])(?=\S+$)[0-9a-zA-Z$*&@#~!%^()_+|`-]{8,}$/.test(
      password
    );
  };

  const emailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value) {
      //se nao tiver nada dentro da caixa
      setErrorEmail(true);
    } else if (!isValidEmail(event.currentTarget.value)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    setEmail(event.currentTarget.value);
  };

  const passwordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value) {
      setErrorPassword(true);
    } else if (!isValidPassword(event.currentTarget.value)) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
    setPassword(event.currentTarget.value);
  };

  const confirmPasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(event.currentTarget.value);
    if (password !== event.currentTarget.value) {
      setError2Password(true);
    } else {
      setError2Password(false);
    }
  };

  const prefList = () => {
    preferencesAct = [];
    if (futebol) {
      preferencesAct.push("Futebol");
    }
    if (futsal) {
      preferencesAct.push("Futsal");
    }
    if (voleibol) {
      preferencesAct.push("Voleibol");
    }
    if (padel) {
      preferencesAct.push("Padel");
    }
    if (tenis) {
      preferencesAct.push("Tenis");
    }
  };

  const prefActHandler = (data: string) => {
    setNone2(false);
    if (data === "Futebol") {
      setFutebol(!futebol);
    }
    if (data === "Futsal") {
      setFutsal(!futsal);
    }
    if (data === "Voleibol") {
      setVoleibol(!voleibol);
    }
    if (data === "Padel") {
      setPadel(!padel);
    }
    if (data === "Tenis") {
      setTenis(!tenis);
    }
  };

  const noFoot = () => {
    setFutebol(false);
    setFutsal(false);
    setVoleibol(false);
    setPadel(false);
    setTenis(false);
    setNone2(true);
  };

  const prefStrSocial = () => {
    if (competitive) {
      preferencesSocial = "Competitive";
    }
    if (social) {
      preferencesSocial = "Social";
    }
    if (none) {
      preferencesSocial = "None";
    }
  };

  const prefSocialHandler = (data: string) => {
    if (data === "Competitive") {
      setCompetitive(!competitive);
    }
    if (data === "Social") {
      setSocial(!social);
    }
    if (data === "None") {
      setNone(!none);
    }
  };

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
                  <label className="label">Nome</label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      value={name}
                      type="text"
                      placeholder="insert here.."
                      onChange={(event) => setName(event.currentTarget.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      value={email}
                      className="input is-primary"
                      type="email"
                      placeholder="e.g. rodrigoslb2000@example.com"
                      onChange={emailHandler}
                    />
                    {errorEmail && email.length == 0 && (
                      <p className="help is-danger">Email é necessário</p>
                    )}
                    {errorEmail && email.length != 0 && (
                      <p className="help is-danger">Email inválido</p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label className="label">Palavra-Passe</label>
                  <div className="control">
                    <input
                      value={password}
                      className="input is-primary"
                      type="password"
                      placeholder="******"
                      onChange={passwordHandler}
                    />
                    {errorPassword && password.length == 0 && (
                      <p className="help is-danger">Password é necessária</p>
                    )}
                    {errorPassword && password.length != 0 && (
                      <p className="help is-danger">
                        Palavra-passe tem de conter pelo menos 8 caracteres e
                        conter pelo menos uma letra minúscula, maiúscula, número
                        e caratere especial ($*&@#~!%^()_+|`-)
                      </p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label className="label">Confirmação da Palavra-Passe</label>
                  <div className="control">
                    <input
                      value={confirmPassword}
                      className="input is-primary"
                      type="password"
                      placeholder="******"
                      onChange={confirmPasswordHandler}
                    />
                    {error2Password && (
                      <p className="help is-danger">
                        Palavra-Passe não coincide
                      </p>
                    )}
                  </div>
                </div>

                <label className="label">Social Preference</label>
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="foobar"
                      onChange={() => prefSocialHandler("None")}
                    />{" "}
                    None
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="foobar"
                      onChange={() => prefSocialHandler("Competitive")}
                    />{" "}
                    Competitivo
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="foobar"
                      onChange={() => prefSocialHandler("Social")}
                    />{" "}
                    Social
                  </label>
                </div>

                <label className="label">Activity Preference</label>
                <div className="field is-grouped is-grouped-multiline">
                  <p className="control">
                    <input
                      type="checkbox"
                      checked={none2}
                      onChange={() => noFoot()}
                    />{" "}
                    None
                  </p>
                  <p className="control">
                    <input
                      type="checkbox"
                      checked={futebol}
                      onChange={() => prefActHandler("Futebol")}
                    />{" "}
                    Futebol
                  </p>
                  <p className="control">
                    <input
                      type="checkbox"
                      checked={futsal}
                      onChange={() => prefActHandler("Futsal")}
                    />{" "}
                    Futsal
                  </p>
                  <p className="control">
                    <input
                      type="checkbox"
                      checked={voleibol}
                      onChange={() => prefActHandler("Voleibol")}
                    />{" "}
                    Voleibol
                  </p>
                  <p className="control">
                    <input
                      type="checkbox"
                      checked={padel}
                      onChange={() => prefActHandler("Padel")}
                    />{" "}
                    Padel
                  </p>
                  <p className="control">
                    <input
                      type="checkbox"
                      checked={tenis}
                      onChange={() => prefActHandler("Tenis")}
                    />{" "}
                    Tenis
                  </p>
                </div>

                <button
                  className="button is-primary is-fullwidth has-text-center"
                  type="submit"
                  onClick={submitRequest}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
