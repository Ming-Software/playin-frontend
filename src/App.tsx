import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import AboutPage from "./Pages/About";
import SignUpPage from "./Pages/Signup";
import NewEvent from "./Pages/Portal/NewEvent";
import EventsPage from "./Pages/Portal/Events";
import { PortalPage } from "./Pages/Portal/portal";
import { EventPage } from "./Pages/Portal/Event";
import MyEventsPage from "./Pages/Portal/MyEvents";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/portal" element={<PortalPage />}>
          <Route path="newevent" element={<NewEvent />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="myevents" element={<MyEventsPage />} />
          <Route path="events/:id" element={<EventPage />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
