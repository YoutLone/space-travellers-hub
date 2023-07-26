import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionProfile from '../components/MissionProfile';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('MissionProfile Component', () => {
  test('renders "No Missions Joined" message when no missions are joined', () => {
    const store = mockStore({
      missions: {
        Missions: [],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MissionProfile />
      </Provider>,
    );

    expect(getByText('No Missions Joined')).toBeInTheDocument();
  });

  test('renders the list of joined missions', () => {
    const mockMissions = [
      {
        mission_id: 1,
        mission_name: 'Mission 1',
        joined: true,
      },
      {
        mission_id: 2,
        mission_name: 'Mission 2',
        joined: true,
      },
      {
        mission_id: 3,
        mission_name: 'Mission 3',
        joined: true,
      },
    ];

    const store = mockStore({
      missions: {
        Missions: mockMissions,
      },
    });

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <MissionProfile />
      </Provider>,
    );

    // Check that "No Missions Joined" message is not displayed
    expect(queryByText('No Missions Joined')).toBeNull();

    // Check that each joined mission name is rendered correctly
    mockMissions.forEach((mission) => {
      expect(getByText(mission.mission_name)).toBeInTheDocument();
    });
  });

  test('does not render any joined missions', () => {
    const mockMissions = [
      {
        mission_id: 1,
        mission_name: 'Mission 1',
        joined: false,
      },
      {
        mission_id: 2,
        mission_name: 'Mission 2',
        joined: false,
      },
    ];

    const store = mockStore({
      missions: {
        Missions: mockMissions,
      },
    });

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <MissionProfile />
      </Provider>,
    );

    // Check that "No Missions Joined" message is displayed
    expect(getByText('No Missions Joined')).toBeInTheDocument();

    // Check that each joined mission name is not rendered
    mockMissions.forEach((mission) => {
      expect(queryByText(mission.mission_name)).toBeNull();
    });
  });
});
