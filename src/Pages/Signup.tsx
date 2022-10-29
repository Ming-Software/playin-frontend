import React, { useState } from "react";
import ApiService from "../Services/Api.service";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

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
                    <input type="radio" name="foobar" /> None
                  </label>
                  <label className="radio">
                    <input type="radio" name="foobar" /> Competitive
                  </label>
                  <label className="radio">
                    <input type="radio" name="foobar" /> Social
                  </label>
                </div>

                <label className="label">Activity Preference</label>
                <div className="field is-grouped is-grouped-multiline">
                  <p className="control">
                    <input type="checkbox" /> None
                  </p>
                  <p className="control">
                    <input type="checkbox" /> Football
                  </p>
                  <p className="control">
                    <input type="checkbox" /> Futsal
                  </p>
                  <p className="control">
                    <input type="checkbox" /> Voleyball
                  </p>
                  <p className="control">
                    <input type="checkbox" /> Padel
                  </p>
                  <p className="control">
                    <input type="checkbox" /> Tennis
                  </p>
                </div>

                <button className="button is-primary is-fullwidth has-text-center" type="submit">
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
