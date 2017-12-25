import axios from 'axios';
import moment from 'moment';

import {
  setGameState,
  setGameId,
  setGameTextId,
  setGameTextArray,
  resetTargetIndex,
  decrementGameCountdownValue,
  setGameStartTime,
  resetGameCountdownValue,
  resetProgressLog,
} from '../dux/game';
import { gameStates } from '../constants/game';

export const resetGameState = () => (dispatch, getState) => {
  dispatch(setGameState(gameStates.INACTIVE));
  dispatch(setGameId(null));
  dispatch(setGameTextId(null));
  dispatch(setGameTextArray([]));
  dispatch(resetTargetIndex());
  dispatch(resetProgressLog());
};

const initiateCountdown = (dispatch, getState) => {
  const getCountdownValue = () => getState().getIn(['gameReducer', 'gameCountdownValue']);
  const countdownValue = getCountdownValue();
  for (let i = 1; i <= countdownValue; i += 1) {
    setTimeout(() => {
      dispatch(decrementGameCountdownValue());
    }, (500 * i));
  }
  setTimeout(() => {
    dispatch(setGameState(gameStates.ACTIVE));
    dispatch(setGameStartTime(moment.now()));
    dispatch(resetGameCountdownValue());
  }, (500 * countdownValue));
};

export const startNewPracticeGame = () => (dispatch, getState) => {
  dispatch(setGameState(gameStates.INITIALISING));
  axios.get('https://baconipsum.com/api/?type=meat-and-filler&sentences=2')
    .then((response) => {
      dispatch(setGameState(gameStates.PENDING));
      const gameTextArray = response.data[0].split(' ');
      dispatch(setGameTextArray(gameTextArray));
      dispatch(setGameState(gameStates.COUNTDOWN));
      initiateCountdown(dispatch, getState);
    });
};
