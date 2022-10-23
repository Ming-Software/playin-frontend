import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./Pages/Login";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
