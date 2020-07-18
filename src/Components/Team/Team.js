import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import marina from '../../assets/marina.png';
import guillaume from '../../assets/guillaume.png';
import tyler from '../../assets/tyler.png';

import './Team.css';

const Team = (props) => {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img className="thumbnail" src={marina} alt="Marina" />
            <div className="info">
              <h4>Marina Baskova</h4>
              <p>Software Engineer</p>
            </div>
            <div className="links">
              <a href="https://github.com/MarinaBaskova">
                <FontAwesomeIcon icon={['fab', 'github-alt']} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/marina-baskova">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
              </a>
            </div>
          </div>

          <div className="team-card">
            <img className="thumbnail" src={guillaume} alt="Guillaume" />
            <div className="info">
              <h4>Guillaume Savy</h4>
              <p>Software Engineer</p>
            </div>
            <div className="links">
              <a href="https://github.com/guillsav">
                <FontAwesomeIcon icon={['fab', 'github-alt']} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/guillaume-savy/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
              </a>
            </div>
          </div>

          <div className="team-card">
            <img className="thumbnail" src={tyler} alt="Tyler" />
            <div className="info">
              <h4>Tyler Foreman</h4>
              <p>Software Engineer</p>
            </div>
            <div className="links">
              <a href="https://github.com/tjforeman">
                <FontAwesomeIcon icon={['fab', 'github-alt']} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/tylerforeman1/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
