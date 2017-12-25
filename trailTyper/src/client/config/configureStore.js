/* eslint-env browser */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../dux/root';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};

export default configureStore;
