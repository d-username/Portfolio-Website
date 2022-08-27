import { NavLink } from 'react-router-dom';
import './footer.css';

export function Footer() {
  return (
    <footer>
      © 2022 | David Czuczor
      <ul id='footer-ul'>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
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
    </footer>
  );
}
