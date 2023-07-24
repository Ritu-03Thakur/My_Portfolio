
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
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src="../images/avatar.jpeg"
          alt = ""
          style={{ width: "40px", height: "40px", borderRadius: "50px" }} />
      </Link>

      {/* menu */}
      <ul className="nav-menu">
        <li className="cursor-pointer">
          <HashLink to="/#heroSection" onClick={() => window.scrollTo(0, 0)}>
            Home
          </HashLink>
        </li>
       
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
          {!sideNav ? (
            <MenuIcon size={22} style={{transform : "translateX(0px)"}} />
          ) : (
            <ClearIcon size={22}  />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <ul
       className= {`mobile-nav-menu ${sideNav ? "active" : ""} `}    >
        <li className="mobile-nav-item">
          <HashLink onClick={handleClick} className="cursor-pointer" to="/#heroSection">
            Home
          </HashLink>
        </li>
        <li className="mobile-nav-item">
          <HashLink
            onClick={handleClick}
            className="cursor-pointer"
            to="/#about"
          >
           About
          </HashLink>
        </li>
        <li className="mobile-nav-item">
          <HashLink
            onClick={handleClick}
            className="cursor-pointer"
            to="/#skills"
          >
            Skill
          </HashLink>
        </li>
        <li className="mobile-nav-item">
          <HashLink
            onClick={handleClick}
            className="cursor-pointer"
            to="/#projects"
          >
           Projects
          </HashLink>
        </li>
        <li className="mobile-nav-item">
          <HashLink
            onClick={handleClick}
            className="cursor-pointer"
            to="/"
          >
           Resume
          </HashLink>
        </li>
        <li className="mobile-nav-item">
          <HashLink
            onClick={handleClick}
            className="cursor-pointer"
            to="/#testimonials"
          >
            Testimonials
          </HashLink>
        </li>
        <li className="mobile-nav-item">
          <a
            onClick={handleClick}
            className="cursor-pointer"
            href="/#contact"
          >
          Contact
          </a>
        </li>
      </ul>

      {/* Social icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[100px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-0px] hover:px-1 duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[100px] h-[40px] flex justify-between items-center ml-[-65px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[100px] h-[40px] flex justify-between items-center ml-[-60px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:ajbl.segun@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[100px] h-[40px] flex justify-between items-center ml-[-55px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
