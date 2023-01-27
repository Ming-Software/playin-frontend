import { useEffect, useState } from "react";
import { EventProps } from "../../Models/Events/event.interface";
import Event from "../../Models/Events/event";
import EventComponent from "../../Components/Event-Component";
import { useUserStore } from "../../Stores/userStore";

const MyEventsPage = () => {
  const EVENTS_PER_PAGE = 15;

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState<EventProps[]>();
  const currentUserId = useUserStore();

  useEffect(
    () =>
      useUserStore.subscribe((state) => {
        Event.getMyEvents(currentPage, state.id).then((data: any) => {
          setTotalPages(Math.ceil(data.Total / EVENTS_PER_PAGE));
          setEvents(data.Events);
        });
      }),
    [currentPage]
  );

  return (
    <div>
      <main className="section">
        <div className="columns is-mobile is-multiline">
          {events?.map((event) => (
            <div
              className="column is-full-mobile is-one-half-desktop is-one-third-widescreen"
              key={event.ID}
            >
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
                <button
                  className="pagination-link"
                  onClick={() => setCurrentPage(page + 1)}
                >
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
export default MyEventsPage;
