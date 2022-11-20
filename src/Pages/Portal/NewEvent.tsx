import bulmaCalendar from "bulma-calendar";
import { useEffect, useState } from "react";

export const NewEvent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  //const [public, setPublic] = useState(false);
  const [maxUsers, setMaxUsers] = useState(0);
  const [currentUsers, setCurrentUsers] = useState(0);
  const [locale, setLocale] = useState("");
  const [activity, setActivity] = useState("");
  const [social, setSocial] = useState("");

  const handleName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
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
                <input value={name} className="input is-primary" type="text" placeholder=" Event Name" onChange={handleName} />
              </div>
            </div>
            <div className="field">
              <label className="label">Username do Criador</label>
              <div className="control">
                <input className="input is-primary" type="text" placeholder="Text input" value="fjfj" />
              </div>
            </div>

            <div className="field">
              <label className="label">Localização</label>
              <div className="control">
                <input className="input is-primary" type="username" placeholder="Location" />
              </div>
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
                  <select>
                    <option>Selecionar Atividade</option>
                    <option>Vólei</option>
                    <option>Futebol</option>
                    <option>Futsal</option>
                    <option>Basquetebol</option>
                    <option>Padel</option>
                    <option>Ténis</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <label className="label">Tipo Social</label>
                <div className="select is-primary is-multisized">
                  <select>
                    <option>Selecionar Tipo Social</option>
                    <option>Competitivo</option>
                    <option>Casual</option>
                    <option>None</option>
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
                <textarea className="textarea" placeholder="Description"></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Submit</button>
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
