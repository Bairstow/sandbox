// setup
import Immutable from 'immutable';

import { gameStates, gameConstants } from '../constants/game';

// actions
export const SET_GAME_STATE = 'trailTyper/game/SET_GAME_STATE';
export const DECREMENT_GAME_COUNTDOWN_VALUE = 'trailTyper/game/DECREMENT_GAME_COUNTDOWN_VALUE';
export const RESET_GAME_COUNTDOWN_VALUE = 'trailTyper/game/RESET_GAME_COUNTDOWN_VALUE';
export const SET_GAME_ID = 'trailTyper/game/SET_GAME_ID';
export const SET_GAME_TEXT_ID = 'trailTyper/game/SET_GAME_TEXT_ID';
export const SET_GAME_TEXT_ARRAY = 'trailTyper/game/SET_GAME_TEXT_ARRAY';
export const INCREMENT_TARGET_INDEX = 'trailTyper/game/INCREMENT_TARGET_INDEX';
export const RESET_TARGET_INDEX = 'trailTyper/game/RESET_TARGET_INDEX';
export const SET_GAME_START_TIME = 'trailTyper/game/SET_GAME_START_TIME';
export const APPEND_PROGRESS_LOG = 'trailTyper/game/APPEND_PROGRESS_LOG';
export const RESET_PROGRESS_LOG = 'trailTyper/game/RESET_PROGRESS_LOG';

// initial state
const initialGameInfo = Immutable.Map({
  startTime: null,
  progressLog: Immutable.List([]),
  errorLog: Immutable.List([]),
  currentIndex: 0,
});
const initialState = Immutable.Map({
  gameState: gameStates.INACTIVE,
  gameCountdownValue: gameConstants.COUNTDOWN_LENGTH,
  gameId: null,
  gameTextId: null,
  gameTextArray: [],
  gameInfo: initialGameInfo,
});

// reducer
export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_STATE: {
      return state.set('gameState', action.gameState);
    }
    case DECREMENT_GAME_COUNTDOWN_VALUE: {
      const newCountdownValue = (state.get('gameCountdownValue') - 1);
      return state.set('gameCountdownValue', newCountdownValue);
    }
    case RESET_GAME_COUNTDOWN_VALUE: {
      return state.set('gameCountdownValue', gameConstants.COUNTDOWN_LENGTH);
    }
    case SET_GAME_ID: {
      return state.set('gameId', action.gameId);
    }
    case SET_GAME_TEXT_ID: {
      return state.set('gameTextId', action.gameTextId);
    }
    case SET_GAME_TEXT_ARRAY: {
      return state.set('gameTextArray', action.gameTextArray);
    }
    case INCREMENT_TARGET_INDEX: {
      const newTargetIndex = (state.getIn(['gameInfo', 'currentIndex']) + 1);
      return state.setIn(['gameInfo', 'currentIndex'], newTargetIndex);
    }
    case RESET_TARGET_INDEX: {
      return state.setIn(['gameInfo', 'currentIndex'], 0);
    }
    case SET_GAME_START_TIME: {
      return state.setIn(['gameInfo', 'startTime'], action.startTime);
    }
    case APPEND_PROGRESS_LOG: {
      const progressLog = state.getIn(['gameInfo', 'progressLog']);
      const updatedProgressLog = progressLog.push(action.progressTime);
      return state.setIn(['gameInfo', 'progressLog'], updatedProgressLog);
    }
    case RESET_PROGRESS_LOG: {
      return state.setIn(['gameInfo', 'progressLog'], Immutable.List([]));
    }
    default: {
      return state;
    }
  }
};

// action creators
export const setGameState = newGameState => ({
  type: SET_GAME_STATE,
  gameState: newGameState,
});
export const decrementGameCountdownValue = () => ({
  type: DECREMENT_GAME_COUNTDOWN_VALUE,
});
export const resetGameCountdownValue = () => ({
  type: RESET_GAME_COUNTDOWN_VALUE,
});
export const setGameId = newGameId => ({
  type: SET_GAME_ID,
  gameId: newGameId,
});
export const setGameTextId = newGameTextId => ({
  type: SET_GAME_TEXT_ID,
  gameTextId: newGameTextId,
});
export const setGameTextArray = newGameTextArray => ({
  type: SET_GAME_TEXT_ARRAY,
  gameTextArray: newGameTextArray,
});
export const incrementTargetIndex = () => ({
  type: INCREMENT_TARGET_INDEX,
});
export const resetTargetIndex = () => ({
  type: RESET_TARGET_INDEX,
});
export const setGameStartTime = startTime => ({
  type: SET_GAME_START_TIME,
  startTime,
});
export const appendProgressLog = progressTime => ({
  type: APPEND_PROGRESS_LOG,
  progressTime,
});
export const resetProgressLog = () => ({
  type: RESET_PROGRESS_LOG,
});
