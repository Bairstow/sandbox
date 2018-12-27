const isCreepRole = (creepRole) => (creep) => Memory.creeps[creep].role === creepRole;
const creepNamesByRole = (creepRole) => {
  const creepNames = Object.keys(Memory.creeps);
  const isCreepCurrentRole = isCreepRole(creepRole);
  return creepNames.filter((name) => isCreepCurrentRole(name));
};

const findUnharvestedSource = (roomSources) => {
  const sourceLabels = Object.keys(roomSources);
  return sourceLabels.filter((label) => {
    const currentSource = roomSources[label];
    const hasHarvesterData = currentSource.hasOwnProperty('harvester');
    if (!hasHarvesterData) {
      return true;
    }
    const harvestingCreep = currentSource.harvester;
    const harvestingCreepExists = Game.creeps[harvestingCreep];
    if (!harvestingCreepExists) {
      currentSource.harvester = null;
      return true;
    }
    return false;
  })[0];
};

const generateCreepDefinitionForEnergy = (energyAvailable) => {
  const creepParts = {
    tough: { cost: 10, value: TOUGH },
    move: { cost: 50, value: MOVE },
    work: { cost: 100, value: WORK },
    carry: { cost: 50, value: CARRY },
    attack: { cost: 80, value: ATTACK },
    ranged: { cost: 150, value: RANGED_ATTACK },
    heal: { cost: 250, value: HEAL }
  };
  const baseDefinition = [
    creepParts.work,
    creepParts.carry,
    creepParts.move,
    creepParts.carry,
    creepParts.move
  ];
  const costDefinition = (definition) => definition.reduce((sum, part) => (sum + part.cost), 0);
  const canCreepBeBuilt = (definition, energyAvailable) => (costDefinition(definition) <= energyAvailable);
  const result = [];
  let creepBuildable = canCreepBeBuilt(result, energyAvailable);
  let definitionIndex = 0;
  while (creepBuildable) {
    result.push(baseDefinition[definitionIndex]);
    creepBuildable = canCreepBeBuilt(result, energyAvailable);
    definitionIndex += 1;
    if (definitionIndex === baseDefinition.length) {
      definitionIndex = 0;
    }
  }
  result.pop();
  console.log(`Generated creep definition with ${result.length} parts`);
  return result.map((part) => part.value);
};

const createCreep = (spawn) => {
  const MAX_HARVESTERS = 2;
  const MAX_BUILDERS = 2;
  const MAX_DEFENDERS = 1;
  const currentRoom = spawn.room;
  const roomSources = Memory.rooms[currentRoom.name].sources;
  const defenderCreeps = creepNamesByRole('defender');
  const harvesterCreeps = creepNamesByRole('harvester');
  const builderCreeps = creepNamesByRole('builder');
  const roomHasMinEnergy = currentRoom.energyAvailable >= 500;
  const roomHasNoHarvesters = harvesterCreeps.length === 0;
  if (defenderCreeps.length === 0 && currentRoom.energyAvailable >= 300) {
    const defenderDefinition = [
      ATTACK,
      ATTACK,
      ATTACK,
      MOVE
    ];
    const creepName = spawn.createCreep(
      defenderDefinition,
      undefined, // undefined argument auto-generates creep name
      {
        role: 'defender',
        active: false,
      }
    );
    console.log(`Creating defender creep: ${creepName}`);
  }
  if (harvesterCreeps.length < MAX_HARVESTERS && (roomHasMinEnergy || (roomHasNoHarvesters && currentRoom.energyAvailable >= 300))) {
    const targetSourceLabel = findUnharvestedSource(roomSources);
    const sourceId = roomSources[targetSourceLabel].id;
    const creepName = spawn.createCreep(
      generateCreepDefinitionForEnergy(currentRoom.energyAvailable),
      undefined, // undefined argument auto-generates creep name
      {
        role: 'harvester',
        active: false,
        sourceId
      }
    );
    console.log(`Creating harvester creep: ${creepName}`);
    roomSources[targetSourceLabel].harvester = creepName;
  } else if (builderCreeps.length < MAX_BUILDERS && roomHasMinEnergy) {
    const creepName = spawn.createCreep(
      generateCreepDefinitionForEnergy(currentRoom.energyAvailable),
      undefined, // undefined argument auto-generates creep name
      {
        role: 'builder',
        active: false,
      }
    );
    console.log(`Creating builder creep: ${creepName}`);
  }
};

