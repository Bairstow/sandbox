const memory = require('memory');

module.exports.loop = () => {
  const currentSpawn = Game.spawns['Spawn1'];
  /*
  const creepName = spawn.createCreep(
    [WORK, CARRY, MOVE],
    undefined, // undefined argument auto-generates creep name
    {
      role: 'builder',
      active: false,
    }
  );
  */
  console.log({ currentSpawn, creeps: Memory.creeps });
};
