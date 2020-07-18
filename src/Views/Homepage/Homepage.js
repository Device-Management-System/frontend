import React from 'react';

import Billboard from '../../Components/Billboard/Billboard';
import Pricing from '../../Components/Pricing/Pricing';
import Team from '../../Components/Team/Team';

import './Homepage.css';

const Homepage = (props) => {
  return (
    <div className="home">
      <Billboard />
      <Pricing />
      <Team />
    </div>
  );
};

export default Homepage;
