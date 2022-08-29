/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/addons/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/raw-loader/index.js!./src/addons/gamepad/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/addons/gamepad/style.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sa-gamepad-container {\n  margin-right: 0.2rem;\n}\n\n.sa-gamepad-spacer {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.sa-gamepad-popup-outer {\n  /* above fullscreen */\n  z-index: 99999;\n}\n.sa-gamepad-popup {\n  box-sizing: border-box;\n  width: 700px;\n  max-height: min(800px, 85vh);\n  height: 100%;\n  max-width: 85%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n}\n.sa-gamepad-popup-content {\n  background-color: white;\n  padding: 1.5rem 2.25rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.sa-gamepad-popup [class*=\"modal_header-item-title\"] {\n  margin: 0 -20rem 0 0;\n}\n\n.sa-gamepad-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  user-select: none;\n  pointer-events: none;\n  will-change: transform;\n  image-rendering: optimizeSpeed;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n}\n.sa-gamepad-cursor-down {\n  filter: invert(100%);\n}\n\n.sa-gamepad-small .sa-gamepad-container[data-editor-mode=\"editor\"] {\n  display: none !important;\n}\n\n.sa-gamepad-hide-cursor {\n  cursor: none;\n}\n\n.sa-gamepad-browser-support-warning {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sa-gamepad-store-settings {\n  display: none;\n}\n.sa-gamepad-store-settings > input {\n  margin-right: 4px;\n}\n.sa-gamepad-has-controller .sa-gamepad-store-settings {\n  display: block;\n}\n"

/***/ }),

/***/ "./src/addons/gamepad/active.png":
/*!***************************************!*\
  !*** ./src/addons/gamepad/active.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAgSURBVBhXY/z//z8DKmCC0kgAKsQIBhA2FlXEmMXAAAC+2gYLeDM0CAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/addons/gamepad/close.svg":
/*!**************************************!*\
  !*** ./src/addons/gamepad/close.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCI+PHBhdGggZD0iTTMuNzQgNi40OFYxTTEgMy43NGg1LjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4Ii8+PC9zdmc+Cg==");

/***/ }),

/***/ "./src/addons/gamepad/cursor.png":
/*!***************************************!*\
  !*** ./src/addons/gamepad/cursor.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAVSURBVBhXYyAF/AcDCJsJQpEKGBgAjmQF/WBrfi0AAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/addons/gamepad/dot.svg":
/*!************************************!*\
  !*** ./src/addons/gamepad/dot.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyLjExNyAyLjExNyI+PGNpcmNsZSBjeD0iMS4wNTgiIGN5PSIxLjA1OCIgcj0iMS4wNTgiIGZpbGw9InJlZCIvPjwvc3ZnPgo=");

/***/ }),

/***/ "./src/addons/gamepad/gamepadlib.js":
/*!******************************************!*\
  !*** ./src/addons/gamepad/gamepadlib.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_event_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/event-target */ "./src/common/event-target.js");

let console = window.console;
/*
Mapping types:

type: "key" maps a button to a keyboard key
All key names will be interpreted as a KeyboardEvent.key value (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
high: "KeyName" is the name of the key to dispatch when a button reads a HIGH value
low: "KeyName" is the name of the key to dispatch when a button reads a LOW value
deadZone: 0.5 controls the minimum value necessary to be read in either + or - to trigger either high or low
The high/low distinction is necessary for axes. Buttons will only use high

type: "mousedown" maps a button to control whether the mouse is down or not
deadZone: 0.5 controls the minimum value to trigger a mousedown
button: 0, 1, 2, etc. controls which button to press

type: "virtual_cursor" maps a button to control the "virtual cursor"
deadZone: 0.5 again controls the minimum value to trigger a movement
sensitivity: 10 controls the speed
high: "+y"/"-y"/"+x"/"-x" defines what happens when an axis reads high
low: "+y"/"-y"/"+x"/"-x" defines what happens when an axis reads low
+y increases y, -y decreases y, +x increases x, -x decreases x.
*/

const defaultAxesMappings = {
  arrows: [{
    type: "key",
    high: "ArrowRight",
    low: "ArrowLeft",
    deadZone: 0.5
  }, {
    type: "key",
    high: "ArrowDown",
    low: "ArrowUp",
    deadZone: 0.5
  }],
  wasd: [{
    type: "key",
    high: "d",
    low: "a",
    deadZone: 0.5
  }, {
    type: "key",
    high: "s",
    low: "w",
    deadZone: 0.5
  }],
  cursor: [{
    type: "virtual_cursor",
    high: "+x",
    low: "-x",
    sensitivity: 0.6,
    deadZone: 0.2
  }, {
    type: "virtual_cursor",
    high: "-y",
    low: "+y",
    sensitivity: 0.6,
    deadZone: 0.2
  }]
};

const emptyMapping = () => ({
  type: "key",
  high: null,
  low: null
});

const transformAndCopyMapping = mapping => {
  if (typeof mapping !== "object" || !mapping) {
    console.warn("invalid mapping", mapping);
    return emptyMapping();
  }

  const copy = Object.assign({}, mapping);

  if (copy.type === "key") {
    if (typeof copy.deadZone === "undefined") {
      copy.deadZone = 0.5;
    }

    if (typeof copy.high === "undefined") {
      copy.high = "";
    }

    if (typeof copy.low === "undefined") {
      copy.low = "";
    }
  } else if (copy.type === "mousedown") {
    if (typeof copy.deadZone === "undefined") {
      copy.deadZone = 0.5;
    }

    if (typeof copy.button === "undefined") {
      copy.button = 0;
    }
  } else if (copy.type === "virtual_cursor") {
    if (typeof copy.high === "undefined") {
      copy.high = "";
    }

    if (typeof copy.low === "undefined") {
      copy.low = "";
    }

    if (typeof copy.sensitivity === "undefined") {
      copy.sensitivity = 10;
    }

    if (typeof copy.deadZone === "undefined") {
      copy.deadZone = 0.5;
    }
  } else {
    console.warn("unknown mapping type", copy.type);
    return emptyMapping();
  }

  return copy;
};

