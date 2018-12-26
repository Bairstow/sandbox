const constructor = spawn => {
  if (!Memory.creeps) return;
  const creepNames = Object.keys(Memory.creeps);
  const basicCreepDef = [WORK, CARRY, MOVE];

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
