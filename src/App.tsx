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