const prepareMappingForExport = mapping => Object.assign({}, mapping);

const prepareAxisMappingForExport = prepareMappingForExport;

const prepareButtonMappingForExport = mapping => {
  const copy = prepareMappingForExport(mapping);
  delete copy.deadZone;
  delete copy.low;
  return copy;
};

const padWithEmptyMappings = (array, length) => {
  // Keep adding empty mappings until the list is full
  while (array.length < length) {
    array.push(emptyMapping());
  } // In case the input array is longer than the desired length


  array.length = length;
  return array;
};

const getMovementConfiguration = usedKeys => ({
  usesArrows: usedKeys.has("ArrowUp") || usedKeys.has("ArrowDown") || usedKeys.has("ArrowRight") || usedKeys.has("ArrowLeft"),
  usesWASD: usedKeys.has("w") && usedKeys.has("s") || usedKeys.has("a") && usedKeys.has("d")
});

const getGamepadId = gamepad => "".concat(gamepad.id, " (").concat(gamepad.index, ")");

class GamepadData {
  /**
   * @param {Gamepad} gamepad Source Gamepad
   * @param {GamepadLib} gamepadLib Parent GamepadLib
   */
  constructor(gamepad, gamepadLib) {
    this.gamepad = gamepad;
    this.gamepadLib = gamepadLib;
    this.resetMappings();
  }

  resetMappings() {
    this.buttonMappings = this.getDefaultButtonMappings().map(transformAndCopyMapping);
    this.axesMappings = this.getDefaultAxisMappings().map(transformAndCopyMapping);
  }

  getDefaultButtonMappings() {
    let buttons;

    if (this.gamepadLib.hints.importedSettings) {
      buttons = this.gamepadLib.hints.importedSettings.buttons;
    } else {
      const usedKeys = this.gamepadLib.hints.usedKeys;
      const alreadyUsedKeys = new Set();
      const {
        usesArrows,
        usesWASD
      } = getMovementConfiguration(usedKeys);

      if (usesWASD) {
        alreadyUsedKeys.add("w");
        alreadyUsedKeys.add("a");
        alreadyUsedKeys.add("s");
        alreadyUsedKeys.add("d");
      }

      const possiblePauseKeys = [// Restart keys, pause keys, other potentially dangerous keys
      "p", "q", "r"];
      const possibleActionKeys = [" ", "Enter", "e", "f", "z", "x", "c", ...Array.from(usedKeys).filter(i => i.length === 1 && !possiblePauseKeys.includes(i))];

      const findKey = keys => {
        for (const key of keys) {
          if (usedKeys.has(key) && !alreadyUsedKeys.has(key)) {
            alreadyUsedKeys.add(key);
            return key;
          }
        }

        return null;
      };

      const getPrimaryAction = () => {
        if (usesArrows && usedKeys.has("ArrowUp")) {
          return "ArrowUp";
        }

        if (usesWASD && usedKeys.has("w")) {
          return "w";
        }

        return findKey(possibleActionKeys);
      };

      const getSecondaryAction = () => findKey(possibleActionKeys);

      const getPauseKey = () => findKey(possiblePauseKeys);

      const getUp = () => {
        if (usesArrows || !usesWASD) return "ArrowUp";
        return "w";
      };

      const getDown = () => {
        if (usesArrows || !usesWASD) return "ArrowDown";
        return "s";
      };

      const getRight = () => {
        if (usesArrows || !usesWASD) return "ArrowRight";
        return "d";
      };

      const getLeft = () => {
        if (usesArrows || !usesWASD) return "ArrowLeft";
        return "a";
      };

      const action1 = getPrimaryAction();
      let action2 = getSecondaryAction();
      let action3 = getSecondaryAction();
      let action4 = getSecondaryAction(); // When only 1 or 2 action keys are detected, bind the other buttons to the same things.

      if (action1 && !action2 && !action3 && !action4) {
        action2 = action1;
        action3 = action1;
        action4 = action1;
      }

      if (action1 && action2 && !action3 && !action4) {
        action3 = action1;
        action4 = action2;
      } // Set indices "manually" because we don't evaluate them in order.


      buttons = [];
      buttons[0] = {
        /*
        Xbox: A
        SNES-like: B
        */
        type: "key",
        high: action1
      };
      buttons[1] = {
        /*
        Xbox: B
        SNES-like: A
        */
        type: "key",
        high: action2
      };
      buttons[2] = {
        /*
        Xbox: X
        SNES-like: Y
        */
        type: "key",
        high: action3
      };
      buttons[3] = {
        /*
        Xbox: Y
        SNES-like: X
        */
        type: "key",
        high: action4
      };
      buttons[4] = {
        /*
        Xbox: LB
        SNES-like: Left trigger
        */
        type: "mousedown"
      };
      buttons[5] = {
        /*
        Xbox: RB
        */
        type: "mousedown"
      };
      buttons[6] = {
        /*
        Xbox: LT
        */
        type: "mousedown"
      };
      buttons[7] = {
        /*
        Xbox: RT
        SNES-like: Right trigger
        */
        type: "mousedown"
      };
      buttons[9] = {
        /*
        Xbox: Menu
        SNES-like: Start
        */
        type: "key",
        high: getPauseKey()
      };
      buttons[8] = {
        /*
        Xbox: Change view
        SNES-like: Select
        */
        type: "key",
        high: getPauseKey()
      }; // Xbox: Left analog press

      buttons[10] = emptyMapping(); // Xbox: Right analog press

      buttons[11] = emptyMapping();
      buttons[12] = {
        /*
        Xbox: D-pad up
        */
        type: "key",
        high: getUp()
      };
      buttons[13] = {
        /*
        Xbox: D-pad down
        */
        type: "key",
        high: getDown()
      };
      buttons[14] = {
        /*
        Xbox: D-pad left
        */
        type: "key",
        high: getLeft()
      };
      buttons[15] = {
        /*
        Xbox: D-pad right
        */
        type: "key",
        high: getRight()
      };
    }

    return padWithEmptyMappings(buttons, this.gamepad.buttons.length);
  }

