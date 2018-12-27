const roleOperations = {
  harvester: operateHarvester,
  builder: operateBuilder,
  defender: operateDefender,
};

export const operateCreep = state => {
  if (!Memory.creeps) return;
  for (const name in Game.creeps) {
    const creepObject = Game.creeps[name];
    const creepMemory = Memory.creeps[name];
    const { role } = creepMemory;
    roleOperations[role](creepObject, creepMemory, state);
  }
};

function operateHarvester(creepObject, creepMemory, state) {
  const { active, sourceId } = creepMemory;
  const sources = creepObject.room.find(FIND_SOURCES);
  if (creepObject.carry.energy < creepObject.carryCapacity) {
    if (creepObject.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
      creepObject.moveTo(sources[0]);
    }
  } else {
    if (creepObject.transfer(state.originalSpawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creepObject.moveTo(state.originalSpawn);
    }
  }
}

function operateBuilder(creepObject, creepMemory, state) {}

function operateDefender(creepObject, creepMemory, state) {}
