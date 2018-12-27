const basicCreepDef = [WORK, CARRY, MOVE];

export const constructCreep = state => {
  const creepNames = Object.keys(Game.creeps);
  if (creepNames.length === 0) {
    const creepName = state.originalSpawn.createCreep(
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
