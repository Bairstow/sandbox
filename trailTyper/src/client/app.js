/* eslint-env browser */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import rh from 'react-hyperscript';
import { Provider } from 'react-redux';

import configureStore from './config/configureStore';

import App from './containers/App';

const appContainer = document.querySelector('.app');

const store = configureStore();

ReactDOM.render(
  rh(Provider, { store }, [rh(App)]),
  appContainer
);