  getDefaultAxisMappings() {
    let axes = [];

    if (this.gamepadLib.hints.importedSettings) {
      axes = this.gamepadLib.hints.importedSettings.axes;
    } else {
      // Only return default axis mappings when there are 4 axes, like an xbox controller
      // If there isn't exactly 4, we can't really predict what the axes mean
      // Some controllers map the dpad to *both* buttons and axes at the same time, which would cause conflicts.
      if (this.gamepad.axes.length === 4) {
        const usedKeys = this.gamepadLib.hints.usedKeys;
        const {
          usesArrows,
          usesWASD
        } = getMovementConfiguration(usedKeys);

        if (usesWASD) {
          axes.push(defaultAxesMappings.wasd[0]);
          axes.push(defaultAxesMappings.wasd[1]);
        } else if (usesArrows) {
          axes.push(defaultAxesMappings.arrows[0]);
          axes.push(defaultAxesMappings.arrows[1]);
        } else {
          axes.push(defaultAxesMappings.cursor[0]);
          axes.push(defaultAxesMappings.cursor[1]);
        }

        axes.push(defaultAxesMappings.cursor[0]);
        axes.push(defaultAxesMappings.cursor[1]);
      }
    }

    return padWithEmptyMappings(axes, this.gamepad.axes.length);
  }

}

const defaultHints = () => ({
  usedKeys: new Set(),
  importedSettings: null,
  generated: false
});

class GamepadLib extends _common_event_target__WEBPACK_IMPORTED_MODULE_0__["EventTarget"] {
  constructor() {
    super();
    /** @type {Map<string, GamepadData>} */

    this.gamepads = new Map();
    this.handleConnect = this.handleConnect.bind(this);
    this.handleDisconnect = this.handleDisconnect.bind(this);
    this.update = this.update.bind(this);
    this.animationFrame = null;
    this.currentTime = null;
    this.deltaTime = 0;
    this.virtualCursor = {
      x: 0,
      y: 0,
      maxX: Infinity,
      minX: -Infinity,
      maxY: Infinity,
      minY: -Infinity,
      modified: false
    };
    this._editor = null;
    this.connectCallbacks = [];
    this.hints = defaultHints();
    this.keysPressedThisFrame = new Set();
    this.oldKeysPressed = new Set();
    this.mouseButtonsPressedThisFrame = new Set();
    this.oldMouseDown = new Set();
    this.addEventHandlers();
  }

  addEventHandlers() {
    window.addEventListener("gamepadconnected", this.handleConnect);
    window.addEventListener("gamepaddisconnected", this.handleDisconnect);
  }

  removeEventHandlers() {
    window.removeEventListener("gamepadconnected", this.handleConnect);
    window.removeEventListener("gamepaddisconnected", this.handleDisconnect);
  }

