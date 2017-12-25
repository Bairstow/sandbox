import React, { Component } from 'react';
import rh from 'react-hyperscript';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { resetGameState, startNewPracticeGame } from '../utils/game';

import NavPanel from '../components/NavPanel';

class NavContainer extends Component {
  render() {
    return rh(NavPanel, { ...this.props });
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = (dispatch) => {
  const gameActions = bindActionCreators({
    resetGameState,
    startNewPracticeGame,
  }, dispatch);
  return {
    gameActions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
