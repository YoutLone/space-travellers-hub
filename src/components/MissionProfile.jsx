import React from 'react';
import { useSelector } from 'react-redux';

function MissionProfile() {
  const missionList = useSelector((state) => state.missions.Missions);
  const joinedMissions = missionList.filter((mission) => mission.joined);

  return (
    <>
      {joinedMissions.length === 0 ? (
        <p>No Missions Joined</p>
      ) : (
        <table className="mission-table">
          <tbody>
            {joinedMissions.map((mission) => (
              <tr className="profile-rows" key={mission.mission_id}>
                <td className="profile-columns">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default MissionProfile;