  gamepadConnected() {
    if (this.gamepads.size > 0) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      this.connectCallbacks.push(resolve);
    });
  }

  ensureHintsGenerated() {
    if (this.hints.generated) {
      return;
    }

    if (this.getHintsLazily) {
      Object.assign(this.hints, this.getHintsLazily());
    }

    this.hints.generated = true;
  }

  resetControls() {
    this.hints = defaultHints();
    this.ensureHintsGenerated();

    for (const gamepad of this.gamepads.values()) {
      gamepad.resetMappings();
    }
  }

  handleConnect(e) {
    this.ensureHintsGenerated();

    for (const callback of this.connectCallbacks) {
      callback();
    }

    this.connectCallbacks = [];
    const gamepad = e.gamepad;
    const id = getGamepadId(gamepad);
    console.log("connected", gamepad);
    const gamepadData = new GamepadData(gamepad, this);
    this.gamepads.set(id, gamepadData);

    if (this.animationFrame === null) {
      this.animationFrame = requestAnimationFrame(this.update);
    }

    this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]("gamepadconnected", {
      detail: gamepadData
    }));
  }

  handleDisconnect(e) {
    const gamepad = e.gamepad;
    const id = getGamepadId(gamepad);
    console.log("disconnected", gamepad);
    const gamepadData = this.gamepads.get(id);
    this.gamepads.delete(id);
    this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]("gamepaddisconnected", {
      detail: gamepadData
    }));

    if (this.gamepads.size === 0) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
      this.currentTime = null;
    }
  }

  dispatchKey(key, pressed) {
    if (pressed) {
      this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]("keydown", {
        detail: key
      }));
    } else {
      this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]("keyup", {
        detail: key
      }));
    }
  }

  dispatchMouse(button, down) {
    if (down) {
      this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]("mousedown", {
        detail: button
      }));
    } else {
      this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]("mouseup", {
        detail: button
      }));
    }
  }

  dispatchMouseMove(x, y) {
    this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]("mousemove", {
      detail: {
        x,
        y
      }
    }));
  }

  updateButton(value, mapping) {
    if (mapping.type === "key") {
      if (value >= mapping.deadZone) {
        if (mapping.high) {
          this.keysPressedThisFrame.add(mapping.high);
        }
      } else if (value <= -mapping.deadZone) {
        if (mapping.low) {
          this.keysPressedThisFrame.add(mapping.low);
        }
      }
    } else if (mapping.type === "mousedown") {
      const isDown = Math.abs(value) >= mapping.deadZone;

      if (isDown) {
        this.mouseButtonsPressedThisFrame.add(mapping.button);
      }
    } else if (mapping.type === "virtual_cursor") {
      const deadZone = mapping.deadZone;
      let action;
      if (value >= deadZone) action = mapping.high;
      if (value <= -deadZone) action = mapping.low;

      if (action) {
        // an axis value just beyond the deadzone should have a multiplier near 0, a high value should have a multiplier of 1
        const multiplier = (Math.abs(value) - deadZone) / (1 - deadZone);
        const speed = multiplier * multiplier * mapping.sensitivity * this.deltaTime;

        if (action === "+x") {
          this.virtualCursor.x += speed;
        } else if (action === "-x") {
          this.virtualCursor.x -= speed;
        } else if (action === "+y") {
          this.virtualCursor.y += speed;
        } else if (action === "-y") {
          this.virtualCursor.y -= speed;
        }

        this.virtualCursor.modified = true;
      }
    }
  }

  update(time) {
    this.oldKeysPressed = this.keysPressedThisFrame;
    this.oldMouseButtonsPressed = this.mouseButtonsPressedThisFrame;
    this.keysPressedThisFrame = new Set();
    this.mouseButtonsPressedThisFrame = new Set();

    if (this.currentTime === null) {
      this.deltaTime = 0; // doesn't matter what this is, it's just the first frame
    } else {
      this.deltaTime = time - this.currentTime;
    }

    this.deltaTime = Math.max(Math.min(this.deltaTime, 1000), 0);
    this.currentTime = time;
    this.animationFrame = requestAnimationFrame(this.update);
    const gamepads = navigator.getGamepads();

    for (const gamepad of gamepads) {
      if (gamepad === null) {
        continue;
      }

      const id = getGamepadId(gamepad);
      const data = this.gamepads.get(id);

      for (let i = 0; i < gamepad.buttons.length; i++) {
        const button = gamepad.buttons[i];
        const value = button.value;
        const mapping = data.buttonMappings[i];
        this.updateButton(value, mapping);
      }

      for (let i = 0; i < gamepad.axes.length; i++) {
        const axis = gamepad.axes[i];
        const mapping = data.axesMappings[i];
        this.updateButton(axis, mapping);
      }
    }

    if (this._editor) {
      this._editor.update(gamepads);
    }

    for (const key of this.keysPressedThisFrame) {
      if (!this.oldKeysPressed.has(key)) {
        this.dispatchKey(key, true);
      }
    }

    for (const key of this.oldKeysPressed) {
      if (!this.keysPressedThisFrame.has(key)) {
        this.dispatchKey(key, false);
      }
    }

    for (const button of this.mouseButtonsPressedThisFrame) {
      if (!this.oldMouseButtonsPressed.has(button)) {
        this.dispatchMouse(button, true);
      }
    }

    for (const button of this.oldMouseButtonsPressed) {
      if (!this.mouseButtonsPressedThisFrame.has(button)) {
        this.dispatchMouse(button, false);
      }
    }

    if (this.virtualCursor.modified) {
      this.virtualCursor.modified = false;

      if (this.virtualCursor.x > this.virtualCursor.maxX) {
        this.virtualCursor.x = this.virtualCursor.maxX;
      }

      if (this.virtualCursor.x < this.virtualCursor.minX) {
        this.virtualCursor.x = this.virtualCursor.minX;
      }

      if (this.virtualCursor.y > this.virtualCursor.maxY) {
        this.virtualCursor.y = this.virtualCursor.maxY;
      }

      if (this.virtualCursor.y < this.virtualCursor.minY) {
        this.virtualCursor.y = this.virtualCursor.minY;
      }

      this.dispatchMouseMove(this.virtualCursor.x, this.virtualCursor.y);
    }
  }

  editor() {
    throw new Error('removed');
  }

}

GamepadLib.browserHasBrokenGamepadAPI = () => {
  // Check that the gamepad API is supported at all
  if (!navigator.getGamepads) {
    return true;
  } // Firefox on Linux has a broken gamepad API implementation that results in strange and sometimes unusable mappings
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1643358
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1643835


  if (navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Linux")) {
    return true;
  } // Firefox on macOS has other bugs that result in strange and unusable mappings
  // eg. https://bugzilla.mozilla.org/show_bug.cgi?id=1434408


  if (navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Mac OS")) {
    return true;
  }

  return false;
};

GamepadLib.setConsole = n => console = n;

/* harmony default export */ __webpack_exports__["default"] = (GamepadLib);

/***/ }),

/***/ "./src/addons/gamepad/index.js":
/*!*************************************!*\
  !*** ./src/addons/gamepad/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/gamepad/userscript.js");
/* harmony import */ var _raw_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./style.css */ "./node_modules/raw-loader/index.js!./src/addons/gamepad/style.css");
/* harmony import */ var _raw_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);



const addStylesheet = css => {
  const stylesheet = document.createElement('style');
  stylesheet.textContent = css;
  document.head.appendChild(stylesheet);
};

const run = _ref => {
  let {
    scaffolding,
    options
  } = _ref;
  Object(_userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"])(scaffolding, options.pointerlock);
  addStylesheet(_raw_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (run);

/***/ }),

/***/ "./src/addons/gamepad/userscript.js":
/*!******************************************!*\
  !*** ./src/addons/gamepad/userscript.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _active_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active.png */ "./src/addons/gamepad/active.png");
