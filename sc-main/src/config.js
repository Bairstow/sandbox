import { cleanupCreep } from './module/memory';
// import { assess } from './module/state';
import { constructCreep } from './module/construct';
import { operateCreep } from './module/operate';

export const executionConfig = [
  {
    module: cleanupCreep,
    interval: 200,
  },
  /*
  {
    module: assess,
    interval: 100,
  },
  */
  {
    module: constructCreep,
    interval: 50,
  },
  {
    module: operateCreep,
    interval: 1,
  },
];
