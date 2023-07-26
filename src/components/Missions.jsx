import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';
import Mission from './Mission';
import '../styles/missions.css';

function Missions() {
  const missionList = useSelector((state) => state.missions.Missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <table className="mission-container">
        <thead>
          <tr>
            <th><b>Mission</b></th>
            <th><b>Description</b></th>
            <th><b>Status</b></th>
            <th> </th>
          </tr>
        </thead>
        {missionList.map((mission) => (
          <tbody key={mission.mission_id} className="mission">
            <Mission
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              joined={mission.joined}
            />
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Missions;
