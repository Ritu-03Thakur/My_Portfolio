import "./App.css";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom" ; 
// components
 import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact_Us from "./components/Contact_Us";

export default function App() {
  return (
    <>
   
            
    <Router>
    <Navbar/>
    
   <Routes>
    <Route exact path = "/" element = { <Home /> }/> 
    <Route exact path = "/About" element = { <About/> }/> 
    <Route exact path = "/Skill" element = { <Skill/> }/> 
    <Route exact path = "/Contact_Us" element = { <Contact_Us/> }/> 
   </Routes>
    </Router>
    </>
  );
}