const links = [
  { text: 'Rockets' },
  { text: 'Mission' },
  { text: 'My Profile' },
];

const NavLink = () => (
  <ul className="nav-link">
    {links.map((link) => (
      <li key={link.text}>
        {link.text}
      </li>
    ))}
  </ul>
);

export default NavLink;
