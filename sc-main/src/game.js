const tickMultipleOf = (tickCount) => ((Game.time % tickCount) == 0) ? true : false;

module.exports = {
  tickMultipleOf
};
