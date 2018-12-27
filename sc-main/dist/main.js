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


var _general = __webpack_require__(6);

var _state = __webpack_require__(4);

var _game = __webpack_require__(1);

var _memory = __webpack_require__(2);

var _construct = __webpack_require__(5);

var _operate = __webpack_require__(7);

var loop = function loop() {
  var currentSpawn = Game.spawns['Spawn01'];
  // TODO: pseudo execute loop
  // 100 tick planning and structure
  // - memory cleanup
  var executeOn100 = (0, _game.executeByTickCount)(100);
  var executorsOn100 = [(0, _general.createExecutionDefinition)(_memory.cleanupCreep), (0, _general.createExecutionDefinition)(_state.assess), (0, _general.createExecutionDefinition)(_construct.constructCreep, currentSpawn)];
  // 10 tick health check and threat assessment
  var executeOn10 = (0, _game.executeByTickCount)(10);
  var executorsOn10 = [];
  // 1 tick creep operation and management
  var executeOn1 = (0, _game.executeByTickCount)(1);
  var executorsOn1 = [(0, _general.createExecutionDefinition)(_operate.operateCreep)];

  executeOn100(executorsOn100);
  executeOn10(executorsOn10);
  executeOn1(executorsOn1);
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var tickMultipleOf = function tickMultipleOf(tickCount) {
  return Game.time % tickCount == 0 ? true : false;
};

var executeByTickCount = exports.executeByTickCount = function executeByTickCount(tickCount) {
  return function (executors) {
    if (tickMultipleOf(tickCount)) {
      executors.forEach(function (data) {
        var executor = data.executor,
            restArgs = data.restArgs;

        for (var name in restArgs) {
          console.log('Argument: ', name);
        }
        executor.apply(undefined, _toConsumableArray(restArgs));
      });
    }
  };
};

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
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var assess = exports.assess = function assess() {
  for (var name in Game.rooms) {
    console.log('Found room: ', name);
  }
  return null;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var basicCreepDef = [WORK, CARRY, MOVE];

var constructCreep = exports.constructCreep = function constructCreep(spawn) {
  var creepNames = Object.keys(Game.creeps);
  if (creepNames.length === 0) {
    var creepName = spawn.createCreep(basicCreepDef, undefined, // undefined argument auto-generates creep name
    {
      role: 'harvester',
      active: false,
      sourceId: null
    });
    console.log('Creating harvester creep: ' + creepName);
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createExecutionDefinition = exports.createExecutionDefinition = function createExecutionDefinition(executor) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return {
    executor: executor,
    restArgs: rest
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var operateCreep = exports.operateCreep = function operateCreep() {
  for (var name in Game.creeps) {
    var currentCreep = Game.creeps[name];
    var sources = currentCreep.room.find(FIND_SOURCES);
    if (currentCreep.carry.energy < currentCreep.carryCapacity) {
      if (currentCreep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        currentCreep.moveTo(sources[0]);
      }
    } else {
      if (currentCreep.transfer(currentSpawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        currentCreep.moveTo(currentSpawn);
      }
    }
  }
};

/***/ })
/******/ ])));