import NavLink from './NavLink';
import '../styles/NavBar.css';

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <div className="logo">
        <img src="\resource\planet.png" alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <NavLink />
    </nav>
  </header>
);

export default NavBar;
