import 'babel-polyfill';

/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';
import rh from 'react-hyperscript';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';

import routes from './config/routes';
import myClassReducer from './reducers/my-class-reducer';

/* eslint-disable no-undef */
const appContainer = document.querySelector('.app');
/* eslint-enable no-undef */

const store = createStore(combineReducers({
  myClass: myClassReducer,
}));

ReactDOM.render(
  rh(Provider, { store }, [rh(routes)]),
  appContainer
);
