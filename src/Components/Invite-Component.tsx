import { useNavigate } from "react-router-dom";
import { EventProps } from "../Models/Events/event.interface";
import evento from "..//Models/Events/event";
import { useState } from "react";
import { UserPropsShort } from "../Models/User/user.interface";
import User from "../Models/User/user";

export const Invite = (event: { eventProps: EventProps }) => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const navigateToEventPage = () => {
    navigate(`/portal/events/${event.eventProps.ID}`);
  };
  const deleteInvite = () => {
    evento.deleteMyInvite(event.eventProps.ID!).then((data: any) => {
      setVisible(false);
    });
  };

  const acepptInvite = () => {
    User.getSignInUser().then((data: UserPropsShort) => {
      console.log(data.id);
      evento.acceptMyInvite(event.eventProps.ID!, { UserID: data.id }).then((data: any) => {
        setVisible(false);
      });
    });
  };

  return (
    <>
      {visible && (
        <div className="card">
          <header className="card-header">
            <div className="card-header-title is-justify-content-space-between">
              <p className={`${event.eventProps.CurrentUsers >= event.eventProps.MaxUsers ? "has-text-danger" : "has-text-success"}`}>
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
                <span className="tag">{event.eventProps.Public ? "Publico" : "Privado"}</span>
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
              <button onClick={acepptInvite} className="button is-success is-small is-responsive is-rounded is-focused m-1">
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
            </div>
            <div className="card-footer-item">
              <button onClick={deleteInvite} className="button is-danger is-small is-responsive is-rounded is-focused m-1">
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

export default Invite;
