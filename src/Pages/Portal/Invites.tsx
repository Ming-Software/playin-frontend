import { useState } from "react";
import Event from "../../Models/Events/event";
import { EventProps } from "../../Models/Events/event.interface";
import Pagination from "bulma-pagination-react";
import { useNavigate } from "react-router-dom";

export const InvitesPage = () => {
  const [onlyOne, setOnlyOne] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [results, setResults] = useState<any[]>();
  const POSTS_PER_PAGE = 2;
  const pages = Math.ceil(totalPages / POSTS_PER_PAGE);

  const navigate = useNavigate();
  const seeEvent = (id: any) => {
    navigate(`/portal/events/${id}`);
  };

  const getEvents = (page: number) => {
    Event.getEvents(page).then((data: any) => {
      setTotalPages(data.Total);
      setResults([]);
      let res: any = [];
      for (let value of data.Events) {
        res.push(
          <div className="level">
            <div className="level-left">
              <p className="level-item">
                <strong>Nome do Evento: </strong> {value.Name}
              </p>
              <p className="level-item ">
                <strong>Local: </strong> {value.Locale}
              </p>
              <p className="level-item">
                <strong>Atividade: </strong> {value.Activity}
              </p>
              <p className="level-item">
                <strong>Competitividade: </strong> {value.Social}
              </p>
              <p className="level-item">
                <strong>Dia: </strong> {value.Start.split("T")[0]}
              </p>
            </div>
            <div className="level-right">
              <p className="level-item">
                <button onClick={() => seeEvent(value.ID)} className="button is-dark is-samll" type="submit">
                  Ver
                </button>
              </p>
            </div>
          </div>
        );
      }
      setResults(res);
    });
  };

  if (!onlyOne) {
    getEvents(1);
    setOnlyOne(true);
  }

  return (
    <section className="section">
      <div className="block">
        <ul className="box">
          <li className="box">
            <div className="columns">
              <div className="column is-11">Propriedades do Evento 1</div>
              <div className="column">
                <button className="button is-success is-small is-responsive is-rounded is-focused">
                  <span className="icon is-small">
                    <i className="fas fa-check">V</i>
                  </span>
                </button>
                <button className="button is-danger is-small is-responsive is-rounded is-focused">
                  <span className="icon is-small">
                    <i className="fas fa-times">X</i>
                  </span>
                </button>
              </div>
            </div>
          </li>
          <li className="box">Propriedades do Evento 2</li>
        </ul>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onChange={(page: any) => {
            setCurrentPage(page);
            getEvents(page);
          }}
        />
      </div>
    </section>
  );
};
export default InvitesPage;
