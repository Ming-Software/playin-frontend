import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faArrowUp,
  faBasketball,
  faCalendar,
  faCalendarPlus,
  faCheckSquare,
  faCoffee,
  faEnvelopeCircleCheck,
  faFutbol,
  faFutbolBall,
  faStar,
  faTableTennisPaddleBall,
  faUser,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/Login";
import { EventPage } from "./Pages/Portal/Event";
import EventsPage from "./Pages/Portal/Events";
import MyEventsPage from "./Pages/Portal/MyEvents";
import MyInvitesPage from "./Pages/Portal/MyInvites";
import MyPermissionsPage from "./Pages/Portal/MyPermissions";
import NewEvent from "./Pages/Portal/NewEvent";
import PartEventsPage from "./Pages/Portal/PartEvents";
import { PortalPage } from "./Pages/Portal/portal";
import UserPage from "./Pages/Portal/User";
import SignUpPage from "./Pages/Signup";

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
  faArrowDown,
  faEnvelopeCircleCheck
);

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
          <Route path="userpage/:id" element={<UserPage />} />
        </Route>

        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
