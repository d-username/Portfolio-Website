import { NavLink } from "react-router-dom";
import './navbar.css';

export function Navbar() {
    return (
      <nav id='navbar'>
        <ul id='navbar-pages'>
          <li>
            <NavLink
              to='/' className={'nav-link'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={'nav-link'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' className={'nav-link'}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={'nav-link'}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div id='navbar-contacts'>
          <ul id='navbar-follow'>
            <li>
              <a
                href='https://github.com/d-username'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/icons/github.png'
                  alt='GitHub icon'
                  className='navbar-icon'
                />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/david-czuczor-06748423b/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/icons/linkedin.png'
                  alt='LinkedIn icon'
                  className='navbar-icon'
                />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/czdavid93/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/icons/instagram.png'
                  alt='Instagram icon'
                  className='navbar-icon'
                />
              </a>
            </li>
          </ul>

          <button id='button-resume'>
            <NavLink to='/resume'>Resume</NavLink>
          </button>
        </div>
      </nav>
    );
}

