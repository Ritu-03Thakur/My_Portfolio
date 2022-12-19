import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo" id="ritu">
                <img src="./logo.jpeg" alt="" height={35} width = {35} style={{borderRadius : "5px"}}/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Skill"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skill
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Project"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
