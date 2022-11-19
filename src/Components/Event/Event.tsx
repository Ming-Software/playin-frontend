import { EventProps } from "./Event.interface";

export const Event = (event: { eventProps: EventProps }) => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <div className="content">
          <h4 className="title is-1">{event.eventProps.nameEvent}</h4>
          <div className="columns is-mobile">
            <div className="column is-6">
              <div>
                <strong>Criador:</strong>
              </div>
              {event.eventProps.creator}
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
              {event.eventProps.local}
            </div>
            <div className="column is-4">
              <div>
                <strong>Data de começo:</strong>
              </div>
              {event.eventProps.startTime}
            </div>
            <div className="column is-4">
              <div>
                <strong>Data de final:</strong>
              </div>
              {event.eventProps.endTime}
            </div>
          </div>
          <div>
            <strong>Descrição: </strong>
          </div>
          <p>
            Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac
            tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.
          </p>
          <div className="columns">
            <div className="column is-5">
              <div>
                <strong>nº atual de participantes: </strong>
                {event.eventProps.actualParticipants}
              </div>
              <div>
                <strong>nº máximo de participantes: </strong>
                {event.eventProps.maxParticipants}
              </div>
            </div>
            <div className="column is-4">
              <div>
                <strong>Competitividade:</strong>
              </div>
              <span className="tag is-medium is-info is-centered">{event.eventProps.social_label}</span>
            </div>
            <div className="column is-4">
              <div>
                <strong>Tipo de evento: </strong>
              </div>
              <span className="tag is-medium is-info">{event.eventProps.sport_label}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
