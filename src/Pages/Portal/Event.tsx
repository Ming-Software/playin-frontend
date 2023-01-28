import { EventProps } from "../../Models/Events/event.interface";
import { useParams } from "react-router-dom";
import Event from "../../Models/Events/event";
import { useEffect, useState } from "react";
import User from "../../Models/User/user";
import { UserProps, UserPropsShort } from "../../Models/User/user.interface";

export const EventPage = () => {
  const [isModal, setModal] = useState(false);

  const openModal = () => {
    if (event.Creator === user) setModal(true);
  };

  const [userInvited, setUserInvited] = useState<any>();
  const [userAsked, setUserAsked] = useState<any>();
  const [participant, setParticipant] = useState<any>();
  const [user, setUser] = useState<string>();
  const [event, setEvent] = useState<EventProps>({
    Name: "",
    Creator: "",
    Locale: "",
    date: "",
    Start: "",
    Finish: "",
    Description: "",
    MaxUsers: 0,
    CurrentUsers: 0,
    Social: "",
    Activity: "",
    Public: false,
  });
  let { id } = useParams();

  useEffect(() => {
    Event.getEvent(id).then((data: any) => {
      setEvent({
        Name: data.Name,
        Creator: data.Creator,
        Locale: data.Locale,
        date: data.Start.split("T")[0],
        Start: data.Start.split("T")[1].split(".")[0],
        Finish: data.Finish.split("T")[1].split(".")[0],
        Description: data.Description,
        MaxUsers: data.MaxUsers,
        CurrentUsers: data.CurrentUsers,
        Social: data.Social,
        Activity: data.Activity,
        Public: data.Public,
      });
    });

    User.getSignInUser().then((data: any) => {
      setUser(data.name);
    });
  }, []);

  useEffect(() => {
    Event.getInvitedUsers(id).then((data: any) => {
      setUserInvited(data.Guests);
    });
  }, [userInvited]);

  useEffect(() => {
    Event.getAskedUsers(id).then((data: any) => {
      setUserAsked(data.Permissions);
    });
  }, [userAsked]);

  useEffect(() => {
    Event.getParticipants(id).then((data: any) => {
      setParticipant(data.Participants);
    });
  }, [participant]);

  return (
    <>
      <main className="section">
        <div className="box has-background-white-ter">
          <div className="columns is-mobile is-multiline">
            <section className="column is-full-mobile is-three-fifths-tablet">
              <h1 className="title">{event.Name}</h1>
              <h2 className="subtitle">{event.Creator}</h2>

              <div className="tags are-medium">
                <span className="tag is-link">{event.Activity}</span>
                <span className="tag is-info">{event.Social}</span>
                <span className="tag is-primary">{event.Public ? "Publico" : "Privado"}</span>
                {event.CurrentUsers >= event.MaxUsers ? (
                  <span className="tag is-danger">Não Existem Vagas</span>
                ) : (
                  <span className="tag is-success">Ainda Existem {event.MaxUsers - event.CurrentUsers} Vagas</span>
                )}
              </div>
              <div className="columns is-mobile is-centered">
                <div className="column is-half-mobile is-two-thirds-tablet">
                  <div className="box">
                    <p>{event.Description}</p>
                  </div>
                </div>
                <div className="column is-half-mobile is-one-third-tablet">
                  <div className="box has-background-grey-lighter	has-text-white	">
                    <time>
                      <p>
                        <span className="tag is-link is-light">Data: {event.date}</span>
                      </p>
                      <p>
                        <span className="tag is-link is-light">Inicio: {event.Start}</span>

                        <span className="tag is-link is-light">Fim: {event.Finish}</span>
                      </p>
                    </time>
                    <p>
                      <span className="tag is-link is-light">Local: {event.Locale}</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="column is-full-mobile is-two-fifths-tablet">
              <div className="columns is-mulitline is-mobile">
                <div className="column">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Participantes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {participant?.map((user: any) => (
                        <tr key={user.ID}>
                          <td>
                            <a className="has-text-black" onClick={openModal}>
                              {user.Name}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="column">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Convidados</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userInvited?.map((user: any) => (
                        <tr key={user.ID}>
                          <td>
                            <a className="has-text-black" onClick={openModal}>
                              {user.Name}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="column">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pedidos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userAsked?.map((user: any) => (
                        <tr key={user.ID}>
                          <td>
                            <a className="has-text-black" onClick={openModal}>
                              {user.Name}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <div className={`modal ${isModal && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <footer className="modal-card-foot">
            <button className="button is-success">Aceitar</button>
            <button className="button is-danger">Rejeitar</button>
          </footer>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={() => setModal(false)}></button>
      </div>
    </>
  );
};

export default EventPage;
