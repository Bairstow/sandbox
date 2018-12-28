const basicCreepDef = [WORK, CARRY, MOVE];
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

function generateCreepPartDefinition(energyAvailable, parts) {
  let energyUsed = 0;
  return parts.reduce((result, part) => {
    energyUsed = energyUsed + part.cost;
    if (energyUsed < energyAvailable) {
      result.push(part.value);
    }
    return result;
  }, []);
}

export function constructCreep(state) {
  const creepNames = Object.keys(Game.creeps);
  if (creepNames.length === 0) {
    const energyAvailable = calculateEnergyAvailable(state);
    const creepPartDefinition = generateCreepPartDefinition(energyAvailable, harvesterPartRatio);
    const roomSources = state.originalRoom.find(FIND_SOURCES);
    const creepName = state.originalSpawn.createCreep(
      creepPartDefinition,
      undefined, // undefined argument auto-generates creep name
      {
        role: 'harvester',
        mode: 'harvest',
        sourceId: roomSources[0].id,
      },
    );
    console.log(`Creating harvester creep: ${creepName}`);
  }
}

const generateCreepDefinitionForEnergy = energyAvailable => {
  const costDefinition = definition => definition.reduce((sum, part) => sum + part.cost, 0);
  const canCreepBeBuilt = (definition, energyAvailable) => costDefinition(definition) <= energyAvailable;
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
  return result.map(part => part.value);
};
