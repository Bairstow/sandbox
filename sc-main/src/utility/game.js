export const tickMultipleOf = tickCount => (Game.time % tickCount == 0 ? true : false);

export const constructInitialState = () => ({
  originalSpawn: Game.spawns['Spawn1'],
  originalRoom: Game.rooms['sim'],
});
