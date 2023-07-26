import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../Missions';

const mockStore = configureMockStore([thunk]);

describe('Missions Component', () => {
  test('renders Missions component correctly', () => {
    const initialState = {
      missions: {
        Missions: [], // Initialize with an empty array or the default value you expect
      },
    };
    const store = mockStore(initialState);
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders Missions component with mission list correctly', () => {
    const missionList = [
      {
        mission_id: 1,
        mission_name: 'Mission 1',
        description: 'Mission 1 Description',
        joined: false,
      },
      {
        mission_id: 2,
        mission_name: 'Mission 2',
        description: 'Mission 2 Description',
        joined: true,
      },
    ];

    const initialState = {
      missions: {
        Missions: missionList, // Set the initial state with the missionList
      },
    };
    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
