// setup
import Immutable from 'immutable';
import { constructUrl, pushState } from '../utils/routeUtils';

// actions
export const CHANGE_PATH = 'trailTyper/navigator/CHANGE_PATH';

// initial state
const initialRoute = Immutable.Map({ path: ['home'] });
const initialState = Immutable.Map({ route: initialRoute });

// reducer
export const navigatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PATH:
      return state.set('route', action.payload);
    default:
      return state;
  }
};

// action creators
export const changePath = path => ({
  type: CHANGE_PATH,
  payload: Immutable.Map({ path: [path] }),
});

// module related functions
export const navigateTo = (route, shouldPushState = true) => {
  const checkRouteChange = (dispatch, getState) => {
    const navigator = getState().get('navigatorReducer');
    if (constructUrl(route) === constructUrl(navigator.get('route'))) {
      return null;
    }

    if (shouldPushState) {
      pushState(route);
    }

    return dispatch(changePath(route));
  };
  return checkRouteChange;
};
