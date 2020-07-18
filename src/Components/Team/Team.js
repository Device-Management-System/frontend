import React from 'react';

import './Team.css';

const Team = (props) => {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <h4>Marina Baskova</h4>
          </div>
          <div className="team-card">
            <h4>Guillaume Savy</h4>
          </div>
          <div className="team-card">
            <h4>Tyler Foreman</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
