export const operateCreep = () => {
  for (const name in Game.creeps) {
    const currentCreep = Game.creeps[name];
    const sources = currentCreep.room.find(FIND_SOURCES);
    if (currentCreep.carry.energy < currentCreep.carryCapacity) {
      if (currentCreep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        currentCreep.moveTo(sources[0]);
      }
    } else {
      if (currentCreep.transfer(currentSpawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        currentCreep.moveTo(currentSpawn);
      }
    }
  }
};
