import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Buttons from './Buttons';
import { fetchRockets } from '../redux/Rockets/RocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.Rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="rockets-container">
      {rocketsList.map((item) => (
        <section key={item.id} className="rocket-list">
          <div
            className="rocket-item"
            key={item.id}
          >
            <img src={item.flickr_images[0]} alt="rocket" />
            <div className="rocket-info">
              <h3 className="rocket-name">{item.name}</h3>
              <p>{item.description}</p>
              <Buttons />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Rockets;
