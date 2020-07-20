import React from 'react';

import Billboard from '../../Components/Billboard/Billboard';
import PricingList from '../../Components/Pricing/PricingList';
import Team from '../../Components/Team/Team';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

import './Homepage.css';

const Homepage = (props) => {
  return (
    <div className="home">
      <Billboard />
      <PricingList />
      {/* <Pricing /> */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
