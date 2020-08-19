import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage/Homepage';

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
};

export default PublicRoutes;
