import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project";
import { useState } from "react";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
     
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Skill",
        element: <Skill />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      
    ],
  },
]);

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
     <RouterProvider router={router} />    
    </>

   )
    
   
  );
}
