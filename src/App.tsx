import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import AboutPage from "./Pages/About";
import SignUpPage from "./Pages/Signup";
import NewEvent from "./Pages/Portal/NewEvent";
import { EventProps } from "./Models/Events/event.interface";
import { EventsPage } from "./Pages/Portal/Events";
import { PortalPage } from "./Pages/Portal/portal";
import Event from "./Components/Event-Component";

const App = () => {
  let cenas: EventProps = {
    nameEvent: "jogo",
    creator: "joni",
    local: "braga",
    date: "1/12/2022",
    startTime: "10:00",
    endTime: "11:00",
    description: "jogo de preparação",
    maxParticipants: 10,
    actualParticipants: 5,
    social_label: "Competitivo",
    sport_label: "Basquete",
    public: true,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/portal" element={<PortalPage />}>
          <Route path="newevent" element={<NewEvent />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="event" element={<Event eventProps={cenas} />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
