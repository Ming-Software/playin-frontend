export const NewEvent = () => {
  return (
    <div className="card">
      <header className="card-header has-background-primary">
        <p className="card-header-title has-text-white-bis">Criar Novo Evento</p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="field">
            <label className="label">Nome do Evento</label>
            <div className="control">
              <input className="input is-info" type="text" placeholder=" Event Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Username do Criador</label>
            <div className="control">
              <input className="input is-info" type="text" placeholder="Text input" value="Username" />
            </div>
          </div>

          <div className="field">
            <label className="label">Localização</label>
            <div className="control">
              <input className="input is-info" type="username" placeholder="Location" />
            </div>
          </div>

          <div className="field is-grouped is-grouped-multiline">
            <label className="label">Data de Início</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
            <label className="label">Hora de Início</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
            <label className="label">Duração</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
            <label className="label">Número Máximo de Participantes</label>
            <div className="control">
              <input className="input is-info" type="number" placeholder="Number of Participants" />
            </div>
            <label className="label">Convidados</label>
            <div className="control">
              <input className="input is-info" type="username" placeholder="Guests" />
              <button type="submit" className="button is-primary">
                Adicionar
              </button>
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
  );
};
