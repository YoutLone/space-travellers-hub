import NavLink from './NavLink';

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <div className="logo">
        <h1>Space Travelers&apos; Hub</h1>
        <img src="\resource\planet.png" alt="logo" />
      </div>
      <NavLink />
    </nav>
  </header>
);

export default NavBar;
