import { combineReducers } from 'redux-immutable';

import { gameReducer } from './game';

const rootReducer = combineReducers({
  gameReducer,
});

export default rootReducer;
