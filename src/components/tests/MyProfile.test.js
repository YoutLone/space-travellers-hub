import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyProfile from '../MyProfile';

// Mocking the RocketProfile and MissionProfile components
/* eslint-disable */
jest.mock('../RocketProfile', () => () => <div data-testid="rocket-profile">Mocked RocketProfile</div>);
/* eslint-disable */
jest.mock('../MissionProfile', () => () => <div data-testid="mission-profile">Mocked MissionProfile</div>);

describe('MyProfile', () => {
  test('renders MyProfile component', () => {
    const { getByText, getByTestId } = render(<MyProfile />);

    // Check if the component renders the "My Rockets" header
    const rocketHeader = getByText('My Rockets');
    expect(rocketHeader).toBeInTheDocument();

    // Check if the component renders the "My Missions" header
    const missionHeader = getByText('My Missions');
    expect(missionHeader).toBeInTheDocument();

    // Check if the RocketProfile component is rendered
    const rocketProfile = getByTestId('rocket-profile');
    expect(rocketProfile).toBeInTheDocument();

    // Check if the MissionProfile component is rendered
    const missionProfile = getByTestId('mission-profile');
    expect(missionProfile).toBeInTheDocument();
  });
});
