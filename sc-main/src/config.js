import { cleanupCreep } from './module/memory';
import { planStructure } from './module/plan';
import { constructCreep } from './module/construct';
import { operateCreep } from './module/operate';

export const executionConfig = [
  {
    module: cleanupCreep,
    interval: 200,
  },
  {
    module: constructCreep,
    interval: 50,
  },
  {
    module: operateCreep,
    interval: 1,
  },
];

export const setupConfig = [
  {
    module: planStructure,
  },
];
