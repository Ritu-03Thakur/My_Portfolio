import "./App.scss";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Home from "./components/Home";
import { useState } from "react";
import AllProject from "./components/AllProject";






export default function App() {
  const [loading , setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if(spinner){
    setTimeout(()=>{
      spinner.style.display = "none" ; 
      setLoading(false) ; 
    },3000 );
  }
  return (
   !loading && (
    <>
     <BrowserRouter>
     <Routes>
      <Route path={"/"} element = {<Home/>}  />
      <Route path={"/allprojects"} element = {<AllProject/>}  />
     </Routes>
     </BrowserRouter>  
    </>

   )
    
   
  );
}
