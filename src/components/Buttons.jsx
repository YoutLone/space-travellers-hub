import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReserveRocket } from '../redux/Rockets/RocketsSlice';
import '../styles/Rockets.css';

const Buttons = ({ rocketId, reservedStatus }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {reservedStatus ? (
        <button
          type="button"
          className="btn-cancel"
          onClick={() => dispatch(cancelReserveRocket(rocketId))}
        >
          Cancel Reservation
        </button>
      ) : (
        <button
          type="button"
          className="btn-reserve"
          onClick={() => dispatch(reserveRocket(rocketId))}
        >
          Reserve Rocket
        </button>
      )}
    </div>
  );
};

Buttons.propTypes = {
  rocketId: PropTypes.string.isRequired,
  reservedStatus: PropTypes.bool.isRequired,
};

export default Buttons;
