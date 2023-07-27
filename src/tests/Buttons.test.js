import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import Buttons from "../components/Buttons";
import { reserveRocket, cancelReserveRocket } from "../redux/Rockets/RocketsSlice";

const mockStore = configureStore([]);

describe("Buttons Components", () => {
  let store;
  const rocketId = "1";

  beforeEach(() => {
    const initialState = {
      rockets: {
        Rockets: [
          {id: rocketId},
        ],
      },
    };
    store = mockStore(initialState);
  });

  test('should dispatch "reserveRocket" action when "Reserve Rocket" button is clicked', () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Buttons rocketId={rocketId} reservedStatus={false} />
      </Provider>
    );

    const reserveButton = screen.getByText("Reserve Rocket");
    fireEvent.click(reserveButton);

    expect(store.dispatch).toHaveBeenCalledWith(reserveRocket(rocketId));
  });

  test("should render 'Reserve Rocket' button when the rocket is not reserved'", () => {
    render(
      <Provider store={store}>
        <Buttons rocketId={rocketId} reservedStatus={false} />
      </Provider>
    );
  
    const reserveButton = screen.getByText("Reserve Rocket");
    expect(reserveButton).toBeInTheDocument();
    });

  test('should dispatch "cancelReserveRocket" action when "Cancel Reservation" button is clicked', () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Buttons rocketId={rocketId} reservedStatus={true} />
      </Provider>
    );

    const cancelReserveRocketButton = screen.getByText("Cancel Reservation");
    fireEvent.click(cancelReserveRocketButton);

    expect(store.dispatch).toHaveBeenCalledWith(cancelReserveRocket(rocketId));
  });

  test("should render 'Cancel Reservation' button when the rocket is reserved'", () => {
    render(
      <Provider store={store}>
        <Buttons rocketId={rocketId} reservedStatus={true} />
      </Provider>
    );
    
    const cancelReserveRocketButton = screen.getByText("Cancel Reservation");
    expect(cancelReserveRocketButton).toBeInTheDocument();
  });

});