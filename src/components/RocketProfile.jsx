import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rocketsList = useSelector((state) => state.rockets.Rockets);
  const reservedRocketsList = rocketsList.filter((item) => item.reserved);

  return (
    <section>
      <table className="profile-list-rocket">
        <tbody>
          {reservedRocketsList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RocketProfile;
