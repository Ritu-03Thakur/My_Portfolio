
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
 import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss" ; 


const Navbar = () => {  

  const [sideNav, setSideNav] = useState(false);
  const handleClick = () => setSideNav(!sideNav);  

  return (
   

    <div className="navbar">
      <Link
        className="cursor-pointer"
        to="/"
        onClick={() => window.scrollTo(0, 0)} >
        <img
          src="../images/avatar.jpeg"
          alt = ""
          style={{ width: "40px", height: "40px", borderRadius: "50px" }} />
      </Link>
    <div className="navbar-content">

      <ul  className= {`nav-menu ${sideNav ? "":"active" } `} >
 
       
        <li className="cursor-pointer">
          <HashLink to="/#about">About</HashLink>
        </li>
        <li className="cursor-pointer">
          <HashLink to="/#skills">Skill</HashLink>
        </li>
        <li className="cursor-pointer">
          <HashLink to="/#projects">Projects</HashLink>
        </li>
        <li className="cursor-pointer">
          <a href="/">
            Resume
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="/#testimonials">
            Testimonials
          </a>
        </li>
        <li className="cursor-pointer">
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>

      <div className="nav-icon-box">
       
        <div
          onClick={handleClick}
          className="nav-icon"
        >
        
          {sideNav ? (
            <MenuIcon size={22} style={{ color: "#f7f7f7"}} />
          ) : (
            <ClearIcon size={22} style={{  color: "#f7f7f7"}} />
          )}
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Navbar;
