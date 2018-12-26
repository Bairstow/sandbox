const game = require('game');
const source = require('source');
const construction = require('construction');
const creep = require('creep');
const tower = require('tower');
const memory = require('memory');

const executeByTickCount = tickCount => executors => {
  if (game.tickMultipleOf(tickCount)) {
    executors.forEach(executionData => {
      const { executor, arguments } = executionData;
      executor(...arguments);
    });
  }
};

module.exports.loop = () => {
  const executeOn20 = executeByTickCount(20);
  const executorsOn20 = [
    {
      executor: source.assessor,
      arguments: ['W17S32'],
    },
    {
      executor: memory.manager,
      arguments: [],
    },
    {
      executor: creep.createCreep,
      arguments: [Game.spawns['Spawn1']],
    },
    {
      executor: construction.createSites,
      arguments: [Game.spawns['Spawn1']],
    },
  ];
  executeOn20(executorsOn20);

  const executeEveryTick = executeByTickCount(1);
  const executorsEveryTick = [
    {
      executor: creep.runHarvesters,
      arguments: [],
    },
    {
      executor: creep.runBuilders,
      arguments: [Game.spawns['Spawn1']],
    },
    {
      executor: creep.runDefenders,
      arguments: [Game.spawns['Spawn1']],
    },
    {
      executor: tower.runTowers,
      arguments: [Game.spawns['Spawn1']],
    },
  ];
  executeEveryTick(executorsEveryTick);
};
