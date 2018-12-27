const constantsGenerators = require('constantsGenerators');

const findResourcesForRoom = (room) => room.find(FIND_SOURCES);
const findResourcesForSpawn = (spawn) => findResourcesForRoom(spawn.room);
const findSpawnForIndex = (index) => {
  const spawnKeys = Object.keys(Game.spawns);
  return Game.spawns[spawnKeys[index]];
};
const findResourcesForIndex = (index) => {
  const targetSpawn = findSpawnForIndex(index);
  return findResourcesForSpawn(targetSpawn);
};
const mapResourceAvailability = (resource) => {
  const roomName = resource.room.name;
  const surroundingTiles = constantsGenerators.cardinalOffsets();
  const surroundingKeys = Object.keys(surroundingTiles);
  surroundingKeys.forEach((key) => {
    const offsetXPos = resource.pos.x + surroundingTiles[key].x;
    const offsetYPos = resource.pos.y + surroundingTiles[key].y;
    surroundingTiles[key].terrainType = Game.map.getTerrainAt(offsetXPos, offsetYPos, roomName);
  });
  return surroundingTiles;
};
const summariseTerrainTypes = (terrainInfo) => {
  const terrainTypes = [
    'plain',
    'swamp',
    'wall'
  ];
  const terrainTypeTotals = {};
  terrainTypes.forEach((terrain) => {
    terrainTypeTotals[terrain] = 0;
  });
  Object.keys(terrainInfo).forEach((direction) => {
    const { terrainType } = terrainInfo[direction];
    terrainTypeTotals[terrainType]++;
  });
  return terrainTypeTotals;
};

const assessor = (roomName) => {
  if (Memory.rooms[roomName] && Memory.rooms[roomName].hasOwnProperty('sources')) {
    return;
  }
  const resources = findResourcesForIndex(0);
  resources.forEach((resource, index) => {
    const surroundingTerrainData = mapResourceAvailability(resource);
    const terrainTypeTotals = summariseTerrainTypes(surroundingTerrainData);
    const currentRoom = resource.room;
    const sourceLabel = `source-${index}`;
    if (!currentRoom.memory.sources) {
      currentRoom.memory.sources = {};
    }
    currentRoom.memory.sources[sourceLabel] = {
      id: resource.id,
      pos: resource.pos,
      surroundingTerrainData
    };
  });
};

module.exports = {
  assessor
};
