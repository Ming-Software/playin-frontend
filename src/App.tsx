import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import AboutPage from "./Pages/About";
import SignUpPage from "./Pages/Signup";
import NewEvent from "./Pages/NewEvent";
import Event from "./Components/Event/Event";
import { EventsPage } from "./Pages/Events";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/newevent" element={<NewEvent />} />
        <Route
          path="/events"
          element={
            /*<Event
              eventProps={{
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
              }}
            />*/ <EventsPage />
          }
        />
        <Route
          path="/event"
          element={
            <Event
              eventProps={{
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
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
