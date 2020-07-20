import React from 'react';
import TeamCard from './TeamCard';
import { team } from '../../utils';

import './Team.css';

const TeamList = () => {
  return (
    <section className="team" id="team">
      <div className="landr-container">
        <h2>Team</h2>
        <div className="team-cards">
          {team.map(({ id, ...otherProps }) => (
            <TeamCard key={id} {...otherProps} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamList;
