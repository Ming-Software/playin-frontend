import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/Signup";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
