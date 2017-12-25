/* eslint-disable no-unused-vars */

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import rh from 'react-hyperscript';

import Home from '../components/home';

class Routes extends React.Component {
  render() {
    return (
      rh(Router, { history: hashHistory }, [
        rh(Route, { path: '/', component: Home }),
      ])
    );
  }
}

export default Routes;