/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close.svg */ "./src/addons/gamepad/close.svg");
/* harmony import */ var _cursor_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursor.png */ "./src/addons/gamepad/cursor.png");
/* harmony import */ var _dot_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dot.svg */ "./src/addons/gamepad/dot.svg");
/* harmony import */ var _gamepadlib_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gamepadlib.js */ "./src/addons/gamepad/gamepadlib.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* inserted by pull.js */





const _twGetAsset = path => {
  if (path === "/active.png") return _active_png__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/close.svg") return _close_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  if (path === "/cursor.png") return _cursor_png__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (path === "/dot.svg") return _dot_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
  throw new Error("Unknown asset: ".concat(path));
};


/* harmony default export */ __webpack_exports__["default"] = (async function (scaffolding, pointerlock) {
  const vm = scaffolding.vm; // Wait for the project to finish loading. Renderer and scripts will not be fully available until this happens.

  await new Promise(resolve => {
    if (vm.editingTarget) return resolve();
    vm.runtime.once("PROJECT_LOADED", resolve);
  });

  const vmStarted = () => vm.runtime._steppingInterval !== null;

  const scratchKeyToKey = key => {
    switch (key) {
      case "right arrow":
        return "ArrowRight";

      case "up arrow":
        return "ArrowUp";

      case "left arrow":
        return "ArrowLeft";

      case "down arrow":
        return "ArrowDown";

      case "enter":
        return "Enter";

      case "space":
        return " ";
    }

    return key.toLowerCase().charAt(0);
  };

  const getKeysUsedByProject = () => {
    const allBlocks = [vm.runtime.getTargetForStage(), ...vm.runtime.targets].filter(i => i.isOriginal).map(i => i.blocks);
    const result = new Set();

    for (const blocks of allBlocks) {
      for (const block of Object.values(blocks._blocks)) {
        if (block.opcode === "event_whenkeypressed" || block.opcode === "sensing_keyoptions") {
          // For blocks like "key (my variable) pressed?", the sensing_keyoptions still exists but has a null parent.
          if (block.opcode === "sensing_keyoptions" && !block.parent) {
            continue;
          }

          const key = block.fields.KEY_OPTION.value;
          result.add(scratchKeyToKey(key));
        }
      }
    }

    return result;
  };

  const GAMEPAD_CONFIG_MAGIC = " // _gamepad_";

  const findOptionsComment = () => {
    const target = vm.runtime.getTargetForStage();
    const comments = target.comments;

    for (const comment of Object.values(comments)) {
      if (comment.text.includes(GAMEPAD_CONFIG_MAGIC)) {
        return comment;
      }
    }

    return null;
  };

  const parseOptionsComment = () => {
    const comment = findOptionsComment();

    if (!comment) {
      return null;
    }

    const lineWithMagic = comment.text.split("\n").find(i => i.endsWith(GAMEPAD_CONFIG_MAGIC));

    if (!lineWithMagic) {
      console.warn("Gamepad comment does not contain valid line");
      return null;
    }

    const jsonText = lineWithMagic.substr(0, lineWithMagic.length - GAMEPAD_CONFIG_MAGIC.length);
    let parsed;

    try {
      parsed = JSON.parse(jsonText);

      if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.buttons) || !Array.isArray(parsed.axes)) {
        throw new Error("Invalid data");
      }
    } catch (e) {
      console.warn("Gamepad comment has invalid JSON", e);
      return null;
    }

    return parsed;
  };

  _gamepadlib_js__WEBPACK_IMPORTED_MODULE_4__["default"].setConsole(console);
  const gamepad = new _gamepadlib_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const parsedOptions = parseOptionsComment();

  gamepad.getHintsLazily = () => {
    if (parsedOptions) {
      return {
        importedSettings: parsedOptions
      };
    }

    return {
      usedKeys: getKeysUsedByProject()
    };
  };

  const renderer = vm.runtime.renderer;
  const width = renderer._xRight - renderer._xLeft;
  const height = renderer._yTop - renderer._yBottom;
  const canvas = renderer.canvas;
  const virtualCursorElement = document.createElement("img");
  virtualCursorElement.hidden = true;
  virtualCursorElement.className = "sa-gamepad-cursor";
  virtualCursorElement.src = _twGetAsset("/cursor.png");
  let hideCursorTimeout;

  const hideRealCursor = () => {
    document.body.classList.add("sa-gamepad-hide-cursor");
  };

  const showRealCursor = () => {
    document.body.classList.remove("sa-gamepad-hide-cursor");
  };

  const virtualCursorSetVisible = visible => {
    virtualCursorElement.hidden = !visible;
    clearTimeout(hideCursorTimeout);

    if (visible) {
      hideRealCursor();
      hideCursorTimeout = setTimeout(virtualCursorHide, 8000);
    }
  };

  const virtualCursorHide = () => {
    virtualCursorSetVisible(false);
  };

  const virtualCursorSetDown = down => {
    virtualCursorSetVisible(true);
    virtualCursorElement.classList.toggle("sa-gamepad-cursor-down", down);
  };

  const virtualCursorSetPosition = (x, y) => {
    virtualCursorSetVisible(true);
    const CURSOR_SIZE = 6;
    const stageX = width / 2 + x - CURSOR_SIZE / 2;
    const stageY = height / 2 - y - CURSOR_SIZE / 2;
    virtualCursorElement.style.transform = "translate(".concat(stageX, "px, ").concat(stageY, "px)");
  };

  document.addEventListener("mousemove", () => {
    virtualCursorSetVisible(false);
    showRealCursor();
  });
  let getCanvasSize; // Support modern ResizeObserver and slow getBoundingClientRect version for improved browser support (matters for TurboWarp)

  if (window.ResizeObserver) {
    let canvasWidth = width;
    let canvasHeight = height;
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        canvasWidth = entry.contentRect.width;
        canvasHeight = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    getCanvasSize = () => [canvasWidth, canvasHeight];
  } else {
    getCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      return [rect.width, rect.height];
    };
  } // Both in Scratch space


  let virtualX = 0;
  let virtualY = 0;

  const postMouseData = data => {
    if (!vmStarted()) return;
    const [rectWidth, rectHeight] = getCanvasSize();
    vm.postIOData("mouse", _objectSpread(_objectSpread({}, data), {}, {
      canvasWidth: rectWidth,
      canvasHeight: rectHeight,
      x: (virtualX + width / 2) * (rectWidth / width),
      y: (height / 2 - virtualY) * (rectHeight / height)
    }));
  };

  const postKeyboardData = (key, isDown) => {
    if (!vmStarted()) return;
    vm.postIOData("keyboard", {
      key,
      isDown
    });
  };

  const handleGamepadButtonDown = e => postKeyboardData(e.detail, true);

  const handleGamepadButtonUp = e => postKeyboardData(e.detail, false);

  const handleGamepadMouseDown = e => {
    virtualCursorSetDown(true);
    postMouseData({
      isDown: true,
      button: e.detail
    });
  };

  const handleGamepadMouseUp = e => {
    virtualCursorSetDown(false);
    postMouseData({
      isDown: false,
      button: e.detail
    });
  };

  const handleGamepadMouseMove = e => {
    const {
      x,
      y
    } = e.detail;

    if (pointerlock) {
      const deltaX = x - virtualX;
      const deltaY = -(y - virtualY);
      virtualX = x;
      virtualY = y; // Coordinates that pointerlock accepts are in "screen space" but virtual cursor is in "stage space"

      const SPEED_MULTIPLIER = 4.0;
      const zoomMultiplierX = scaffolding.layersRect.width / vm.runtime.stageWidth;
      const zoomMultiplierY = scaffolding.layersRect.height / vm.runtime.stageHeight; // This is defined in pointerlock addon

      vm.pointerLockMove(deltaX * SPEED_MULTIPLIER * zoomMultiplierX, deltaY * SPEED_MULTIPLIER * zoomMultiplierY);
    } else {
      virtualX = x;
      virtualY = y;
      virtualCursorSetPosition(virtualX, virtualY);
      postMouseData({});
    }
  };

  if (!pointerlock) {
    gamepad.virtualCursor.maxX = renderer._xRight;
    gamepad.virtualCursor.minX = renderer._xLeft;
    gamepad.virtualCursor.maxY = renderer._yTop;
    gamepad.virtualCursor.minY = renderer._yBottom;
  }

  gamepad.addEventListener("keydown", handleGamepadButtonDown);
  gamepad.addEventListener("keyup", handleGamepadButtonUp);
  gamepad.addEventListener("mousedown", handleGamepadMouseDown);
  gamepad.addEventListener("mouseup", handleGamepadMouseUp);
  gamepad.addEventListener("mousemove", handleGamepadMouseMove);

  if (!pointerlock) {
    scaffolding._overlays.appendChild(virtualCursorElement);
  }
});

