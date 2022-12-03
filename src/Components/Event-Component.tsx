import { EventProps } from "../Models/Events/event.interface";

export const Event = (event: { eventProps: EventProps }) => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <div className="content">
          <h4 className="title is-1">{event.eventProps.Name}</h4>
          <div className="columns is-mobile">
            <div className="column is-6">
              <div>
                <strong>Criador:</strong>
              </div>
              {event.eventProps.Creator}
            </div>
            <div className="column is-6">
              <div>
                <strong>Date:</strong>
              </div>
              {event.eventProps.date}
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column is-4">
              <div>
                <strong>Local:</strong>
              </div>
              {event.eventProps.Locale}
            </div>
            <div className="column is-4">
              <div>
                <strong>Data de começo:</strong>
              </div>
              {event.eventProps.Start}
            </div>
            <div className="column is-4">
              <div>
                <strong>Data de final:</strong>
              </div>
              {event.eventProps.Finish}
            </div>
          </div>
          <div>
            <strong>Descrição: </strong>
          </div>
          <p>{event.eventProps.Description}</p>
          <div className="columns">
            <div className="column is-5">
              <div>
                <strong>nº atual de participantes: </strong>
                {event.eventProps.CurrentUsers}
              </div>
              <div>
                <strong>nº máximo de participantes: </strong>
                {event.eventProps.MaxUsers}
              </div>
            </div>
            <div className="column is-4">
              <div>
                <strong>Competitividade:</strong>
              </div>
              <span className="tag is-medium is-info is-centered">{event.eventProps.Social}</span>
            </div>
            <div className="column is-4">
              <div>
                <strong>Tipo de evento: </strong>
              </div>
              <span className="tag is-medium is-info">{event.eventProps.Activity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
