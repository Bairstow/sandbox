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
  NWNW: { x: -3, y: -2 },
};

function planExtensions(state) {
  const room = state.originalRoom;
  const spawn = state.originalSpawn;
  const extensionLabels = Object.keys(extensionLocations);
  extensionLabels.forEach(label => {
    const extensionLocationX = spawn.pos.x + extensionLocations[label].x;
    const extensionLocationY = spawn.pos.y + extensionLocations[label].y;
    const roomTerrain = Game.map.getRoomTerrain(room.name);
    const targetTerrain = roomTerrain.get(extensionLocationX, extensionLocationY);
    if (targetTerrain !== TERRAIN_MASK_WALL) {
      room.createConstructionSite(extensionLocationX, extensionLocationY, STRUCTURE_EXTENSION);
    }
  });
}

export function planStructure(state) {
  console.log('Planning structure layout...');
  planExtensions(state);
}
