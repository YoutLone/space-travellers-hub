const links = [
  { text: 'Rockets' },
  { text: 'Mission' },
  { text: 'My Profile' },
];

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <h1>Space Travelers&apos; Hub</h1>
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
