<<<<<<< HEAD
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import AboutPage from "./Pages/About";
<<<<<<< HEAD
import ProfilePage from "./Pages/Profile";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
=======
import SignUpPage from "./Pages/Signup";
import NewEvent from "./Pages/NewEvent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/newevent" element={<NewEvent />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> a85b650c650fe67f193bd1e831c5caa597c1f4af
};

export default App;
=======
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
import { EventPage } from "./Pages/Portal/Event";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/portal" element={<PortalPage />}>
          <Route path="newevent" element={<NewEvent />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="events/:id" element={<EventPage />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
>>>>>>> 4e38924fc0417f998cafcd20528ab6a07059d13e
