import "./app.scss";
import { Navbar } from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Landing } from "./pages/Landing";
import LoginForm from "./pages/LoginForm";
const App = () => {
  return <div>
    <LoginForm />
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
    </Router>
  </div>;
};

export default App;
