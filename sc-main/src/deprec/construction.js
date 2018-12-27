const constantsGenerators = require('constantsGenerators');

const createExtensions = (spawn) => {
  const currentRoom = spawn.room;
  const extensionLocations = {
    NE: { x: 2, y: -2 },
    NEO: { x: 2, y: -3 },
    NNE: { x: 1, y: -2 },
    NNEO: { x: 1, y: -3 },
    ENE: { x: 2, y: -1 },
    ENEO: { x: 3, y: -1 },
    NENE: { x: 3, y: -2 },
    SE: { x: 2, y: 2 },
    SEO: { x: 2, y: 3 },
    SSE: { x: 1, y: 2 },
    SSEO: { x: 1, y: 3 },
    ESE: { x: 2, y: 1 },
    ESEO: { x: 3, y: 1 },
    SESE: { x: 3, y: 2 },
    SW: { x: -2, y: 2 },
    SWO: { x: -2, y: 3 },
    SSW: { x: -1, y: 2 },
    SSWO: { x: -1, y: 3 },
    WSW: { x: -2, y: 1 },
    WSWO: { x: -3, y: 1 },
    SWSW: { x: -3, y: 2 },
    NW: { x: -2, y: -2 },
    NWO: { x: -2, y: -3 },
    NNW: { x: -1, y: -2 },
    NNWO: { x: -1, y: -3 },
    WNW: { x: -2, y: -1 },
    WNWO: { x: -3, y: -1 },
    NWNW: { x: -3, y: -2 }
  };
  const extensionKeys = Object.keys(extensionLocations);
  return extensionKeys.map((key) => {
    const extensionLocationX = spawn.pos.x + extensionLocations[key].x;
    const extensionLocationY = spawn.pos.y + extensionLocations[key].y;
    const extensionLocationTerrain = Game.map.getTerrainAt(extensionLocationX, extensionLocationY, currentRoom.name);
    if (extensionLocationTerrain !== 'wall') {
      currentRoom.createConstructionSite(extensionLocationX, extensionLocationY, STRUCTURE_EXTENSION);
    }
  });
};

const createTowers = (spawn) => {
  const currentRoom = spawn.room;
  const towerLocations = {
    tower1: { x: 20, y: 24 }
  };
  const towerKeys = Object.keys(towerLocations);
  return towerKeys.map((key) => {
    const towerLocationX = towerLocations[key].x;
    const towerLocationY = towerLocations[key].y;
    const towerLocationTerrain = Game.map.getTerrainAt(towerLocationX, towerLocationY, currentRoom.name);
    if (towerLocationTerrain !== 'wall') {
      currentRoom.createConstructionSite(towerLocationX, towerLocationY, STRUCTURE_TOWER);
    }
  });
};

const createSpawnRoads = (spawn) => {
  const currentRoom = spawn.room;
  const surroundingTiles = constantsGenerators.cardinalOffsets();
  const surroundingKeys = Object.keys(surroundingTiles);
  return surroundingKeys.map((key) => {
    const roadLocationX = spawn.pos.x + surroundingTiles[key].x;
    const roadLocationY = spawn.pos.y + surroundingTiles[key].y;
    const roadLocationTerrain = Game.map.getTerrainAt(roadLocationX, roadLocationY, currentRoom.name);
    if (roadLocationTerrain !== 'wall') {
      currentRoom.createConstructionSite(roadLocationX, roadLocationY, STRUCTURE_ROAD);
    }
  });
};

const createSourceRoads = (spawn) => {
  const currentRoom = spawn.room;
  const sourceLabels = Object.keys(Memory.rooms.W17S32.sources);
  sourceLabels.forEach((label) => {
    const currentSourceId = Memory.rooms.W17S32.sources[label].id;
    const currentSource = Game.getObjectById(currentSourceId);
    const pathPositions = PathFinder.search(
      spawn.pos,
      {
        pos: currentSource.pos,
        range: 1
      }
    );
    pathPositions.path.forEach((position) => {
      currentRoom.createConstructionSite(position, STRUCTURE_ROAD);
    });
  });
};

const createSites = (spawn) => {
  createExtensions(spawn);
  createTowers(spawn);
  createSpawnRoads(spawn);
  createSourceRoads(spawn);
};

module.exports = {
  createSites
};
