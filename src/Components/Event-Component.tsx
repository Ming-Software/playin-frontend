import { useNavigate } from "react-router-dom";
import { EventProps } from "../Models/Events/event.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Event = (event: { eventProps: EventProps }) => {
  const navigate = useNavigate();

  const navigateToEventPage = () => {
    navigate(`/portal/events/${event.eventProps.ID}`);
  };

  return (
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
                <p>{event.eventProps.date}</p>
                <p>
                  {event.eventProps.Start} - {event.eventProps.Finish}
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
      </footer>
    </div>
  );
};

export default Event;
