import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Project from "./components/Project";


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
        path: "/project",
        element: <Project />,
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
