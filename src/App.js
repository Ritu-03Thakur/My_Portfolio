import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Skill" element={<Skill />} />
          <Route exact path="/Project" element={<Project />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <div className="animationArea">
          <ul className="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </>
  );
}
