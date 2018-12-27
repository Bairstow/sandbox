const basicCreepDef = [WORK, CARRY, MOVE];

export const constructCreep = state => {
  const creepNames = Object.keys(Game.creeps);
  if (creepNames.length === 0) {
    const roomSources = state.originalRoom.find(FIND_SOURCES);
    const creepName = state.originalSpawn.createCreep(
      basicCreepDef,
      undefined, // undefined argument auto-generates creep name
      {
        role: 'harvester',
        mode: 'harvest',
        sourceId: roomSources[0].id,
      },
    );
    console.log(`Creating harvester creep: ${creepName}`);
  }
};
