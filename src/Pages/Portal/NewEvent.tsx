import bulmaCalendar from "bulma-calendar";
import React, { useState } from "react";

export const NewEvent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [publico, setPublic] = useState(false);
  const [maxUsers, setMaxUsers] = useState(0);
  const [currentUsers, setCurrentUsers] = useState(0);
  const [locale, setLocale] = useState("");
  const [activity, setActivity] = useState("");
  const [social, setSocial] = useState("");

  let preferencesSocial = "";

  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log(name);
    console.log(locale);
    console.log(description);
    console.log(social);
    console.log(activity);
    console.log(publico);
  };

  //funciona
  const eventTypeHandler = (data: string) => {
    if (data === "Publico") {
      setPublic(true);
    }
    if (data === "Privado") {
      setPublic(false);
    }
  };

  return (
    <section className="section">
      <div className="card">
        <header className="card-header has-background-primary">
          <p className="card-header-title has-text-white-bis">Criar Novo Evento</p>
        </header>
        <div className="card-content">
          <div className="content">
            <div className="field">
              <label className="label">Nome do Evento</label>
              <div className="control">
                <input
                  value={name}
                  className="input is-primary"
                  type="text"
                  placeholder="Event Name"
                  onChange={(event) => setName(event.currentTarget.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Localização</label>
              <div className="control">
                <input
                  value={locale}
                  className="input is-primary"
                  type="username"
                  placeholder="Location"
                  onChange={(event) => setLocale(event.currentTarget.value)}
                />
              </div>
            </div>
            <label className="label">Tipo de Evento</label>
            <div className="control">
              <label className="radio">
                <input type="radio" name="foobar" onChange={() => eventTypeHandler("Publico")} /> Publico
              </label>
              <label className="radio">
                <input type="radio" name="foobar" onChange={() => eventTypeHandler("Privado")} /> Privado
              </label>
            </div>
            <div className="field is-grouped is-grouped-multiline">
              <div className="p-2">
                <label className="label">Data de Início</label>
                <input type="date" />
              </div>
              <div className="p-2">
                <label className="label">Hora de Início</label>
                <input type="time" />
              </div>
              <div className="p-2">
                <label className="label">Data de Fim</label>
                <input type="date" />
              </div>
              <div className="p-2">
                <label className="label">Hora de Fim</label>
                <input type="time" />
              </div>
              <div className="p-2">
                <label className="label">Atividade</label>
                <div className="select is-primary is-multisized">
                  <select onChange={(event) => setActivity(event.currentTarget.value)}>
                    <option value="None">None</option>
                    <option value="Vólei">Vólei</option>
                    <option value="Futebol">Futebol</option>
                    <option value="Futsal">Futsal</option>
                    <option value="Basquetebol">Basquetebol</option>
                    <option value="Padel">Padel</option>
                    <option value="Ténis">Ténis</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <label className="label">Tipo Social</label>
                <div className="select is-primary is-multisized">
                  <select onChange={(event) => setSocial(event.currentTarget.value)}>
                    <option value="None">None</option>
                    <option value="Competitivo">Competitivo</option>
                    <option value="Casual">Casual</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <label className="label">Número Máximo de Participantes</label>
                <div className="control">
                  <input className="input is-primary" type="number" placeholder="Number of Participants" />
                </div>
              </div>
              <div className="p-2">
                <label className="label">Convidados</label>
                <div className="field has-addons">
                  <p className="control">
                    <input id="duration" className="input is-primary" type="username" placeholder="Guests" />
                  </p>
                  <button type="submit" className="button is-primary">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Descrição</label>
              <div className="control">
                <textarea
                  value={description}
                  className="textarea"
                  placeholder="Description"
                  onChange={(event) => setDescription(event.currentTarget.value)}
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" type="submit" onClick={submitHandler}>
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewEvent;
