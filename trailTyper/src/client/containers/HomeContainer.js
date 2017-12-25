import React, { Component } from 'react';
import rh from 'react-hyperscript';

import MajorPanel from '../components/MajorPanel';

class HomeContainer extends Component {
  render() {
    return rh(MajorPanel, {}, [
      rh('h4', { className: 'twelve columns' }, 'trailTyper'),
      rh('div', { className: 'twelve columns' }, 'Welcome to trailTyper, practice and compete in ' +
        'typing competitions and track your progress'),
    ]);
  }
}

export default HomeContainer;
