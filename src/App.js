import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project";
import Resume from "./components/Resume";
import { useState } from "react";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      < Footer /> 
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
        path: "/Resume",
        element: <Resume />,
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
