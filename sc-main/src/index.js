import { createExecutionDefinition } from './utility/general';
import { assess } from './utility/state';
import { executeByTickCount } from './utility/game';
import { cleanupCreep } from './utility/memory';
import { constructCreep } from './utility/construct';
import { operateCreep } from './utility/operate';

const loop = () => {
  const currentSpawn = Game.spawns['Spawn01'];
  // TODO: pseudo execute loop
  // 100 tick planning and structure
  // - memory cleanup
  const executeOn100 = executeByTickCount(100);
  const executorsOn100 = [createExecutionDefinition(cleanupCreep), createExecutionDefinition(assess), createExecutionDefinition(constructCreep, currentSpawn)];
  // 10 tick health check and threat assessment
  const executeOn10 = executeByTickCount(10);
  const executorsOn10 = [];
  // 1 tick creep operation and management
  const executeOn1 = executeByTickCount(1);
  const executorsOn1 = [createExecutionDefinition(operateCreep)];

  executeOn100(executorsOn100);
  executeOn10(executorsOn10);
  executeOn1(executorsOn1);
};

module.exports = {
  loop,
};