const runHarvesters = () => {
  const harvesterCreeps = creepNamesByRole('harvester');
  harvesterCreeps.forEach((name) => {
    const targetCreep = Game.creeps[name];
    if (!targetCreep) {
      return;
    }
    const hasCreepFinishedDistributing = targetCreep.memory.active && targetCreep.carry.energy === 0;
    if (hasCreepFinishedDistributing) {
      targetCreep.memory.active = false;
      targetCreep.say(`Harvest`);
    }
    const hasCreepFinishedHarvesting = !targetCreep.memory.active && targetCreep.carry.energy === targetCreep.carryCapacity;
    if (hasCreepFinishedHarvesting) {
      targetCreep.memory.active = true;
      targetCreep.say(`Dist`);
    }
    const isCreepSeekingSource = !targetCreep.memory.active;
    if (isCreepSeekingSource) {
      const targetSource = Game.getObjectById(targetCreep.memory.sourceId);
      if (targetCreep.harvest(targetSource) === ERR_NOT_IN_RANGE) {
        targetCreep.moveTo(targetSource);
      }
    } else {
      const currentRoom = targetCreep.room;
      const roomController = targetCreep.room.controller;
      const storageLocations = currentRoom.find(FIND_STRUCTURES, {
        filter: (structure) => {
          const isExtension = (structure.structureType === STRUCTURE_EXTENSION);
          const isSpawn = (structure.structureType === STRUCTURE_SPAWN);
          const isTower = (structure.structureType === STRUCTURE_TOWER);
          const isStorageStructure = (isExtension || isSpawn || isTower);
          return isStorageStructure && (structure.energy < structure.energyCapacity);
        }
      });
      if (storageLocations.length) {
        if (targetCreep.transfer(storageLocations[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
          targetCreep.moveTo(storageLocations[0]);
        }
      } else {
        if (targetCreep.upgradeController(roomController) == ERR_NOT_IN_RANGE) {
          targetCreep.moveTo(roomController);
        }
      }
    }
  });
};

const runBuilders = (spawn) => {
  const builderCreeps = creepNamesByRole('builder');
  builderCreeps.forEach((name) => {
    const targetCreep = Game.creeps[name];
    if (!targetCreep) {
      return;
    }
    const hasCreepFinishedBuilding = targetCreep.memory.active && targetCreep.carry.energy === 0;
    if (hasCreepFinishedBuilding) {
      targetCreep.memory.active = false;
      targetCreep.say(`Harvest`);
    }
    const hasCreepFinishedHarvesting = !targetCreep.memory.active && targetCreep.carry.energy === targetCreep.carryCapacity;
    if (hasCreepFinishedHarvesting) {
      targetCreep.memory.active = true;
      targetCreep.say(`Build`);
    }
    const isCreepSeekingSource = !targetCreep.memory.active;
    if (isCreepSeekingSource) {
      const targetSourceId = Memory.rooms.W17S32.sources['source-1'].id;
      const targetSource = Game.getObjectById(targetSourceId);
      if (targetCreep.harvest(targetSource) === ERR_NOT_IN_RANGE) {
        targetCreep.moveTo(targetSource);
      }
    } else {
      const currentRoom = targetCreep.room;
      const constructionSites = currentRoom.find(FIND_CONSTRUCTION_SITES);
      const repairTargets = currentRoom.find(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax
      });
      if (constructionSites.length) {
        if (targetCreep.build(constructionSites[0]) === ERR_NOT_IN_RANGE) {
          targetCreep.moveTo(constructionSites[0]);
        }
      } else if (repairTargets.length) {
        const weakestStructure = repairTargets.reduce((result, current) => {
          if (current.hits < result.hits) {
            return current;
          } else {
            return result;
          }
        }, repairTargets[0]);
        if (targetCreep.repair(weakestStructure) === ERR_NOT_IN_RANGE) {
          targetCreep.moveTo(weakestStructure);
        }
      } else {
        targetCreep.moveTo(spawn);
      }
    }
  });
};

const runDefenders = (spawn) => {
  const defenderCreeps = creepNamesByRole('defender');
  defenderCreeps.forEach((name) => {
    const targetCreep = Game.creeps[name];
    if (!targetCreep) {
      return;
    }
    const hasCreepFinishedDefending = targetCreep.memory.active && targetCreep.carry.energy < (targetCreep.carryCapacity / 2);
    if (hasCreepFinishedDefending) {
      targetCreep.memory.active = false;
      targetCreep.say(`Collect`);
    }
    const hasCreepFinishedSourcing = !targetCreep.memory.active && targetCreep.carry.energy === targetCreep.carryCapacity;
    if (hasCreepFinishedSourcing) {
      targetCreep.memory.active = true;
      targetCreep.say(`Defend`);
    }
    const isCreepSeekingSource = !targetCreep.memory.active;
    if (isCreepSeekingSource) {
      const roomExtensions = spawn.room.find(FIND_MY_STRUCTURES, {
        filter: { structureType: STRUCTURE_EXTENSION }
      })
      if (roomExtensions.length > 0) {
        let highestEnergy = roomExtensions[0];
        roomExtensions.forEach((extension) => {
          if (extension.energy > highestEnergy.energy) {
            highestEnergy = extension;
          }
        });
        if (targetCreep.withdraw(highestEnergy, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
          targetCreep.moveTo(highestEnergy);
        }
      }
    } else {
      const closestHostile = targetCreep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
      if (closestHostile) {
        if (targetCreep.attack(closestHostile) === ERR_NOT_IN_RANGE) {
          targetCreep.moveTo(closestHostile);
        }
      } else {
        targetCreep.moveTo(spawn);
      }
    }
  });
};

module.exports = {
  createCreep,
  runHarvesters,
  runBuilders,
  runDefenders
};
