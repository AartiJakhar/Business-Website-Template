import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
function App() {
  return (
    <>
      <header>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/> } />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </Router>
      </header>
    </>
  );
}

export default App;
