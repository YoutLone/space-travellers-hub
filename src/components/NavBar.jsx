const links = [
  { text: 'Rockets' },
  { text: 'Mission' },
  { text: 'My Profile' },
];

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <div className="logo">
        <h1>Space Travelers&apos; Hub</h1>
        <img src="\resource\planet.png" alt="logo" />
      </div>
      <ul className="nav-link">
        {links.map((link) => (
          <li key={link.text}>
            {link.text}
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default NavBar;
