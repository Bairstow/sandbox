function setHarvesterMode(creep) {
  const { mode } = creep.memory;
  const shouldToggleHarvest = mode === 'distribute' && creep.carry.energy === 0;
  const shouldToggleDistribute = mode === 'harvest' && creep.carry.energy === creep.carryCapacity;
  if (shouldToggleHarvest) {
    creep.memory.mode = 'harvest';
    creep.say('Harvest');
  }
  if (shouldToggleDistribute) {
    creep.memory.mode = 'distribute';
    creep.say('Distribute');
  }
}

function creepHarvest(creep, state) {
  const { sourceId } = creep.memory;
  const source = Game.getObjectById(sourceId);
  if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
    creep.moveTo(source);
  }
}

function creepDistribute(creep, state) {
  const room = state.originalRoom;
  const roomController = creep.room.controller;
  const storageLocations = room.find(FIND_STRUCTURES, {
    filter: structure => {
      const isExtension = structure.structureType === STRUCTURE_EXTENSION;
      const isSpawn = structure.structureType === STRUCTURE_SPAWN;
      const isTower = structure.structureType === STRUCTURE_TOWER;
      const isStorageStructure = isExtension || isSpawn || isTower;
      return isStorageStructure && structure.energy < structure.energyCapacity;
    },
  });
  if (storageLocations.length) {
    if (creep.transfer(storageLocations[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(storageLocations[0]);
    }
  } else {
    if (creep.upgradeController(roomController) == ERR_NOT_IN_RANGE) {
      creep.moveTo(roomController);
    }
  }
}

const harvesterModeOperations = {
  harvest: creepHarvest,
  distribute: creepDistribute,
};

function operateHarvester(creep, state) {
  if (!creep) return;
  setHarvesterMode(creep);
  harvesterModeOperations[creep.memory.mode](creep, state);
}

function setBuilderMode(creep) {
  const { mode } = creep.memory;
  const shouldToggleHarvest = mode === 'build' && creep.carry.energy === 0;
  const shouldToggleBuild = mode === 'harvest' && creep.carry.energy === creep.carryCapacity;
  if (shouldToggleHarvest) {
    creep.memory.mode = 'harvest';
    creep.say('Harvest');
  }
  if (shouldToggleBuild) {
    creep.memory.mode = 'build';
    creep.say('Build');
  }
}

const builderModeOperations = {
  harvest: creepHarvest,
  build: creepBuild,
};

function creepBuild(creep, state) {
  const room = state.originalRoom;
  const constructionSites = room.find(FIND_CONSTRUCTION_SITES);
  const repairTargets = room.find(FIND_STRUCTURES, {
    filter: structure => structure.hits < structure.hitsMax,
  });
  if (constructionSites.length) {
    if (creep.build(constructionSites[0]) === ERR_NOT_IN_RANGE) {
      creep.moveTo(constructionSites[0]);
    }
  } else if (repairTargets.length) {
    const weakestStructure = repairTargets.reduce((result, current) => {
      if (current.hits < result.hits) {
        return current;
      } else {
        return result;
      }
    }, repairTargets[0]);
    if (creep.repair(weakestStructure) === ERR_NOT_IN_RANGE) {
      creep.moveTo(weakestStructure);
    }
  } else {
    creep.moveTo(spawn);
  }
}

function operateBuilder(creep, state) {
  if (!creep) return;
  setBuilderMode(creep);
  builderModeOperations[creep.memory.mode](creep, state);
}

function operateDefender(creep, state) {}

const roleOperations = {
  harvester: operateHarvester,
  builder: operateBuilder,
  defender: operateDefender,
};

export function operateCreep(state) {
  if (!Game.creeps) return;
  for (const name in Game.creeps) {
    const creep = Game.creeps[name];
    roleOperations[creep.memory.role](creep, state);
  }
}
