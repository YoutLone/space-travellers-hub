import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import Rockets from '../components/Rockets';
import { reserveRocket, cancelReserveRocket } from '../redux/Rockets/RocketsSlice';

const mockStore = configureMockStore([thunk]);

const initialState = {
  rockets: {
    Rockets: [
      {
        id: '1', name: 'Falcon 1', description: 'desc1', reserved: true, flickr_images: ['img1.jpg'],
      },
      {
        id: '2', name: 'Falcon 9', description: 'desc2', reserved: false, flickr_images: ['img2.jpg'],
      },
    ],
  },
};

const store = mockStore(initialState);

describe('Rockets', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
  });

  test('should render all rocket items', () => {
    const rocketItems = screen.getAllByTestId('rocket-item');
    expect(rocketItems).toHaveLength(2);
  });

  test('should render the rocket name', () => {
    const rocket1 = screen.getByText('Falcon 1');
    const rocket2 = screen.getByText('Falcon 9');
    expect(rocket1).toBeInTheDocument();
    expect(rocket2).toBeInTheDocument();
  });

  test('should render the rocket description', () => {
    const description1 = screen.getByText('desc1');
    const description2 = screen.getByText('desc2');
    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
  });

  test('should display "Reserved" badge for reserved rockets', () => {
    const badge = screen.getByText('Reserved');
    expect(badge).toBeInTheDocument();
  });

  test('should dispatch reserveRocket action when "Reserve Rocket" button is clicked', () => {
    const rocketId = '2';
    const reserveButton = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveButton);
    const actions = store.getActions();
    expect(actions).toContainEqual(reserveRocket(rocketId));
  });

  test('should dispatch cancelReserveRocket action when "Cancel Reservation" button is clicked', () => {
    const rocketId = '1';
    const cancelButton = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelButton);
    const actions = store.getActions();
    expect(actions).toContainEqual(cancelReserveRocket(rocketId));
  });
});
