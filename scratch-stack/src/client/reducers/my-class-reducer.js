import Immutable from 'immutable';

import { MAKE_ECHO } from '../actions/my-class-actions';

const initialState = Immutable.Map({
  hasEchoed: false,
});

const myClassReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ECHO:
      return state.set('hasEchoed', action.payload);
    default:
      return state;
  }
};

export default myClassReducer;
