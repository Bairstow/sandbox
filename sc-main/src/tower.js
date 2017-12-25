const runTowers = (spawn) => {
  const currentRoom = spawn.room;
  const towers = currentRoom.find(FIND_MY_STRUCTURES, {
    filter: (structure) => (structure.structureType === STRUCTURE_TOWER)
  });
  towers.forEach((tower) => {
    const closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (closestHostile) {
      if (tower.attack(closestHostile) !== OK) {
        console.log('Hostile found but could not attack!');
      } else {
        const damagedCreeps = currentRoom.find(FIND_MY_CREEPS, {
          filter: (creep) => (creep.hits < creep.hitsMax)
        });
        if (damagedCreeps.length > 0) {
          const damagedCreepsInRange = damagedCreeps.filter((creep) => (tower.heal(creep) === OK));
          if (damagedCreepsInRange.length > 0) {
            tower.heal(damagedCreepsInRange[0]);
          }
        }
      }
    }
  });
};

module.exports = {
  runTowers
};
