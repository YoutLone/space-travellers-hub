import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/Rockets/RocketsSlice';
import '../styles/Rockets.css';

const Buttons = ({ rocketId }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        className="btn-reserve"
        onClick={() => dispatch(reserveRocket(rocketId))}
      >
        Reserve Rocket
      </button>
    </div>
  );
};

Buttons.propTypes = {
  rocketId: PropTypes.string.isRequired,
};

export default Buttons;