/***/ }),

/***/ "./src/addons/index.js":
/*!*****************************!*\
  !*** ./src/addons/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamepad */ "./src/addons/gamepad/index.js");
/* harmony import */ var _pointerlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointerlock */ "./src/addons/pointerlock.js");
/* harmony import */ var _special_cloud_behaviors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-cloud-behaviors */ "./src/addons/special-cloud-behaviors.js");
/* harmony import */ var _unsafe_cloud_behaviors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unsafe-cloud-behaviors */ "./src/addons/unsafe-cloud-behaviors.js");
/* harmony import */ var _pause__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pause */ "./src/addons/pause.js");






const run = (scaffolding, options) => {
  const api = {
    scaffolding,
    options
  };
  if (options.gamepad) Object(_gamepad__WEBPACK_IMPORTED_MODULE_0__["default"])(api);
  if (options.pointerlock) Object(_pointerlock__WEBPACK_IMPORTED_MODULE_1__["default"])(api);
  if (options.specialCloudBehaviors) Object(_special_cloud_behaviors__WEBPACK_IMPORTED_MODULE_2__["default"])(api);
  if (options.unsafeCloudBehaviors) Object(_unsafe_cloud_behaviors__WEBPACK_IMPORTED_MODULE_3__["default"])(api);
  if (options.pause) Object(_pause__WEBPACK_IMPORTED_MODULE_4__["default"])(api);
};

window.ScaffoldingAddons = {
  run
};

/***/ }),

