import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import RocketProfile from '../components/RocketProfile'

const mockStore = configureStore([]);

describe('RocketProfile', () => {
  test('should display a list of reserved rockets', () => {
    const reservedRockets = [
      {id: 1, name: 'Falcon 1', reserved: true},
      {id: 2, name: 'Falcon 9', reserved: true},
    ];

    const store = mockStore({
      rockets: {
        Rockets: reservedRockets,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <RocketProfile />
      </Provider>
    );

    expect(getByText('Falcon 1')).toBeInTheDocument();
    expect(getByText('Falcon 9')).toBeInTheDocument();
  });

  test('should not display a list of non-reserved rockets', () => {
    const nonReservedRockets = [
      {id: 3, name: 'Starship', reserved: false},
    ];

    const store = mockStore({
      rockets: {
        Rockets: nonReservedRockets,
      },
    });

    const { queryByText } = render(
      <Provider store={store}>
        <RocketProfile />
      </Provider>
    );

    expect(queryByText('Starship')).not.toBeInTheDocument();
  });

});
