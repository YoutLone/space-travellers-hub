import RocketProfile from './RocketProfile';
import MissionProfile from './MissionProfile';
import '../styles/MyProfile.css';

const MyProfile = () => (
  <section className="profile-container">
    <div className="profile">
      <div className="mission-profile">
        <h3>My Missions</h3>
        <MissionProfile />
      </div>
      <div className="rocket-profile">
        <h3>My Rockets</h3>
        <RocketProfile />
      </div>
    </div>
  </section>
);

export default MyProfile;
