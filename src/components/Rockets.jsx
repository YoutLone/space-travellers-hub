import { useSelector } from 'react-redux';
import Buttons from './Buttons';
import '../styles/Rockets.css';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.Rockets);

  return (
    <div className="rockets-container">
      {rocketsList.map((item) => (
        <section key={item.id} className="rocket-list">
          <div
            className="rocket-item"
            data-testid="rocket-item"
            key={item.id}
          >
            <img src={item.flickr_images[0]} alt="rocket" />
            <div className="rocket-info">
              <h3 className="rocket-name">{item.name}</h3>
              <p>
                {item.reserved && <span className="badge">Reserved</span>}
                {item.description}
              </p>
              <Buttons
                rocketId={item.id}
                reservedStatus={item.reserved}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Rockets;
