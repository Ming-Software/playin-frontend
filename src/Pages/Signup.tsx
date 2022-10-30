import React, { useState } from "react";
import ApiService from "../Services/Api.service";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const [prefSocial, setPrefSocial] = useState("");
  const [errorPrefSocial, setErrorPrefSocial] = useState(false);

  const [none, setNone] = useState("");
  const [errorNone, setErrorNone] = useState(false);

  const [football, setFootball] = useState("");
  const [errorFootball, setErrorFootball] = useState(false);

  const [futsal, setFutsal] = useState("");
  const [errorFutsal, setErrorFutsal] = useState(false);

  const [voleyball, setVoleyball] = useState("");
  const [errorVoleyball, setErrorVoleyball] = useState(false);

  const [padel, setPadel] = useState("");
  const [errorPadel, setErrorPadel] = useState(false);

  const [tennis, setTennis] = useState("");
  const [errorTennis, setErrorTennis] = useState(false);

  const [competitive, setCompetitive] = useState("");
  const [social, setSocial] = useState("");

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
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

  const confirmPasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(event.currentTarget.value);
    if (password !== event.currentTarget.value) {
      console.log(confirmPassword);
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
      console.log(confirmPassword);
    }
  };

  const prefActHandler = (data: string) => {
    if (data === "Football") {
      setFootball(data);
      setErrorFootball(!errorFootball);
    }
    if (data === "Futsal") {
      setFutsal(data);
      setErrorFutsal(!errorFutsal);
    }
    if (data === "Voleyball") {
      setVoleyball(data);
      setErrorVoleyball(!errorVoleyball);
    }
    if (data === "Padel") {
      setPadel(data);
      setErrorPadel(!errorPadel);
    }
    if (data === "Tennis") {
      setTennis(data);
      setErrorTennis(!errorTennis);
    }
    if (data === "None") {
      setNone(data);

      setErrorNone(!errorNone);
      setErrorFootball(true);
      setErrorFutsal(true);
      setErrorVoleyball(true);
      setErrorPadel(true);
      setErrorTennis(true);
    }
  };

  const prefSocialHandler = (data: string) => {
    if (data === "Competitive") {
      setCompetitive(data);
    }
    if (data === "Social") {
      setSocial(data);
    }
    if (data === "None") {
      setNone(data);
    }
  };

  const submitRequest = (event: any) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(none);
    console.log(football);
    //console.log(futsal);
    //console.log(voleyball);
    //console.log(padel);
    //console.log(tennis);
    console.log(competitive);
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
                  <label className="label">Name</label>
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
                    {errorEmail && email.length == 0 && <p className="help is-danger">Email required</p>}
                    {errorEmail && email.length != 0 && <p className="help is-danger">Email not valid</p>}
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      value={password}
                      className="input is-primary"
                      type="password"
                      placeholder="******"
                      onChange={(event) => setPassword(event.currentTarget.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input
                      value={confirmPassword}
                      className="input is-primary"
                      type="password"
                      placeholder="******"
                      onChange={confirmPasswordHandler}
                    />
                    {errorPassword && <p className="help is-danger">Password not match</p>}
                  </div>
                </div>

                <label className="label">Social Preference</label>
                <div className="control">
                  <label className="radio">
                    <input type="radio" value={competitive} name="foobar" onChange={() => prefSocialHandler("None")} /> None
                  </label>
                  <label className="radio">
                    <input type="radio" value={prefSocial} name="foobar" onChange={() => prefSocialHandler("Competitive")} /> Competitive
                  </label>
                  <label className="radio">
                    <input type="radio" value={prefSocial} name="foobar" onChange={() => prefSocialHandler("Social")} /> Social
                  </label>
                </div>

                <label className="label">Activity Preference</label>
                <div className="field is-grouped is-grouped-multiline">
                  <p className="control">
                    <input type="checkbox" value={none} onChange={() => prefActHandler("None")} /> None
                  </p>
                  <p className="control">
                    <input type="checkbox" value={football} onChange={() => prefActHandler("Football")} /> Football
                  </p>
                  <p className="control">
                    <input type="checkbox" value={futsal} onChange={() => prefActHandler("Futsal")} /> Futsal
                  </p>
                  <p className="control">
                    <input type="checkbox" value={voleyball} onChange={() => prefActHandler("Voleyball")} /> Voleyball
                  </p>
                  <p className="control">
                    <input type="checkbox" value={padel} onChange={() => prefActHandler("Padel")} /> Padel
                  </p>
                  <p className="control">
                    <input type="checkbox" value={tennis} onChange={() => prefActHandler("Tennis")} /> Tennis
                  </p>
                </div>

                <button className="button is-primary is-fullwidth has-text-center" type="submit" onClick={submitRequest}>
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
