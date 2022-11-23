export const EventsPage = () => {
  return (
    <section className="section">
      <div className="block">
        <ul>
          <li className="box">
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <figure className="eventImage">
                    <img src="logo-color.png" className="image is-24x24" />
                  </figure>
                </div>
                <p className="level-item">
                  <strong>Nome do Evento</strong>
                </p>
                <p className="level-item ">
                  <strong>Local: </strong> Braga
                </p>
                <p className="level-item">
                  <strong>Atividade: </strong> Volei
                </p>
                <p className="level-item">
                  <strong>Competitividade: </strong> Social
                </p>
                <p className="level-item">
                  <strong>Dia: </strong> 12/2/2023
                </p>
              </div>
              <div className="level-right">
                <p className="level-item">
                  <button className="button is-dark is-samll">Ver</button>
                </p>
              </div>
            </nav>
          </li>
          <li className="box">
            <figure className="eventImage">
              <img src="logo-color.png" className="image is-16x16" />
            </figure>
          </li>
        </ul>

        <nav className="pagination" role="navigation" aria-label="pagination">
          <ul className="pagination-list">
            <li>
              <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">
                1
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 2">
                2
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 3">
                3
              </a>
            </li>
          </ul>
          <a className="pagination-previous" title="This is the first page">
            Previous
          </a>
          <a className="pagination-next">Next page</a>
        </nav>
      </div>
    </section>
  );
};

export default EventsPage;
