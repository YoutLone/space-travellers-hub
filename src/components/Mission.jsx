import React from 'react';
import PropTypes from 'prop-types';

function Mission({
  id, name, description, joined,
}) {
  return (
    <tr key={id}>
      <td><b>{name}</b></td>
      <td>{description}</td>
      {!joined && (
        <>
          <td><button type="button" className="not-member">NOT A MEMBER</button></td>
          <td><button type="submit" className="join-mission">JOIN MISSION</button></td>
        </>
      )}
      {joined && (
        <>
          <td><button type="button" className="active-member">ACTIVE MEMBER</button></td>
          <td><button type="submit" className="leave-member">LEAVE MISSION</button></td>
        </>
      )}
    </tr>
  );
}

Mission.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default Mission;
