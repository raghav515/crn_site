import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import SininPage from "./components/pages/signin";
import ContactForm from "./components/ContactUs";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SininPage />} />
                <Route path="/contact-us" element={<ContactForm/>} />
            </Routes>
        </Router>
    );
}

export default App;
