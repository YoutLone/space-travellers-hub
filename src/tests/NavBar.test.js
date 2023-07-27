import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  test('renders navigation links correctly', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );
  });

  test('displays the logo and header correctly', () => {
    const { getByAltText, getByText } = render(
      <Router>
        <NavBar />
      </Router>,
    );
    const logo = getByAltText('logo');
    expect(logo).toBeInTheDocument();

    const header = getByText("Space Travelers' Hub");
    expect(header).toBeInTheDocument();
  });

  test('displays the navigation links correctly with correct paths', () => {
    const { getByText } = render(
      <Router>
        <NavBar />
      </Router>,
    );
    const links = [
      { path: '/', text: 'Rockets' },
      { path: '/missions', text: 'Missions' },
      { path: '/my-profile', text: 'My Profile' },
    ];

    links.forEach((link) => {
      const linkElement = getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.path);
    });
  });

  test('render NavBar component correctly', () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
