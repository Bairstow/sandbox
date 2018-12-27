import { executionConfig } from './config';
import { tickMultipleOf, constructInitialState } from './utility/game';

const state = constructInitialState();
const loop = () => {
  executionConfig.map(datum => {
    if (tickMultipleOf(datum.interval)) {
      datum.module(state);
    }
  });
};

module.exports = {
  loop,
};
