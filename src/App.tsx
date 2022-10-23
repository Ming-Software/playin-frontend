import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import AboutPage from "./Pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
