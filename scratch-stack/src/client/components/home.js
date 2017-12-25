import React from 'react';
import rh from 'react-hyperscript';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

import EchoMessage from '../containers/echo-message';
import EchoButton from '../containers/echo-button';

import '../styles/home.scss';

class Home extends React.Component {
  render() {
    return (
      rh('div', { className: 'container' }, [
        rh(EchoMessage),
        rh(EchoButton),
      ])
    );
  }
}

export default Home;
