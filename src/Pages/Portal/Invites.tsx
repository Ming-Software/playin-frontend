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
          <div className="columns">
            <div className="level">
              <div className="level-left">
                <p className="column">
                  <strong>Nome do Evento: </strong> {value.Name}
                </p>
                <p className="column">
                  <strong>Local: </strong> {value.Locale}
                </p>
                <p className="column">
                  <strong>Atividade: </strong> {value.Activity}
                </p>
                <p className="column">
                  <strong>Competitividade: </strong> {value.Social}
                </p>
                <p className="column">
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
          {results?.map((result) => (
            <li className="box">
              <div className="columns">
                <div className="column has-text-centered is-11-desktop is-half-tablet">{result}</div>
                <div className="column has-text-centered">
                  <button className="button is-success is-small is-responsive is-rounded is-focused m-1">
                    <span className="icon is-small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                  </button>
                  <button className="button is-danger is-small is-responsive is-rounded is-focused m-1">
                    <span className="icon is-small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </li>
          ))}
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
