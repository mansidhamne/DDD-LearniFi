import "./app.scss";
import { Navbar } from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Instructors } from "./pages/Instructors";
import { Courses } from "./pages/Courses";
import { ContactUs } from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
