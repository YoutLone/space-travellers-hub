import React from 'react';
import { useSelector } from 'react-redux';

function Missions() {
  const missionList = useSelector((state) => state.missions.Missions);

  return (
    <table className="container">
      <thead>
        <tr>
          <th><b>Mission</b></th>
          <th><b>Description</b></th>
          <th><b>Status</b></th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missionList.map((mission) => (
          <tr key={mission.mission_id} className="mission">
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>{mission.joined}</td>
            <td> </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
