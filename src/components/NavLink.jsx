import { Link } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'my-profile', text: 'My Profile' },
];

const NavLink = () => (
  <ul className="nav-link">
    {links.map((link) => (
      <li key={link.text}>
        <Link to={link.path}>{link.text}</Link>
      </li>
    ))}
  </ul>
);

export default NavLink;
