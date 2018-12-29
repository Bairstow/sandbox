(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _game = __webpack_require__(5);

var state = (0, _game.constructInitialState)();
var loop = function loop() {
  _config.executionConfig.map(function (datum) {
    if ((0, _game.tickMultipleOf)(datum.interval)) {
      datum.module(state);
    }
  });
};

module.exports = {
  loop: loop
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executionConfig = undefined;

var _memory = __webpack_require__(2);

var _construct = __webpack_require__(3);

var _operate = __webpack_require__(4);

// import { assess } from './module/state';
var executionConfig = exports.executionConfig = [{
  module: _memory.cleanupCreep,
  interval: 200
},
/*
{
  module: assess,
  interval: 100,
},
*/
{
  module: _construct.constructCreep,
  interval: 50
}, {
  module: _operate.operateCreep,
  interval: 1
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cleanupCreep = exports.cleanupCreep = function cleanupCreep() {
  if (!Memory.creeps) return;
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log("Clearing non-existing creep memory: " + name);
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constructCreep = constructCreep;
var partDefinitions = {
  TOUGH: { cost: 10, value: TOUGH },
  MOVE: { cost: 50, value: MOVE },
  WORK: { cost: 100, value: WORK },
  CARRY: { cost: 50, value: CARRY },
  ATTACK: { cost: 80, value: ATTACK },
  RANGED: { cost: 150, value: RANGED_ATTACK },
  HEAL: { cost: 250, value: HEAL }
};

var harvesterPartRatio = [partDefinitions.WORK, partDefinitions.CARRY, partDefinitions.MOVE, partDefinitions.CARRY, partDefinitions.MOVE];
var builderPartRatio = [partDefinitions.WORK, partDefinitions.WORK, partDefinitions.CARRY, partDefinitions.MOVE];

function calculateEnergyAvailable(state) {
  return state.originalRoom.energyAvailable;
}

function calculateEnergyCapacityAvailable(state) {
  return state.originalRoom.energyCapacityAvailable;
}

function generateCreepPartDefinition(energyAvailable, parts) {
  var energyUsed = 0;
  return parts.reduce(function (result, part) {
    energyUsed = energyUsed + part.cost;
    if (energyUsed <= energyAvailable) {
      result.push(part.value);
    }
    return result;
  }, []);
}

function findUnutilisedSourceIdByRole(state, role) {
  var roomSources = state.originalRoom.find(FIND_SOURCES);
  var creepSourceIds = Object.keys(Game.creeps).reduce(function (result, name) {
    var creep = Game.creeps[name];
    var isRoleType = creep.memory.role === role;
    var hasSourceId = !!creep.memory.sourceId;
    if (isRoleType && hasSourceId) {
      result.push(creep.memory.sourceId);
    }
    return result;
  }, []);
  var unutilisedSourceLabels = Object.keys(roomSources).filter(function (sourceLabel) {
    var sourceId = roomSources[sourceLabel].id;
    return !creepSourceIds.includes(sourceId);
  });
  return unutilisedSourceLabels.length > 0 ? roomSources[unutilisedSourceLabels[0]].id : null;
}

function createCreep(state, partDefinition, memoryDefinition) {
  var creepName = state.originalSpawn.createCreep(partDefinition, undefined, // undefined argument auto-generates creep name
  memoryDefinition);
  console.log('Creating harvester creep: ' + creepName);
}

function fetchCreepsByRole(role) {
  return Object.keys(Game.creeps).reduce(function (result, name) {
    var creep = Game.creeps[name];
    if (creep.memory.role === role) {
      result.push(creep);
    }
    return result;
  }, []);
}

function calculateHarvesterSourceId(state) {
  var unharvestedSourceId = findUnutilisedSourceIdByRole(state, 'harvester');
  if (!!unharvestedSourceId) {
    var energyAvailable = calculateEnergyAvailable(state);
    var energyCapacityAvailable = calculateEnergyCapacityAvailable(state);
    var harvesterCreeps = fetchCreepsByRole('harvester');
    var harvesterCount = harvesterCreeps.length;
    var shouldCreateFirstHarvester = harvesterCount === 0 && energyAvailable >= 300;
    var shouldCreateRestHarvester = harvesterCount > 0 && energyCapacityAvailable === energyAvailable;
    return (shouldCreateFirstHarvester || shouldCreateRestHarvester) && unharvestedSourceId;
  }
  return false;
}

function calculateBuilderSourceId(state) {
  var unharvestedSourceId = findUnutilisedSourceIdByRole(state, 'builder');
  if (!!unharvestedSourceId) {
    var energyAvailable = calculateEnergyAvailable(state);
    var energyCapacityAvailable = calculateEnergyCapacityAvailable(state);
    return energyCapacityAvailable === energyAvailable && unharvestedSourceId;
  }
  return false;
}

function constructCreep(state) {
  var energyAvailable = calculateEnergyAvailable(state);
  var harvesterSourceId = calculateHarvesterSourceId(state);
  var builderSourceId = calculateBuilderSourceId(state);
  if (!!harvesterSourceId) {
    var creepPartDefinition = generateCreepPartDefinition(energyAvailable, harvesterPartRatio);
    var creepMemoryDefinition = {
      role: 'harvester',
      mode: 'harvest',
      sourceId: harvesterSourceId
    };
    createCreep(state, creepPartDefinition, creepMemoryDefinition);
  } else if (!!builderSourceId) {
    var _creepPartDefinition = generateCreepPartDefinition(energyAvailable, builderPartRatio);
    var _creepMemoryDefinition = {
      role: 'builder',
      mode: 'harvest',
      sourceId: builderSourceId
    };
    createCreep(state, _creepPartDefinition, _creepMemoryDefinition);
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operateCreep = operateCreep;
function setHarvesterMode(creep) {
  var mode = creep.memory.mode;

  var shouldToggleHarvest = mode === 'distribute' && creep.carry.energy === 0;
  var shouldToggleDistribute = mode === 'harvest' && creep.carry.energy === creep.carryCapacity;
  if (shouldToggleHarvest) {
    creep.memory.mode = 'harvest';
    creep.say('Harvest');
  }
  if (shouldToggleDistribute) {
    creep.memory.mode = 'distribute';
    creep.say('Distribute');
  }
}

function creepHarvest(creep, state) {
  var sourceId = creep.memory.sourceId;

  var source = Game.getObjectById(sourceId);
  if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
    creep.moveTo(source);
  }
}

function creepDistribute(creep, state) {
  var room = state.originalRoom;
  var roomController = creep.room.controller;
  var storageLocations = room.find(FIND_STRUCTURES, {
    filter: function filter(structure) {
      var isExtension = structure.structureType === STRUCTURE_EXTENSION;
      var isSpawn = structure.structureType === STRUCTURE_SPAWN;
      var isTower = structure.structureType === STRUCTURE_TOWER;
      var isStorageStructure = isExtension || isSpawn || isTower;
      return isStorageStructure && structure.energy < structure.energyCapacity;
    }
  });
  if (storageLocations.length) {
    if (creep.transfer(storageLocations[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(storageLocations[0]);
    }
  } else {
    if (creep.upgradeController(roomController) == ERR_NOT_IN_RANGE) {
      creep.moveTo(roomController);
    }
  }
}

var harvesterModeOperations = {
  harvest: creepHarvest,
  distribute: creepDistribute
};

function operateHarvester(creep, state) {
  if (!creep) return;
  setHarvesterMode(creep);
  harvesterModeOperations[creep.memory.mode](creep, state);
}

function setBuilderMode(creep) {
  var mode = creep.memory.mode;

  var shouldToggleHarvest = mode === 'build' && creep.carry.energy === 0;
  var shouldToggleBuild = mode === 'harvest' && creep.carry.energy === creep.carryCapacity;
  if (shouldToggleHarvest) {
    creep.memory.mode = 'harvest';
    creep.say('Harvest');
  }
  if (shouldToggleBuild) {
    creep.memory.mode = 'build';
    creep.say('Build');
  }
}

var builderModeOperations = {
  harvest: creepHarvest,
  build: creepBuild
};

function creepBuild(creep, state) {
  var room = state.originalRoom;
  var constructionSites = room.find(FIND_CONSTRUCTION_SITES);
  var repairTargets = room.find(FIND_STRUCTURES, {
    filter: function filter(structure) {
      return structure.hits < structure.hitsMax;
    }
  });
  if (constructionSites.length) {
    if (creep.build(constructionSites[0]) === ERR_NOT_IN_RANGE) {
      creep.moveTo(constructionSites[0]);
    }
  } else if (repairTargets.length) {
    var weakestStructure = repairTargets.reduce(function (result, current) {
      if (current.hits < result.hits) {
        return current;
      } else {
        return result;
      }
    }, repairTargets[0]);
    if (creep.repair(weakestStructure) === ERR_NOT_IN_RANGE) {
      creep.moveTo(weakestStructure);
    }
  } else {
    creep.moveTo(spawn);
  }
}

function operateBuilder(creep, state) {
  if (!creep) return;
  setBuilderMode(creep);
  builderModeOperations[creep.memory.mode](creep, state);
}

function operateDefender(creep, state) {}

var roleOperations = {
  harvester: operateHarvester,
  builder: operateBuilder,
  defender: operateDefender
};

function operateCreep(state) {
  if (!Game.creeps) return;
  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    roleOperations[creep.memory.role](creep, state);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tickMultipleOf = exports.tickMultipleOf = function tickMultipleOf(tickCount) {
  return Game.time % tickCount == 0 ? true : false;
};

var originalSpawn = Game.spawns['Spawn1'];

var constructInitialState = exports.constructInitialState = function constructInitialState() {
  return {
    originalSpawn: originalSpawn,
    originalRoom: originalSpawn.room
  };
};

/***/ })
/******/ ])));