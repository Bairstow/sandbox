export const tickMultipleOf = tickCount => (Game.time % tickCount == 0 ? true : false);

const originalSpawn = Game.spawns['Spawn1'];

export const constructInitialState = () => ({
  originalSpawn,
  originalRoom: originalSpawn.room,
});
