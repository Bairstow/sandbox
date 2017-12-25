import React from 'react';
import ReactDOM from 'react-dom';
import rh from 'react-hyperscript';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  rh('div', 'Test'),
  rh(Voting, { pair: pair }),
  document.getElementById('app')
);
