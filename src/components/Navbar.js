import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav-wrapper">
        <nav className="navbar">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/About">About</Link>
            </li>
            <li className="navigation__item">
              <Link to="/Skill">Skills</Link>
            </li>
            <li className="navigation__item">
              <Link to="/Project">Project</Link>
            </li>
            <li className="navigation__item">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
