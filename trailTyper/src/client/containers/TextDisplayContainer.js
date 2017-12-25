import React, { Component } from 'react';
import rh from 'react-hyperscript';
import { connect } from 'react-redux';

import deriveGameTextValues from '../utils/textDisplay';
import { gameStates } from '../constants/game';

import TextDisplayPanel from '../components/TextDisplayPanel';

class TextDisplayContainer extends Component {
  render() {
    return rh(TextDisplayPanel, { ...this.props });
  }
}

const mapStateToProps = (state) => {
  const game = state.get('gameReducer');
  const gameState = game.get('gameState');
  const countdownValue = game.get('gameCountdownValue');
  const isGameActive = (gameState !== gameStates.INACTIVE);
  const isCountdown = (gameState === gameStates.COUNTDOWN);
  const gameTextValues = deriveGameTextValues(state);
  const { preText, currentWord, postText } = gameTextValues;
  return {
    isGameActive,
    isCountdown,
    countdownValue,
    preText,
    currentWord,
    postText,
  };
};

export default connect(mapStateToProps)(TextDisplayContainer);
