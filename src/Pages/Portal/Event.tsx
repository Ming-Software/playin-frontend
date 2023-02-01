import { EventProps } from "../../Models/Events/event.interface";
import { useParams } from "react-router-dom";
import Event from "../../Models/Events/event";
import { useEffect, useState } from "react";
import User from "../../Models/User/user";
import { data } from "cypress/types/jquery";

export const EventPage = () => {
  const [isModalParticipants, setModalParticipants] = useState(false);
  const [isModalGuests, setModalGuests] = useState(false);
  const [isModalPermissions, setModalPermissions] = useState(false);
  const [isModalFilter, setModaFilter] = useState(false);
  const [filter, setFilter] = useState("");
  const [guestName, setGuestName] = useState("");
  const [userList, setUserList] = useState([]);
  const [userID, setUserID] = useState<string>();
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

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };
  const openModalParticipants = (id: string) => {
    if (event.Creator === user) setModalParticipants(true);
    setUserID(id);
  };
  const openModalGuests = (id: string) => {
    if (event.Creator === user) setModalGuests(true);
    setUserID(id);
  };

  const openModalPermissions = (id: string) => {
    if (event.Creator === user) setModalPermissions(true);
    setUserID(id);
  };

  const deleteParticipant = () => {
    Event.deleteParticipants(id, userID!)
      .then(() => {
        Event.getParticipants(id).then((data: any) => {
          setParticipant(data.Participants);
        });
        setModalParticipants(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUser = (userId: string) => {
    console.log(userId);
    Event.inviteGuest(id!, userId!).then((data: any) => {
      Event.getInvitedUsers(id).then((data: any) => {
        setUserInvited(data.Guests);
      });
      setModaFilter(false);
    });
  };

  const declineGuests = () => {
    Event.declineGuests(id, userID!)
      .then(() => {
        Event.getInvitedUsers(id).then((data: any) => {
          setUserInvited(data.Guests);
        });
        setModalGuests(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const declinePermissions = () => {
    Event.declinePermissions(id, userID!)
      .then(() => {
        Event.getAskedUsers(id).then((data: any) => {
          setUserAsked(data.Permissions);
        });
        setModalPermissions(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const acceptPermissions = () => {
    Event.acceptPermissions(id, userID!)
      .then(() => {
        Event.getAskedUsers(id).then((data: any) => {
          setUserAsked(data.Permissions);
          Event.getParticipants(id).then((data: any) => {
            setParticipant(data.Participants);
          });
        });
        setModalPermissions(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  }, []);

  useEffect(() => {
    Event.getAskedUsers(id).then((data: any) => {
      setUserAsked(data.Permissions);
    });
  }, []);

  useEffect(() => {
    Event.getParticipants(id).then((data: any) => {
      setParticipant(data.Participants);
    });
  }, []);

  const applyFilter = () => {
    Event.getUserFiltered(filter).then((data: any) => {
      setUserList(data);
    });
  };

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
                            <a className="has-text-black" onClick={() => openModalParticipants(user.ID)}>
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
                            <a className="has-text-black" onClick={() => openModalGuests(user.ID)}>
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
                            <a className="has-text-black" onClick={() => openModalPermissions(user.ID)}>
                              {user.Name}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button className="button is-primary" aria-label="close" onClick={() => setModaFilter(true)}>
                  Convidar Pessoas
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <div className={`modal ${isModalParticipants && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Remover Participantes</p>
            <button className="delete" aria-label="close" onClick={() => setModalParticipants(false)}></button>
          </header>
          <footer className="modal-card-foot">
            <button className="button is-danger" onClick={deleteParticipant}>
              Remover
            </button>
          </footer>
        </div>
      </div>
      <div className={`modal ${isModalGuests && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Remover Convidados</p>
            <button className="delete" aria-label="close" onClick={() => setModalGuests(false)}></button>
          </header>
          <footer className="modal-card-foot">
            <button className="button is-danger" onClick={declineGuests}>
              Rejeitar
            </button>
          </footer>
        </div>
      </div>
      <div className={`modal ${isModalPermissions && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Aceitar Pedido</p>
            <button className="delete" aria-label="close" onClick={() => setModalPermissions(false)}></button>
          </header>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={acceptPermissions}>
              Aceitar
            </button>
            <button className="button is-danger" onClick={declinePermissions}>
              Rejeitar
            </button>
          </footer>
        </div>
      </div>
      <div className={`modal ${isModalFilter && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Convidar Pessoas</p>
            <button className="delete" aria-label="close" onClick={() => setModaFilter(false)}></button>
          </header>
          <footer className="modal-card-foot is-block-mobile is-block-fullhd">
            <div className="modal-card-foot is-flex-mobile is-flex-fullhd">
              <input value={filter} type="text" className="input is-primary" placeholder="filter" onChange={handleChange} />
              <button className="button is-success" onClick={applyFilter}>
                Pesquisa
              </button>
            </div>
            <div className="select is-rounded is-focused is-medium is-justify-content-center">
              <select value={guestName} onChange={(user) => setGuestName(user.target.value)}>
                {userList?.map((user: any) => (
                  <option key={user.ID} value={user.ID}>
                    {user.Name}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="button is-rounded is-primary is-focused is-small is-justify-content-center"
              onClick={() => addUser(guestName)}
            >
              Convidar
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default EventPage;
