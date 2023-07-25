import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'my-profile', text: 'My Profile' },
];

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <div className="logo">
        <img src="\resource\planet.png" alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-link">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default NavBar;
