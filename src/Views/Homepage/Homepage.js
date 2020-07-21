import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useHistory } from 'react-router-dom';
import Billboard from '../../components/homePageComponents/billboard/Billboard';
import Pricing from '../../components/homePageComponents/pricing/Pricing';
import Team from '../../components/homePageComponents/team/Team';
import Contact from '../../components/homePageComponents/contact/Contact';
import Footer from '../../components/homePageComponents/footer/Footer';

import './Homepage.css';

const Homepage = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;

  useEffect(() => {
    if (currentUser) {
      history.push('/manager-dashboard');
    }
  });

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
