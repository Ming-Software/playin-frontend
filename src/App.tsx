import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBasketball,
  faCheckSquare,
  faCoffee,
  faFutbol,
  faFutbolBall,
  faTableTennisPaddleBall,
  faTableTennis,
  faVolleyball,
  faCalendar,
  faCalendarPlus,
  faStar,
  faUser,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faFutbol,
  faVolleyball,
  faFutbolBall,
  faBasketball,
  faTableTennisPaddleBall,
  faCalendar,
  faCalendarPlus,
  faStar,
  faUser,
  faArrowUp,
  faArrowDown
);

import LoginPage from "./Pages/Login";
import AboutPage from "./Pages/About";
import SignUpPage from "./Pages/Signup";
import NewEvent from "./Pages/Portal/NewEvent";
import EventsPage from "./Pages/Portal/Events";
import { PortalPage } from "./Pages/Portal/portal";
import { EventPage } from "./Pages/Portal/Event";
import MyEventsPage from "./Pages/Portal/MyEvents";
import MyPermissionsPage from "./Pages/Portal/MyPermissions";
import MyInvitesPage from "./Pages/Portal/MyInvites";
import PartEventsPage from "./Pages/Portal/PartEvents";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/portal" element={<PortalPage />}>
          <Route path="newevent" element={<NewEvent />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="myevents" element={<MyEventsPage />} />
          <Route path="partevents" element={<PartEventsPage />} />
          <Route path="mypermissions" element={<MyPermissionsPage />} />
          <Route path="myinvites" element={<MyInvitesPage />} />
          <Route path="events/:id" element={<EventPage />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
