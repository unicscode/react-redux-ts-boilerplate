import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../App';
import About from '@pages/about/about.page';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Routes;
