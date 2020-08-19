import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/navigation/Navigation';
import Billboard from '../../components/homePageComponents/billboard/Billboard';
import Pricing from '../../components/homePageComponents/pricing/Pricing';
import Team from '../../components/homePageComponents/team/Team';
import Contact from '../../components/homePageComponents/contact/Contact';
import Footer from '../../components/homePageComponents/footer/Footer';

import './Homepage.css';

const Homepage = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  });

  return (
    <div className="home">
      <Navbar />
      <Billboard />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
