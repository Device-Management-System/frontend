import React from 'react';

import Billboard from '../../Components/Billboard/Billboard';
import Pricing from '../../Components/Pricing/Pricing';

import './Homepage.css';

const Homepage = (props) => {
  return (
    <div className="home">
      <div className="container">
        <Billboard />
      </div>
      <Pricing />
    </div>
  );
};

export default Homepage;
