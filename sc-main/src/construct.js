const basicCreepDef = [WORK, CARRY, MOVE];

const constructor = spawn => {
  const creepNames = Object.keys(Game.creeps);

  if (creepNames.length === 0) {
    const creepName = spawn.createCreep(
      basicCreepDef,
      undefined, // undefined argument auto-generates creep name
      {
        role: 'harvester',
        active: false,
        sourceId: null,
      },
    );
    console.log(`Creating harvester creep: ${creepName}`);
  }
};

module.exports = {
  constructor,
};
