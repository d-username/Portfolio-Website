import { NavLink } from "react-router-dom";
import './navbar.css';

export function Navbar() {
    return (
      <nav id='navbar'>
        <ul id='navbar-pages'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <ul id='navbar-follow'>
          <li>
            <a
              href='https://github.com/d-username'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/icons/github.png' alt='GitHub icon' className="navbar-icon"/>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/david-czuczor-06748423b/'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/icons/linkedin.png' alt='LinkedIn icon' className="navbar-icon"/>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/czdavid93/'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/icons/instagram.png' alt='Instagram icon' className="navbar-icon"/>
            </a>
          </li>
        </ul>
        <button id="button-resume">
          <NavLink to='/resume'>Resume</NavLink>
        </button>
      </nav>
    );
}

