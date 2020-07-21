import React from 'react';

import Billboard from '../../components/homePageComponents/Billboard';
import Pricing from '../../components/homePageComponents/Pricing';
import Team from '../../components/homePageComponents/Team';
import Contact from '../../components/homePageComponents/Contact';
import Footer from '../../components/homePageComponents/Footer';

import './Homepage.css';

const Homepage = (props) => {
  return (
    <div className="home">
      <Billboard />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
