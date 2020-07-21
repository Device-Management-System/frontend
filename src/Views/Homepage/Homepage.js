import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useHistory } from 'react-router-dom';
import Billboard from '../../components/homePageComponents/Billboard';
import Pricing from '../../components/homePageComponents/Pricing';
import Team from '../../components/homePageComponents/Team';
import Contact from '../../components/homePageComponents/Contact';
import Footer from '../../components/homePageComponents/Footer';

import './Homepage.css';

const Homepage = (props) => {
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
