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
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/david-czuczor-06748423b/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/czdavid93/'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </li>
        </ul>
        <button>Resume</button>
      </nav>
    );
}

