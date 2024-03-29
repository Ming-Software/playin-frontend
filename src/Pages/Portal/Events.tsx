import { useEffect, useState } from "react";
import { EventProps } from "../../Models/Events/event.interface";
import Event from "../../Models/Events/event";
import EventComponent from "../../Components/Event-Component";

const EventsPage = () => {
  const EVENTS_PER_PAGE = 15;

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState<EventProps[]>();

  useEffect(() => {
    Event.getEvents(currentPage).then((data: any) => {
      setTotalPages(Math.ceil(data.Total / EVENTS_PER_PAGE));
      const mappedData = data.Events.map((event: EventProps) => ({
        ID: event.ID,
        Name: event.Name,
        Creator: event.Creator,
        CreatorID: event.CreatorID,
        Locale: event.Locale,
        date: event.Start.split("T")[0],
        Start: event.Start.split("T")[1].split(".")[0],
        Finish: event.Finish.split("T")[1].split(".")[0],
        Description: event.Description,
        MaxUsers: event.MaxUsers,
        CurrentUsers: event.CurrentUsers,
        Social: event.Social,
        Activity: event.Activity,
        Public: event.Public,
      }));
      setEvents(mappedData);
    });
  }, [currentPage]);

  return (
    <div>
      <main className="section">
        <div className="columns is-mobile is-multiline">
          {events?.map((event) => (
            <div className="column is-full-mobile is-half-tablet is-one-third-fullhd" key={event.ID}>
              <EventComponent eventProps={event} />
            </div>
          ))}
        </div>
      </main>
      <footer className="section">
        <nav className="pagination">
          <ul className="pagination-list">
            {Array.from(Array(totalPages).keys()).map((page) => (
              <li key={page}>
                <button className="pagination-link" onClick={() => setCurrentPage(page + 1)}>
                  {page + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
};
export default EventsPage;
