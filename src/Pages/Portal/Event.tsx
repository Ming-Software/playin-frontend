import Event from "../../Components/Event-Component";
import { EventProps } from "../../Models/Events/event.interface";
import { useParams } from "react-router-dom";
import event from "../../Models/Events/event";
import { useState } from "react";

export const EventPage = () => {
  const [events, setEvents] = useState<EventProps>({
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
  const [onlyOne, setOnlyOne] = useState(false);
  let { id } = useParams();
  if (id != null && !onlyOne) {
    event
      .getEvent(id)
      .then((data: any) => {
        let cenas: EventProps = {
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
        };
        setEvents(cenas);
      })
      .catch()
      .finally();
    setOnlyOne(true);
  }

  return <Event eventProps={events}></Event>;
};

export default EventPage;
