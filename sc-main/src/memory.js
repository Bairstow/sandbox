const manager = () => {
  if (!Memory.creeps) {
    console.log('No creeps object found in memory');
    return;
  }
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
