const partDefinitions = {
  TOUGH: { cost: 10, value: TOUGH },
  MOVE: { cost: 50, value: MOVE },
  WORK: { cost: 100, value: WORK },
  CARRY: { cost: 50, value: CARRY },
  ATTACK: { cost: 80, value: ATTACK },
  RANGED: { cost: 150, value: RANGED_ATTACK },
  HEAL: { cost: 250, value: HEAL },
};

const harvesterPartRatio = [partDefinitions.WORK, partDefinitions.CARRY, partDefinitions.MOVE, partDefinitions.CARRY, partDefinitions.MOVE];
const builderPartRatio = [partDefinitions.WORK, partDefinitions.WORK, partDefinitions.CARRY, partDefinitions.MOVE];

function calculateEnergyAvailable(state) {
  return state.originalRoom.energyAvailable;
}

function calculateEnergyCapacityAvailable(state) {
  return state.originalRoom.energyCapacityAvailable;
}

function generateCreepPartDefinition(energyAvailable, parts) {
  let energyUsed = 0;
  return parts.reduce((result, part) => {
    energyUsed = energyUsed + part.cost;
    if (energyUsed <= energyAvailable) {
      result.push(part.value);
    }
    return result;
  }, []);
}

function findUnutilisedSourceIdByRole(state, role) {
  const roomSources = state.originalRoom.find(FIND_SOURCES);
  const creepSourceIds = Object.keys(Game.creeps).reduce((result, name) => {
    const creep = Game.creeps[name];
    const isRoleType = creep.memory.role === role;
    const hasSourceId = !!creep.memory.sourceId;
    if (isRoleType && hasSourceId) {
      result.push(creep.memory.sourceId);
    }
    return result;
  }, []);
  const unutilisedSourceLabels = Object.keys(roomSources).filter(sourceLabel => {
    const sourceId = roomSources[sourceLabel].id;
    return !creepSourceIds.includes(sourceId);
  });
  return unutilisedSourceLabels.length > 0 ? roomSources[unutilisedSourceLabels[0]].id : null;
}

function createCreep(state, partDefinition, memoryDefinition) {
  const creepName = state.originalSpawn.createCreep(
    partDefinition,
    undefined, // undefined argument auto-generates creep name
    memoryDefinition,
  );
  console.log(`Creating harvester creep: ${creepName}`);
}

function fetchCreepsByRole(role) {
  return Object.keys(Game.creeps).reduce((result, name) => {
    const creep = Game.creeps[name];
    if (creep.memory.role === role) {
      result.push(creep);
    }
    return result;
  }, []);
}

function calculateHarvesterSourceId(state) {
  const unharvestedSourceId = findUnutilisedSourceIdByRole(state, 'harvester');
  if (!!unharvestedSourceId) {
    const energyAvailable = calculateEnergyAvailable(state);
    const energyCapacityAvailable = calculateEnergyCapacityAvailable(state);
    const harvesterCreeps = fetchCreepsByRole('harvester');
    const harvesterCount = harvesterCreeps.length;
    const shouldCreateFirstHarvester = harvesterCount === 0 && energyAvailable >= 300;
    const shouldCreateRestHarvester = harvesterCount > 0 && energyCapacityAvailable === energyAvailable;
    return (shouldCreateFirstHarvester || shouldCreateRestHarvester) && unharvestedSourceId;
  }
  return false;
}

function calculateBuilderSourceId(state) {
  const unharvestedSourceId = findUnutilisedSourceIdByRole(state, 'builder');
  if (!!unharvestedSourceId) {
    const energyAvailable = calculateEnergyAvailable(state);
    const energyCapacityAvailable = calculateEnergyCapacityAvailable(state);
    return energyCapacityAvailable === energyAvailable && unharvestedSourceId;
  }
  return false;
}

export function constructCreep(state) {
  const energyAvailable = calculateEnergyAvailable(state);
  const harvesterSourceId = calculateHarvesterSourceId(state);
  const builderSourceId = calculateBuilderSourceId(state);
  if (!!harvesterSourceId) {
    const creepPartDefinition = generateCreepPartDefinition(energyAvailable, harvesterPartRatio);
    const creepMemoryDefinition = {
      role: 'harvester',
      mode: 'harvest',
      sourceId: harvesterSourceId,
    };
    createCreep(state, creepPartDefinition, creepMemoryDefinition);
  } else if (!!builderSourceId) {
    const creepPartDefinition = generateCreepPartDefinition(energyAvailable, builderPartRatio);
    const creepMemoryDefinition = {
      role: 'builder',
      mode: 'harvest',
      sourceId: builderSourceId,
    };
    createCreep(state, creepPartDefinition, creepMemoryDefinition);
  }
}
