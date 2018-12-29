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

const calculateEnergyAvailable = state => {
  return state.originalRoom.energyAvailable;
};

const calculateEnergyCapacityAvailable = state => {
  return state.originalRoom.energyCapacityAvailable;
};

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

function findUnharvestedSourceId(state) {
  const roomSources = state.originalRoom.find(FIND_SOURCES);
  const creepSourceIds = Object.keys(Game.creeps).reduce((result, name) => {
    const creep = Game.creeps[name];
    if (!!creep.memory.sourceId) {
      result.push(creep.memory.sourceId);
    }
    return result;
  }, []);
  const unharvestedSourceLabels = Object.keys(roomSources).filter(sourceLabel => {
    const sourceId = roomSources[sourceLabel].id;
    return !creepSourceIds.includes(sourceId);
  });
  return unharvestedSourceLabels.length > 0 ? roomSources[unharvestedSourceLabels[0]].id : null;
}

export function constructCreep(state) {
  const unharvestedSourceId = findUnharvestedSourceId(state);
  const energyAvailable = calculateEnergyAvailable(state);
  const energyCapacityAvailable = calculateEnergyCapacityAvailable(state);
  let harvesterCount = 0;
  for (const name in Game.creeps) {
    if (Game.creeps[name].memory.role) harvesterCount++;
  }
  const shouldCreateFirstHarvester = harvesterCount === 0 && energyAvailable >= 300;
  const shouldCreateRestHarvester = harvesterCount > 0 && energyCapacityAvailable === energyAvailable;
  const shouldCreateHarvester = !!unharvestedSourceId && (shouldCreateFirstHarvester || shouldCreateRestHarvester);
  if (shouldCreateHarvester) {
    const creepPartDefinition = generateCreepPartDefinition(energyAvailable, harvesterPartRatio);
    const creepName = state.originalSpawn.createCreep(
      creepPartDefinition,
      undefined, // undefined argument auto-generates creep name
      {
        role: 'harvester',
        mode: 'harvest',
        sourceId: unharvestedSourceId,
      },
    );
    console.log(`Creating harvester creep: ${creepName}`);
  }
}
