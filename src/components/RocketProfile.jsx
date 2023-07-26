import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketsList = useSelector((state) => state.rockets.Rockets);
  const reservedRocketsList = rocketsList.filter((item) => item.reserved);

  return (
    <section>
      <ul>
        {reservedRocketsList.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RocketProfile;