/***/ "./src/addons/pause.js":
/*!*****************************!*\
  !*** ./src/addons/pause.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  let {
    scaffolding
  } = _ref;
  // This file is based on the `pause` addon from Scratch Addons
  // All major portions of this file were written by me, so the GPL does not apply
  const STATUS_PROMISE_WAIT = 1;
  const STATUS_DONE = 4;
  const vm = scaffolding.vm;
  let paused = false;
  let pausedThreadState = new WeakMap();

  const setPaused = _paused => {
    paused = _paused;

    if (paused) {
      vm.runtime.audioEngine.audioContext.suspend();

      if (!vm.runtime.ioDevices.clock._paused) {
        vm.runtime.ioDevices.clock.pause();
      }

      for (const thread of vm.runtime.threads) {
        if (!thread.updateMonitor && !pausedThreadState.has(thread)) {
          const pauseState = {
            pauseTime: vm.runtime.currentMSecs,
            status: thread.status
          };
          pausedThreadState.set(thread, pauseState);
          thread.status = STATUS_PROMISE_WAIT;
        }
      } // Immediately emit project stop
      // Scratch will do this automatically, but there may be a slight delay.


      vm.runtime.emit("PROJECT_RUN_STOP");
    } else {
      vm.runtime.audioEngine.audioContext.resume();
      vm.runtime.ioDevices.clock.resume();
      const now = Date.now();

      for (const thread of vm.runtime.threads) {
        const pauseState = pausedThreadState.get(thread);

        if (pauseState) {
          const stackFrame = thread.peekStackFrame();

          if (stackFrame && stackFrame.executionContext && stackFrame.executionContext.timer) {
            const dt = now - pauseState.pauseTime;
            stackFrame.executionContext.timer.startTime += dt;
          } // Compiler state is stored differently


          if (thread.timer) {
            const dt = now - pauseState.pauseTime;
            thread.timer.startTime += dt;
          }

          thread.status = pauseState.status;
        }
      }

      pausedThreadState = new WeakMap();
    }

    vm.emit('P4_PAUSE', paused);
  };

  const ensurePausedThreadIsStillPaused = thread => {
    if (thread.status === STATUS_DONE) {
      return;
    }

    const pauseState = pausedThreadState.get(thread);

    if (pauseState) {
      if (thread.status !== STATUS_PROMISE_WAIT) {
        // We'll record the change so we can properly resume the thread, but the thread must still be paused for now.
        pauseState.status = thread.status;
        thread.status = STATUS_PROMISE_WAIT;
      }
    }
  };

  const originalStepThreads = vm.runtime.sequencer.stepThreads;

  vm.runtime.sequencer.stepThreads = function () {
    if (paused) {
      for (const thread of this.runtime.threads) {
        ensurePausedThreadIsStillPaused(thread);
      }
    }

    return originalStepThreads.call(this);
  };

  const originalGreenFlag = vm.runtime.greenFlag;

  vm.runtime.greenFlag = function () {
    setPaused(false);
    return originalGreenFlag.call(this);
  }; // Disable edge-activated hats and hats like "when key pressed" while paused.


  const originalStartHats = vm.runtime.startHats;

  vm.runtime.startHats = function () {
    if (paused) {
      return [];
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return originalStartHats.apply(this, args);
  }; // Paused threads should not be counted as running when updating GUI state.


  const originalGetMonitorThreadCount = vm.runtime._getMonitorThreadCount;

  vm.runtime._getMonitorThreadCount = function (threads) {
    let count = originalGetMonitorThreadCount.call(this, threads);

    if (paused) {
      for (const thread of threads) {
        if (pausedThreadState.has(thread)) {
          count++;
        }
      }
    }

    return count;
  };

  vm.setPaused = setPaused;
});

/***/ }),

/***/ "./src/addons/pointerlock.js":
/*!***********************************!*\
  !*** ./src/addons/pointerlock.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const run = _ref => {
  let {
    scaffolding
  } = _ref;
  const canvas = scaffolding._canvas;
  const vm = scaffolding.vm;
  const mouse = vm.runtime.ioDevices.mouse;
  let isLocked = false;

  const postMouseData = (e, isDown) => {
    const {
      movementX,
      movementY
    } = e;
    const {
      width,
      height
    } = scaffolding.layersRect;
    const x = mouse._clientX + movementX;
    const y = mouse._clientY - movementY;
    mouse._clientX = x;
    mouse._scratchX = mouse.runtime.stageWidth * (x / width - 0.5);
    mouse._clientY = y;
    mouse._scratchY = mouse.runtime.stageWidth * (y / height - 0.5);

    if (typeof isDown === 'boolean') {
      const data = {
        button: e.button,
        isDown
      };
      vm.postIOData('mouse', data);
    }
  };

  document.addEventListener("mousedown", e => {
    if (canvas.contains(e.target)) {
      e.stopPropagation();

      if (isLocked) {
        postMouseData(e, true);
      } else {
        canvas.requestPointerLock();
      }
    }
  }, true);
  document.addEventListener("mouseup", e => {
    e.stopPropagation();

    if (isLocked) {
      postMouseData(e, false);
    } else if (canvas.contains(e.target)) {
      canvas.requestPointerLock();
    }
  }, true);
  document.addEventListener("mousemove", e => {
    e.stopPropagation();

    if (isLocked) {
      postMouseData(e);
    }
  }, true);
  scaffolding.addEventListener('PROJECT_RUN_START', () => {
    if (!isLocked) {
      canvas.requestPointerLock();
    }
  });
  document.addEventListener('pointerlockchange', () => {
    isLocked = document.pointerLockElement === canvas;
  });
  document.addEventListener('pointerlockerror', e => {
    console.error('Pointer lock error', e);
  });

  vm.pointerLockMove = (deltaX, deltaY) => {
    postMouseData({
      // Essentially constructing a fake MouseEvent
      movementX: deltaX,
      movementY: deltaY
    });
  };

  const oldStep = vm.runtime._step;

  vm.runtime._step = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const ret = oldStep.call(this, ...args);
    const {
      width,
      height
    } = scaffolding.layersRect;
    mouse._clientX = width / 2;
    mouse._clientY = height / 2;
    mouse._scratchX = 0;
    mouse._scratchY = 0;
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (run);

/***/ }),

