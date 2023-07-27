import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  const links = [
    { path: '/', name: 'Rockets' },
    { path: '/missions', name: 'Missions' },
    { path: '/my-profile', name: 'My Profile' },
  ];

  const location = useLocation();

  return (
    <header className="navbar-container">
      <nav className="nav-bar">
        <div className="logo">
          <img src="\resource\planet.png" alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <ul className="nav-link">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={link.path === location.pathname ? 'active' : ''}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
