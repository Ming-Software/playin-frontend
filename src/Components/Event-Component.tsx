import { useNavigate } from "react-router-dom";
import { EventProps } from "../Models/Events/event.interface";

export const Event = (event: { eventProps: EventProps }) => {
  const navigate = useNavigate();

  const navigateToEventPage = () => {
    navigate(`/portal/events/${event.eventProps.ID}`);
  };

  return (
    <div className="card">
      <header className="card-header">
        <div className="card-header-title is-justify-content-space-between">
          <p
            className={`${
              event.eventProps.CurrentUsers >= event.eventProps.MaxUsers
                ? "has-text-danger"
                : "has-text-success"
            }`}
          >
            {event.eventProps.Name}
          </p>
          <p>{event.eventProps.Creator}</p>
        </div>
      </header>
      <main className="card-content">
        <div className="content">
          <section className="tags are-medium is-flex is-justify-content-space-between">
            <span className="tag is-link">{event.eventProps.Activity}</span>
            <span className="tag is-info">{event.eventProps.Social}</span>
            <span className="tag">
              {event.eventProps.Public ? "Publico" : "Privado"}
            </span>
          </section>
          <section>
            <div className="is-flex is-justify-content-space-between">
              <time>
                <p>{event.eventProps.date}</p>
                <p>
                  {event.eventProps.Start}
                  <br />
                  <br />
                  {event.eventProps.Finish}
                </p>
              </time>
              {event.eventProps.CurrentUsers >= event.eventProps.MaxUsers ? (
                <span className="tag is-danger">Não Existem Vagas</span>
              ) : (
                <span className="tag is-success">
                  Ainda Existem{" "}
                  {event.eventProps.MaxUsers - event.eventProps.CurrentUsers}{" "}
                  Vagas
                </span>
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
