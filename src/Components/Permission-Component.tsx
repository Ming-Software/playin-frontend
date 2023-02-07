import { useNavigate } from "react-router-dom";
import { EventProps } from "../Models/Events/event.interface";
import Event from "../Models/Events/event";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Permission = (event: { eventProps: EventProps }) => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const navigateToEventPage = () => {
    navigate(`/portal/events/${event.eventProps.ID}`);
  };

  const deletePermission = () => {
    Event.deleteMyPermissions(event.eventProps.ID!).then(() => setVisible(false));
  };

  return (
    <>
      {visible && (
        <div className="card">
          <header className="card-header has-background-primary">
            <div className="card-header-title has-text-white-bis is-justify-content-space-between">
              <p>{event.eventProps.Name}</p>
              <p>{event.eventProps.Creator}</p>
            </div>
          </header>
          <main className="card-content">
            <div className="content">
              <section className="tags are-medium is-flex is-justify-content-space-between">
                <span className="tag is-link">
                  {event.eventProps.Activity === "Futebol" && (
                    <>
                      {event.eventProps.Activity} <FontAwesomeIcon className="icon is-small ml-2" icon="futbol" />
                    </>
                  )}
                  {event.eventProps.Activity === "Futsal" && (
                    <>
                      {event.eventProps.Activity} <FontAwesomeIcon className="icon is-small ml-2" icon="futbol" />
                    </>
                  )}
                  {event.eventProps.Activity === "Voleibol" && (
                    <>
                      {event.eventProps.Activity} <FontAwesomeIcon className="icon is-small ml-2" icon="volleyball" />
                    </>
                  )}
                  {event.eventProps.Activity === "Padel" && (
                    <>
                      {event.eventProps.Activity} <FontAwesomeIcon className="icon is-small ml-2" icon="table-tennis-paddle-ball" />
                    </>
                  )}
                  {event.eventProps.Activity === "Tenis" && (
                    <>
                      {event.eventProps.Activity} <FontAwesomeIcon className="icon is-small ml-2" icon="table-tennis" />
                    </>
                  )}
                  {event.eventProps.Activity === "None" && <>{event.eventProps.Activity}</>}
                </span>
                <span className="tag is-link">{event.eventProps.Social}</span>
                <span className="tag is-link">{event.eventProps.Public ? "Publico" : "Privado"}</span>
              </section>
              <section>
                <div className="is-flex is-justify-content-space-between">
                  <time>
                    <p>{event.eventProps.Start.split("T")[0]}</p>
                    <p>
                      {event.eventProps.Start.split("T")[1].split(".")[0]} - {event.eventProps.Finish.split("T")[1].split(".")[0]}
                    </p>
                  </time>
                  {event.eventProps.CurrentUsers >= event.eventProps.MaxUsers ? (
                    <span className="tag is-danger">Não Existem Vagas</span>
                  ) : (
                    <span className="tag is-success">Ainda Existem {event.eventProps.MaxUsers - event.eventProps.CurrentUsers} Vagas</span>
                  )}
                </div>
                <p>{event.eventProps.Locale}</p>
              </section>
            </div>
          </main>
          <footer className="card-footer">
            <a onClick={navigateToEventPage} className="card-footer-item">
              Ver
            </a>
            <div className="card-footer-item">
              <button onClick={deletePermission} className="button is-danger is-small is-responsive is-rounded is-focused m-1">
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
          </footer>
        </div>
      )}
    </>
  );
};

export default Permission;
