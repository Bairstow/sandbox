const manager = () => {
  if (!Memory.creeps) return;
  const creepNames = Object.keys(Memory.creeps);
  creepNames.forEach(name => {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log(`Clearing non-existing creep memory: ${name}`);
    }
  });
};

module.exports = {
  manager,
};
