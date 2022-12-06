import bulmaCalendar from "bulma-calendar";
import React, { ReactText, useState } from "react";
import { newEventProps } from "../../Models/Events/newEvent.interface";
import Event from "../../Models/Events/event";

export const NewEvent = (event: { newEventProps: newEventProps }) => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [description, setDescription] = useState("");
  const [errorDescription, setErrorDescription] = useState(false);
  const [startData, setStartData] = useState("");
  const [startTime, setStartTime] = useState("");
  const [finishData, setFinishData] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [publico, setPublic] = useState(false);
  const [maxUsers, setMaxUsers] = useState(0);
  const [locale, setLocale] = useState("");
  const [errorLocale, setErrorLocale] = useState(false);
  const [activity, setActivity] = useState("");
  const [social, setSocial] = useState("");

  let start = startData + "-" + startTime;
  let finish = finishData + "-" + finishTime;

  const saveVals = (event: any) => {
    event.newEventProps.nameEvent = name;
    event.newEventProps.local = locale;
    event.newEventProps.start = start;
    event.newEventProps.finish = finish;
    event.newEventProps.description = description;
    event.newEventProps.maxParticipants = maxUsers;
    event.newEventProps.social_label = social;
    event.newEventProps.sport_label = activity;
    event.newEventProps.public = publico;
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    saveVals(event);
    Event.setNewEvent()
      .then((data: newEventProps) => {
        console.log("deu");
      })
      .catch((err) => console.log(err))
      .finally();

    /*
    console.log(name);
    console.log(locale);
    console.log(publico);
    console.log(start);
    console.log(finish);
    console.log(activity);
    console.log(social);
    console.log(maxUsers);
    console.log(currentUsers);
    console.log(description);
    */
  };

  const eventTypeHandler = (data: string) => {
    if (data === "Publico") {
      setPublic(true);
    }
    if (data === "Privado") {
      setPublic(false);
    }
  };

  const eventNameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
    setName(event.currentTarget.value);
  };

  const eventLocalHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value) {
      setErrorLocale(true);
    } else {
      setErrorLocale(false);
    }
    setLocale(event.currentTarget.value);
  };

  const eventDescriptionHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
    if (!event.currentTarget.value) {
      setErrorDescription(true);
    } else {
      setErrorDescription(false);
    }
    setDescription(event.currentTarget.value);
  };

  /*
  const eventMaxUsersHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (!Number(event.currentTarget.value)) {
      setErrorMaxUsers(true);
    } else {
      setErrorMaxUsers(false);
    }
    setMaxUsers(Number(event.currentTarget.value));
  };
  */

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
                <input value={name} className="input is-primary" type="text" placeholder="Event Name" onChange={eventNameHandler} />
                {errorName && name.length == 0 && <p className="help is-danger">Nome do evento é necessário</p>}
              </div>
            </div>
            <div className="field">
              <label className="label">Localização</label>
              <div className="control">
                <input value={locale} className="input is-primary" type="username" placeholder="Location" onChange={eventLocalHandler} />
                {errorLocale && locale.length == 0 && <p className="help is-danger">Localização é necessária</p>}
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
                <input type="date" onChange={(event) => setStartData(event.currentTarget.value)} />
              </div>
              <div className="p-2">
                <label className="label">Hora de Início</label>
                <input type="time" onChange={(event) => setStartTime(event.currentTarget.value)} />
              </div>
              <div className="p-2">
                <label className="label">Data de Fim</label>
                <input type="date" onChange={(event) => setFinishData(event.currentTarget.value)} />
              </div>
              <div className="p-2">
                <label className="label">Hora de Fim</label>
                <input type="time" onChange={(event) => setFinishTime(event.currentTarget.value)} />
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
                  <input
                    className="input is-primary"
                    type="number"
                    placeholder="Number of Participants"
                    onChange={(event) => setMaxUsers(Number(event.currentTarget.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Descrição</label>
          <div className="control">
            <textarea value={description} className="textarea" placeholder="Description" onChange={eventDescriptionHandler}></textarea>
            {errorDescription && description.length == 0 && <p className="help is-danger">Descrição é necessária</p>}
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
    </section>
  );
};

export default { NewEvent };