/***/ "./src/addons/special-cloud-behaviors.js":
/*!***********************************************!*\
  !*** ./src/addons/special-cloud-behaviors.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SAFE_PROTOCOLS = [// The only protocol that's critical to block is javascript:
// file: is indeed unsafe in places like Electron, but it's the Electron environment's job to protect against that
// Navigating between file: is safe on the web
'http:', 'https:', 'data:', 'file:', 'mailto:'];

const isSafeURL = url => {
  try {
    const u = new URL(url, location.href);
    return SAFE_PROTOCOLS.includes(u.protocol);
  } catch (e) {
    return false;
  }
};

const shouldAlwaysOpenInNewTab = url => {
  try {
    const u = new URL(url, location.href); // Browsers don't allow opening new tabs with data: URIs

    return u.protocol === 'data:';
  } catch (e) {
    return false;
  }
};

const shouldAlwaysOpenInCurrentTab = url => {
  try {
    const u = new URL(url, location.href); // If you open a mailto: in a new tab, the browser will convert it to about:blank and just leave an empty tab

    return u.protocol === 'mailto:';
  } catch (e) {
    return false;
  }
};

const openInNewTab = url => {
  window.open(url);
};

const openInCurrentTab = url => {
  location.href = url;
};

class SpecialCloudBehaviorsProvider {
  enable() {
    this.manager.setVariable(this, '☁ url', location.href);
    document.addEventListener('paste', e => {
      const text = (e.clipboardData || window.clipboardData).getData('text');
      this.manager.setVariable(this, '☁ pasted', text);
    });
    this.webSocketProvider = this.manager.providers.find(i => typeof i.setProjectId === 'function');
    this.initialProjectId = this.webSocketProvider ? this.webSocketProvider.projectId : null;
  }

  handleUpdateVariable(name, value) {
    if (name === '☁ redirect') {
      if (isSafeURL(value)) {
        if (shouldAlwaysOpenInNewTab(value)) {
          openInNewTab(value);
        } else {
          openInCurrentTab(value);
        }
      }
    } else if (name === '☁ open link') {
      if (isSafeURL(value)) {
        if (shouldAlwaysOpenInCurrentTab(value)) {
          openInCurrentTab(value);
        } else {
          openInNewTab(value);
        }
      }
    } else if (name === '☁ username') {
      this.manager.parent.setUsername(value);
    } else if (name === '☁ set clipboard') {
      navigator.clipboard.writeText(value);
    } else if (name === '☁ room id') {
      if (this.webSocketProvider) {
        const newId = this.initialProjectId + (value ? "-".concat(value) : '');
        this.webSocketProvider.setProjectId(newId);
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  let {
    scaffolding
  } = _ref;
  const provider = new SpecialCloudBehaviorsProvider();
  scaffolding.addCloudProvider(provider);
  scaffolding.addCloudProviderOverride('☁ url', provider);
  scaffolding.addCloudProviderOverride('☁ redirect', provider);
  scaffolding.addCloudProviderOverride('☁ open link', provider);
  scaffolding.addCloudProviderOverride('☁ username', provider);
  scaffolding.addCloudProviderOverride('☁ set clipboard', provider);
  scaffolding.addCloudProviderOverride('☁ pasted', provider);
  scaffolding.addCloudProviderOverride('☁ room id', provider);
});

/***/ }),

/***/ "./src/addons/unsafe-cloud-behaviors.js":
/*!**********************************************!*\
  !*** ./src/addons/unsafe-cloud-behaviors.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isPromise = v => !!v && typeof v.then === 'function';

const jsValueToScratchValue = v => {
  if (typeof v === 'boolean' || typeof v === 'number' || typeof v === 'string') {
    return v;
  }

  return '' + v;
};

class UnsafeCloudBehaviorsProvider {
  enable() {}

  setEvalValue(value) {
    this.manager.setVariable(this, '☁ eval output', jsValueToScratchValue(value));
  }

  setEvalError(error) {
    console.error('Error evaluating ☁ eval', error);
    this.manager.setVariable(this, '☁ eval error', jsValueToScratchValue(error));
  }

  evaluateAsync(js) {
    try {
      const value = eval(js);

      if (isPromise(value)) {
        value.then(v => this.setEvalValue(v)).catch(e => this.setEvalError(e));
      } else {
        this.setEvalValue(value);
      }
    } catch (e) {
      this.setEvalError(e);
    }
  }

  handleUpdateVariable(name, value) {
    if (name === '☁ eval') {
      this.evaluateAsync(value);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  let {
    scaffolding
  } = _ref;
  const provider = new UnsafeCloudBehaviorsProvider();
  scaffolding.addCloudProvider(provider);
  scaffolding.addCloudProviderOverride('☁ eval', provider);
  scaffolding.addCloudProviderOverride('☁ eval output', provider);
  scaffolding.addCloudProviderOverride('☁ eval error', provider);
});

/***/ }),

/***/ "./src/common/event-target.js":
/*!************************************!*\
  !*** ./src/common/event-target.js ***!
  \************************************/
/*! exports provided: EventTarget, CustomEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTargetShim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEvent", function() { return CustomEventShim; });
// Browser support for EventTarget constructor is surprisingly poor, so we always polyfill it
// We also need to polyfill CustomEvent for Node.js
class EventTargetShim {
  constructor() {
    this._events = {};
  }

  addEventListener(event, handler) {
    if (!this._events[event]) {
      this._events[event] = [];
    }

    this._events[event].push(handler);
  }

  removeEventListener(event, handler) {
    const handlers = this._events[event];

    if (handlers) {
      this._events[event] = handlers.filter(i => i !== handler);
    }
  }

  dispatchEvent(event) {
    const handlers = this._events[event.type];

    if (handlers) {
      for (const fn of handlers) {
        fn(event);
      }
    }
  }

}

class CustomEventShim {
  constructor(type, options) {
    this.type = type;
    this.detail = options ? options.detail : {};
  }

}



/***/ })

/******/ });
//# sourceMappingURL=addons.js.map