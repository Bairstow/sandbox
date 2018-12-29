import { executionConfig, setupConfig } from './config';
import { tickMultipleOf, constructInitialState } from './utility/game';

const state = constructInitialState();
const loop = () => {
  if (!Memory.setupInitialised) {
    Memory.setupInitialised = true;
    setupConfig.map(datum => {
      datum.module(state);
    });
  }
  executionConfig.map(datum => {
    if (tickMultipleOf(datum.interval)) {
      datum.module(state);
    }
  });
};

module.exports = {
  loop,
};
