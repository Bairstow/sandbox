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
var basicCreepDef = [WORK, CARRY, MOVE];

var constructCreep = exports.constructCreep = function constructCreep(state) {
  var creepNames = Object.keys(Game.creeps);
  if (creepNames.length === 0) {
    var creepName = state.originalSpawn.createCreep(basicCreepDef, undefined, // undefined argument auto-generates creep name
    {
      role: 'harvester',
      active: false,
      sourceId: null
    });
    console.log('Creating harvester creep: ' + creepName);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var roleOperations = {
  harvester: operateHarvester,
  builder: operateBuilder,
  defender: operateDefender
};

var operateCreep = exports.operateCreep = function operateCreep(state) {
  if (!Memory.creeps) return;
  for (var name in Game.creeps) {
    var creepObject = Game.creeps[name];
    var creepMemory = Memory.creeps[name];
    var role = creepMemory.role;

    roleOperations[role](creepObject, creepMemory, state);
  }
};

function operateHarvester(creepObject, creepMemory, state) {
  var active = creepMemory.active,
      sourceId = creepMemory.sourceId;

  var sources = creepObject.room.find(FIND_SOURCES);
  if (creepObject.carry.energy < creepObject.carryCapacity) {
    if (creepObject.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
      creepObject.moveTo(sources[0]);
    }
  } else {
    if (creepObject.transfer(state.originalSpawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creepObject.moveTo(state.originalSpawn);
    }
  }
}

function operateBuilder(creepObject, creepMemory, state) {}

function operateDefender(creepObject, creepMemory, state) {}

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

var constructInitialState = exports.constructInitialState = function constructInitialState() {
  return {
    originalSpawn: Game.spawns['Spawn01']
  };
};

/***/ })
/******/ ])));