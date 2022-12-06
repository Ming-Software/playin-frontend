import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import AboutPage from "./Pages/About";
import SignUpPage from "./Pages/Signup";
import { NewEvent } from "./Pages/Portal/NewEvent";

import { EventsPage } from "./Pages/Portal/Events";
import { PortalPage } from "./Pages/Portal/portal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/portal" element={<PortalPage />}>
          <Route path="newevent" element={<NewEvent />} />
          <Route path="events" element={<EventsPage />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
