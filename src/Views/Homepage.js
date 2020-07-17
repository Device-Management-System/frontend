import React from 'react';
import { Route } from 'react-router-dom';

import Auth from './Auth';

const Homepage = (props) => {
  return (
    <div className="home">
      <Route path="/auth" component={Auth} />
    </div>
  );
};

export default Homepage;
