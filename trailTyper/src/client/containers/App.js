import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import rh from 'react-hyperscript';
import { connect } from 'react-redux';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

import NavContainer from '../containers/NavContainer';
import HomeContainer from '../containers/HomeContainer';
import GameContainer from '../containers/GameContainer';
import ActiveGameRoute from '../containers/ActiveGameRoute';

import '../styles/app.scss';

class App extends Component {
  render() {
    return (
      rh(Router, {},
        rh('div', { className: '' }, [
          rh(NavContainer),
          rh(Route, { exact: true, path: '/', component: HomeContainer }),
          rh(ActiveGameRoute, { path: '/game', component: GameContainer, ...this.props }),
        ]),
      )
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);
