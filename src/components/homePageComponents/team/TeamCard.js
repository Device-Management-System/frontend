import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Team.css';

const Team = ({ picture, name, title, github, linkedin, portfolio }) => {
  return (
    <div className="team-card">
      <img className="thumbnail" src={picture} alt={name} />
      <div className="info">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
      {!portfolio && (
        <div className="links">
          <a href={github}>
            <FontAwesomeIcon icon={['fab', 'github-alt']} size="2x" />
          </a>
          <a href={linkedin}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
        </div>
      )}
      {portfolio && (
        <div className="links-complete">
          <a href={github}>
            <FontAwesomeIcon icon={['fab', 'github-alt']} size="2x" />
          </a>
          <a href={linkedin}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
          <a href={portfolio}>
            <FontAwesomeIcon icon={['fa', 'code']} size="2x" />
          </a>
        </div>
      )}
    </div>
  );
};

Team.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default Team;
