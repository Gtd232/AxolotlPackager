/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"p4": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"packager-options-ui":"packager-options-ui","vendors~icns~jszip~sha256":"vendors~icns~jszip~sha256","sha256":"sha256","vendors~icns~jszip":"vendors~icns~jszip","icns":"icns","jszip":"jszip"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/p4/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/comlink/dist/esm/comlink.mjs":
/*!***************************************************!*\
  !*** ./node_modules/comlink/dist/esm/comlink.mjs ***!
  \***************************************************/
/*! exports provided: createEndpoint, expose, proxy, proxyMarker, releaseProxy, transfer, transferHandlers, windowEndpoint, wrap */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEndpoint", function() { return createEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expose", function() { return expose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyMarker", function() { return proxyMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseProxy", function() { return releaseProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transfer", function() { return transfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferHandlers", function() { return transferHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowEndpoint", function() { return windowEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val) => (typeof val === "object" && val !== null) || typeof val === "function";
/**
 * Internal transfer handle to handle objects marked to proxy.
 */
const proxyTransferHandler = {
    canHandle: (val) => isObject(val) && val[proxyMarker],
    serialize(obj) {
        const { port1, port2 } = new MessageChannel();
        expose(obj, port1);
        return [port2, [port2]];
    },
    deserialize(port) {
        port.start();
        return wrap(port);
    },
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */
const throwTransferHandler = {
    canHandle: (value) => isObject(value) && throwMarker in value,
    serialize({ value }) {
        let serialized;
        if (value instanceof Error) {
            serialized = {
                isError: true,
                value: {
                    message: value.message,
                    name: value.name,
                    stack: value.stack,
                },
            };
        }
        else {
            serialized = { isError: false, value };
        }
        return [serialized, []];
    },
    deserialize(serialized) {
        if (serialized.isError) {
            throw Object.assign(new Error(serialized.value.message), serialized.value);
        }
        throw serialized.value;
    },
};
/**
 * Allows customizing the serialization of certain values.
 */
const transferHandlers = new Map([
    ["proxy", proxyTransferHandler],
    ["throw", throwTransferHandler],
]);
function expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
            return;
        }
        const { id, type, path } = Object.assign({ path: [] }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
            switch (type) {
                case "GET" /* GET */:
                    {
                        returnValue = rawValue;
                    }
                    break;
                case "SET" /* SET */:
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;
                case "APPLY" /* APPLY */:
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;
                case "CONSTRUCT" /* CONSTRUCT */:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* ENDPOINT */:
                    {
                        const { port1, port2 } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [port1]);
                    }
                    break;
                case "RELEASE" /* RELEASE */:
                    {
                        returnValue = undefined;
                    }
                    break;
                default:
                    return;
            }
        }
        catch (value) {
            returnValue = { value, [throwMarker]: 0 };
        }
        Promise.resolve(returnValue)
            .catch((value) => {
            return { value, [throwMarker]: 0 };
        })
            .then((returnValue) => {
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
            if (type === "RELEASE" /* RELEASE */) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
            }
        });
    });
    if (ep.start) {
        ep.start();
    }
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.close();
}
function wrap(ep, target) {
    return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
    }
}
function createProxy(ep, path = [], target = function () { }) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get(_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) {
                return () => {
                    return requestResponseMessage(ep, {
                        type: "RELEASE" /* RELEASE */,
                        path: path.map((p) => p.toString()),
                    }).then(() => {
                        closeEndPoint(ep);
                        isProxyReleased = true;
                    });
                };
            }
            if (prop === "then") {
                if (path.length === 0) {
                    return { then: () => proxy };
                }
                const r = requestResponseMessage(ep, {
                    type: "GET" /* GET */,
                    path: path.map((p) => p.toString()),
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [...path, prop]);
        },
        set(_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: "SET" /* SET */,
                path: [...path, prop].map((p) => p.toString()),
                value,
            }, transferables).then(fromWireValue);
        },
        apply(_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) {
                return requestResponseMessage(ep, {
                    type: "ENDPOINT" /* ENDPOINT */,
                }).then(fromWireValue);
            }
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") {
                return createProxy(ep, path.slice(0, -1));
            }
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "APPLY" /* APPLY */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
        construct(_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "CONSTRUCT" /* CONSTRUCT */,
                path: path.map((p) => p.toString()),
                argumentList,
            }, transferables).then(fromWireValue);
        },
    });
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
}
function windowEndpoint(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context),
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
            const [serializedValue, transferables] = handler.serialize(value);
            return [
                {
                    type: "HANDLER" /* HANDLER */,
                    name,
                    value: serializedValue,
                },
                transferables,
            ];
        }
    }
    return [
        {
            type: "RAW" /* RAW */,
            value,
        },
        transferCache.get(value) || [],
    ];
}
function fromWireValue(value) {
    switch (value.type) {
        case "HANDLER" /* HANDLER */:
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* RAW */:
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve) => {
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) {
                return;
            }
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) {
            ep.start();
        }
        ep.postMessage(Object.assign({ id }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}


//# sourceMappingURL=comlink.mjs.map


/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/p4/sw.js":
/*!************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/p4/sw.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "sw.js");

/***/ }),

/***/ "./node_modules/svelte/easing/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/svelte/easing/index.mjs ***!
  \**********************************************/
/*! exports provided: linear, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, cubicIn, cubicInOut, cubicOut, elasticIn, elasticInOut, elasticOut, expoIn, expoInOut, expoOut, quadIn, quadInOut, quadOut, quartIn, quartInOut, quartOut, quintIn, quintInOut, quintOut, sineIn, sineInOut, sineOut */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoIn", function() { return expoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoInOut", function() { return expoInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoOut", function() { return expoOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartIn", function() { return quartIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartInOut", function() { return quartInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartOut", function() { return quartOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintIn", function() { return quintIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintInOut", function() { return quintInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintOut", function() { return quintOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineIn", function() { return sineIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineInOut", function() { return sineInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineOut", function() { return sineOut; });
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["identity"]; });



/*
Adapted from https://github.com/mattdesl
Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
*/
function backInOut(t) {
    const s = 1.70158 * 1.525;
    if ((t *= 2) < 1)
        return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function backIn(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
}
function backOut(t) {
    const s = 1.70158;
    return --t * t * ((s + 1) * t + s) + 1;
}
function bounceOut(t) {
    const a = 4.0 / 11.0;
    const b = 8.0 / 11.0;
    const c = 9.0 / 10.0;
    const ca = 4356.0 / 361.0;
    const cb = 35442.0 / 1805.0;
    const cc = 16061.0 / 1805.0;
    const t2 = t * t;
    return t < a
        ? 7.5625 * t2
        : t < b
            ? 9.075 * t2 - 9.9 * t + 3.4
            : t < c
                ? ca * t2 - cb * t + cc
                : 10.8 * t * t - 20.52 * t + 10.72;
}
function bounceInOut(t) {
    return t < 0.5
        ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
        : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}
function bounceIn(t) {
    return 1.0 - bounceOut(1.0 - t);
}
function circInOut(t) {
    if ((t *= 2) < 1)
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function circIn(t) {
    return 1.0 - Math.sqrt(1.0 - t * t);
}
function circOut(t) {
    return Math.sqrt(1 - --t * t);
}
function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
function elasticInOut(t) {
    return t < 0.5
        ? 0.5 *
            Math.sin(((+13.0 * Math.PI) / 2) * 2.0 * t) *
            Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
        : 0.5 *
            Math.sin(((-13.0 * Math.PI) / 2) * (2.0 * t - 1.0 + 1.0)) *
            Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) +
            1.0;
}
function elasticIn(t) {
    return Math.sin((13.0 * t * Math.PI) / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}
function elasticOut(t) {
    return (Math.sin((-13.0 * (t + 1.0) * Math.PI) / 2) * Math.pow(2.0, -10.0 * t) + 1.0);
}
function expoInOut(t) {
    return t === 0.0 || t === 1.0
        ? t
        : t < 0.5
            ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
}
function expoIn(t) {
    return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}
function expoOut(t) {
    return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}
function quadInOut(t) {
    t /= 0.5;
    if (t < 1)
        return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
}
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return -t * (t - 2.0);
}
function quartInOut(t) {
    return t < 0.5
        ? +8.0 * Math.pow(t, 4.0)
        : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}
function quartIn(t) {
    return Math.pow(t, 4.0);
}
function quartOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}
function quintInOut(t) {
    if ((t *= 2) < 1)
        return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function quintIn(t) {
    return t * t * t * t * t;
}
function quintOut(t) {
    return --t * t * t * t * t + 1;
}
function sineInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function sineIn(t) {
    const v = Math.cos(t * Math.PI * 0.5);
    if (Math.abs(v) < 1e-14)
        return 1;
    else
        return 1 - v;
}
function sineOut(t) {
    return Math.sin((t * Math.PI) / 2);
}




/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: SvelteComponent, SvelteComponentTyped, afterUpdate, beforeUpdate, createEventDispatcher, getAllContexts, getContext, hasContext, onDestroy, onMount, setContext, tick */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentTyped", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentTyped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllContexts", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["getAllContexts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasContext", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["hasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["tick"]; });




/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/*! exports provided: HtmlTag, HtmlTagHydration, SvelteComponent, SvelteComponentDev, SvelteComponentTyped, SvelteElement, action_destroyer, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_styles, add_transform, afterUpdate, append, append_dev, append_empty_stylesheet, append_hydration, append_hydration_dev, append_styles, assign, attr, attr_dev, attribute_to_object, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_component, claim_element, claim_html_tag, claim_space, claim_svg_element, claim_text, clear_loops, component_subscribe, compute_rest_props, compute_slots, createEventDispatcher, create_animation, create_bidirectional_transition, create_component, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, dataset_dev, debug, destroy_block, destroy_component, destroy_each, detach, detach_after_dev, detach_before_dev, detach_between_dev, detach_dev, dirty_components, dispatch_dev, each, element, element_is, empty, end_hydrating, escape, escape_attribute_value, escape_object, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getAllContexts, getContext, get_all_dirty_from_scope, get_binding_group_value, get_current_component, get_custom_elements_slots, get_root_for_style, get_slot_changes, get_spread_object, get_spread_update, get_store_value, globals, group_outros, handle_promise, hasContext, has_prop, identity, init, insert, insert_dev, insert_hydration, insert_hydration_dev, intros, invalid_attribute_name_character, is_client, is_crossorigin, is_empty, is_function, is_promise, is_void, listen, listen_dev, loop, loop_guard, merge_ssr_styles, missing_component, mount_component, noop, not_equal, now, null_to_empty, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, prop_dev, query_selector_all, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, self, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_data_dev, set_input_type, set_input_value, set_now, set_raf, set_store_value, set_style, set_svg_attributes, space, spread, src_url_equal, start_hydrating, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, trusted, update_await_block_branch, update_keyed_each, update_slot, update_slot_base, validate_component, validate_dynamic_element, validate_each_argument, validate_each_keys, validate_slots, validate_store, validate_void_dynamic_element, xlink_attr */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return HtmlTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlTagHydration", function() { return HtmlTagHydration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentTyped", function() { return SvelteComponentTyped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action_destroyer", function() { return action_destroyer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_styles", function() { return add_styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_dev", function() { return append_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_empty_stylesheet", function() { return append_empty_stylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_hydration", function() { return append_hydration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_hydration_dev", function() { return append_hydration_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_styles", function() { return append_styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr_dev", function() { return attr_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attribute_to_object", function() { return attribute_to_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_component", function() { return claim_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_html_tag", function() { return claim_html_tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_space", function() { return claim_space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_svg_element", function() { return claim_svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component_subscribe", function() { return component_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute_rest_props", function() { return compute_rest_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute_slots", function() { return compute_slots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_component", function() { return create_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset_dev", function() { return dataset_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after_dev", function() { return detach_after_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before_dev", function() { return detach_before_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between_dev", function() { return detach_between_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_dev", function() { return detach_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch_dev", function() { return dispatch_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_is", function() { return element_is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end_hydrating", function() { return end_hydrating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape_attribute_value", function() { return escape_attribute_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape_object", function() { return escape_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllContexts", function() { return getAllContexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all_dirty_from_scope", function() { return get_all_dirty_from_scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_current_component", function() { return get_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_custom_elements_slots", function() { return get_custom_elements_slots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_root_for_style", function() { return get_root_for_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_object", function() { return get_spread_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasContext", function() { return hasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has_prop", function() { return has_prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_dev", function() { return insert_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_hydration", function() { return insert_hydration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert_hydration_dev", function() { return insert_hydration_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_crossorigin", function() { return is_crossorigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_empty", function() { return is_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_void", function() { return is_void; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen_dev", function() { return listen_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop_guard", function() { return loop_guard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge_ssr_styles", function() { return merge_ssr_styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_empty", function() { return null_to_empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop_dev", function() { return prop_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query_selector_all", function() { return query_selector_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data_dev", function() { return set_data_dev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_value", function() { return set_input_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_store_value", function() { return set_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_svg_attributes", function() { return set_svg_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "src_url_equal", function() { return src_url_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start_hydrating", function() { return start_hydrating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trusted", function() { return trusted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_await_block_branch", function() { return update_await_block_branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_slot", function() { return update_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_slot_base", function() { return update_slot_base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_dynamic_element", function() { return validate_dynamic_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_each_argument", function() { return validate_each_argument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_each_keys", function() { return validate_each_keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_slots", function() { return validate_slots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_void_dynamic_element", function() { return validate_void_dynamic_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement('a');
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
function compute_slots(slots) {
    const result = {};
    for (const key in slots) {
        result[key] = true;
    }
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
}
const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * For testing purposes only!
 */
function clear_loops() {
    tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;
function start_hydrating() {
    is_hydrating = true;
}
function end_hydrating() {
    is_hydrating = false;
}
function upper_bound(low, high, key, value) {
    // Return first index of value larger than input value in the range [low, high)
    while (low < high) {
        const mid = low + ((high - low) >> 1);
        if (key(mid) <= value) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return low;
}
function init_hydrate(target) {
    if (target.hydrate_init)
        return;
    target.hydrate_init = true;
    // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>
    let children = target.childNodes;
    // If target is <head>, there may be children without claim_order
    if (target.nodeName === 'HEAD') {
        const myChildren = [];
        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (node.claim_order !== undefined) {
                myChildren.push(node);
            }
        }
        children = myChildren;
    }
    /*
    * Reorder claimed children optimally.
    * We can reorder claimed children optimally by finding the longest subsequence of
    * nodes that are already claimed in order and only moving the rest. The longest
    * subsequence subsequence of nodes that are claimed in order can be found by
    * computing the longest increasing subsequence of .claim_order values.
    *
    * This algorithm is optimal in generating the least amount of reorder operations
    * possible.
    *
    * Proof:
    * We know that, given a set of reordering operations, the nodes that do not move
    * always form an increasing subsequence, since they do not move among each other
    * meaning that they must be already ordered among each other. Thus, the maximal
    * set of nodes that do not move form a longest increasing subsequence.
    */
    // Compute longest increasing subsequence
    // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
    const m = new Int32Array(children.length + 1);
    // Predecessor indices + 1
    const p = new Int32Array(children.length);
    m[0] = -1;
    let longest = 0;
    for (let i = 0; i < children.length; i++) {
        const current = children[i].claim_order;
        // Find the largest subsequence length such that it ends in a value less than our current value
        // upper_bound returns first greater value, so we subtract one
        // with fast path for when we are on the current longest subsequence
        const seqLen = ((longest > 0 && children[m[longest]].claim_order <= current) ? longest + 1 : upper_bound(1, longest, idx => children[m[idx]].claim_order, current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
        m[newLen] = i;
        longest = Math.max(newLen, longest);
    }
    // The longest increasing subsequence of nodes (initially reversed)
    const lis = [];
    // The rest of the nodes, nodes that will be moved
    const toMove = [];
    let last = children.length - 1;
    for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
        lis.push(children[cur - 1]);
        for (; last >= cur; last--) {
            toMove.push(children[last]);
        }
        last--;
    }
    for (; last >= 0; last--) {
        toMove.push(children[last]);
    }
    lis.reverse();
    // We sort the nodes being moved to guarantee that their insertion order matches the claim order
    toMove.sort((a, b) => a.claim_order - b.claim_order);
    // Finally, we move the nodes
    for (let i = 0, j = 0; i < toMove.length; i++) {
        while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
            j++;
        }
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i], anchor);
    }
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function append_hydration(target, node) {
    if (is_hydrating) {
        init_hydrate(target);
        if ((target.actual_end_child === undefined) || ((target.actual_end_child !== null) && (target.actual_end_child.parentElement !== target))) {
            target.actual_end_child = target.firstChild;
        }
        // Skip nodes of undefined ordering
        while ((target.actual_end_child !== null) && (target.actual_end_child.claim_order === undefined)) {
            target.actual_end_child = target.actual_end_child.nextSibling;
        }
        if (node !== target.actual_end_child) {
            // We only insert if the ordering of this node should be modified or the parent node is not target
            if (node.claim_order !== undefined || node.parentNode !== target) {
                target.insertBefore(node, target.actual_end_child);
            }
        }
        else {
            target.actual_end_child = node.nextSibling;
        }
    }
    else if (node.parentNode !== target || node.nextSibling !== null) {
        target.appendChild(node);
    }
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function insert_hydration(target, node, anchor) {
    if (is_hydrating && !anchor) {
        append_hydration(target, node);
    }
    else if (node.parentNode !== target || node.nextSibling != anchor) {
        target.insertBefore(node, anchor || null);
    }
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    const target = {};
    for (const k in obj) {
        if (has_prop(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function trusted(fn) {
    return function (event) {
        // @ts-ignore
        if (event.isTrusted)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group, __value, checked) {
    const value = new Set();
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.add(group[i].__value);
    }
    if (!checked) {
        value.delete(__value);
    }
    return Array.from(value);
}
function to_number(value) {
    return value === '' ? null : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function init_claim_info(nodes) {
    if (nodes.claim_info === undefined) {
        nodes.claim_info = { last_index: 0, total_claimed: 0 };
    }
}
function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
    // Try to find nodes in an order such that we lengthen the longest increasing subsequence
    init_claim_info(nodes);
    const resultNode = (() => {
        // We first try to find an element after the previous one
        for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                return node;
            }
        }
        // Otherwise, we try to find one before
        // We iterate in reverse so that we don't go too far back
        for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) {
                    nodes.splice(i, 1);
                }
                else {
                    nodes[i] = replacement;
                }
                if (!dontUpdateLastIndex) {
                    nodes.claim_info.last_index = i;
                }
                else if (replacement === undefined) {
                    // Since we spliced before the last_index, we decrease it
                    nodes.claim_info.last_index--;
                }
                return node;
            }
        }
        // If we can't find any matching node, we create a new one
        return createNode();
    })();
    resultNode.claim_order = nodes.claim_info.total_claimed;
    nodes.claim_info.total_claimed += 1;
    return resultNode;
}
function claim_element_base(nodes, name, attributes, create_element) {
    return claim_node(nodes, (node) => node.nodeName === name, (node) => {
        const remove = [];
        for (let j = 0; j < node.attributes.length; j++) {
            const attribute = node.attributes[j];
            if (!attributes[attribute.name]) {
                remove.push(attribute.name);
            }
        }
        remove.forEach(v => node.removeAttribute(v));
        return undefined;
    }, () => create_element(name));
}
function claim_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, element);
}
function claim_svg_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, svg_element);
}
function claim_text(nodes, data) {
    return claim_node(nodes, (node) => node.nodeType === 3, (node) => {
        const dataStr = '' + data;
        if (node.data.startsWith(dataStr)) {
            if (node.data.length !== dataStr.length) {
                return node.splitText(dataStr.length);
            }
        }
        else {
            node.data = dataStr;
        }
    }, () => text(data), true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
    );
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function find_comment(nodes, text, start) {
    for (let i = start; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 8 /* comment node */ && node.textContent.trim() === text) {
            return i;
        }
    }
    return nodes.length;
}
function claim_html_tag(nodes, is_svg) {
    // find html opening tag
    const start_index = find_comment(nodes, 'HTML_TAG_START', 0);
    const end_index = find_comment(nodes, 'HTML_TAG_END', start_index);
    if (start_index === end_index) {
        return new HtmlTagHydration(undefined, is_svg);
    }
    init_claim_info(nodes);
    const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
    detach(html_tag_nodes[0]);
    detach(html_tag_nodes[html_tag_nodes.length - 1]);
    const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
    for (const n of claimed_nodes) {
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
    }
    return new HtmlTagHydration(claimed_nodes, is_svg);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    if (value === null) {
        node.style.removeProperty(key);
    }
    else {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    select.selectedIndex = -1; // no option should be selected
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
    if (crossorigin === undefined) {
        crossorigin = false;
        try {
            if (typeof window !== 'undefined' && window.parent) {
                void window.parent.document;
            }
        }
        catch (error) {
            crossorigin = true;
        }
    }
    return crossorigin;
}
function add_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    if (computed_style.position === 'static') {
        node.style.position = 'relative';
    }
    const iframe = element('iframe');
    iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
        'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    const crossorigin = is_crossorigin();
    let unsubscribe;
    if (crossorigin) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, 'message', (event) => {
            if (event.source === iframe.contentWindow)
                fn();
        });
    }
    else {
        iframe.src = 'about:blank';
        iframe.onload = () => {
            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
        };
    }
    append(node, iframe);
    return () => {
        if (crossorigin) {
            unsubscribe();
        }
        else if (unsubscribe && iframe.contentWindow) {
            unsubscribe();
        }
        detach(iframe);
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
class HtmlTag {
    constructor(is_svg = false) {
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
    }
    c(html) {
        this.h(html);
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            if (this.is_svg)
                this.e = svg_element(target.nodeName);
            else
                this.e = element(target.nodeName);
            this.t = target;
            this.c(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}
class HtmlTagHydration extends HtmlTag {
    constructor(claimed_nodes, is_svg = false) {
        super(is_svg);
        this.e = this.n = null;
        this.l = claimed_nodes;
    }
    c(html) {
        if (this.l) {
            this.n = this.l;
        }
        else {
            super.c(html);
        }
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert_hydration(this.t, this.n[i], anchor);
        }
    }
}
function attribute_to_object(attributes) {
    const result = {};
    for (const attribute of attributes) {
        result[attribute.name] = attribute.value;
    }
    return result;
}
function get_custom_elements_slots(element) {
    const result = {};
    element.childNodes.forEach((node) => {
        result[node.slot || 'default'] = true;
    });
    return result;
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        managed_styles.forEach(info => {
            const { stylesheet } = info;
            let i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            info.rules = {};
        });
        managed_styles.clear();
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
    return context;
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
function getAllContexts() {
    return get_current_component().$$.context;
}
function hasContext(key) {
    return get_current_component().$$.context.has(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        // @ts-ignore
        callbacks.slice().forEach(fn => fn.call(this, event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
    else if (callback) {
        callback();
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            started = true;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = (program.b - t);
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            if (info.blocks[i] === block) {
                                info.blocks[i] = null;
                            }
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
        if (needs_flush) {
            flush();
        }
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
            if (!info.hasCatch) {
                throw error;
            }
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}
function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved } = info;
    if (info.current === info.then) {
        child_ctx[info.value] = resolved;
    }
    if (info.current === info.catch) {
        child_ctx[info.error] = resolved;
    }
    info.block.p(child_ctx, dirty);
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) {
            throw new Error('Cannot have duplicate keys in a keyed each');
        }
        keys.add(key);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
    return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, attrs_to_add) {
    const attributes = Object.assign({}, ...args);
    if (attrs_to_add) {
        const classes_to_add = attrs_to_add.classes;
        const styles_to_add = attrs_to_add.styles;
        if (classes_to_add) {
            if (attributes.class == null) {
                attributes.class = classes_to_add;
            }
            else {
                attributes.class += ' ' + classes_to_add;
            }
        }
        if (styles_to_add) {
            if (attributes.style == null) {
                attributes.style = style_object_to_string(styles_to_add);
            }
            else {
                attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
            }
        }
    }
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === true)
            str += ' ' + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value)
                str += ' ' + name;
        }
        else if (value != null) {
            str += ` ${name}="${value}"`;
        }
    });
    return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
    const style_object = {};
    for (const individual_style of style_attribute.split(';')) {
        const colon_index = individual_style.indexOf(':');
        const name = individual_style.slice(0, colon_index).trim();
        const value = individual_style.slice(colon_index + 1).trim();
        if (!name)
            continue;
        style_object[name] = value;
    }
    for (const name in style_directive) {
        const value = style_directive[name];
        if (value) {
            style_object[name] = value;
        }
        else {
            delete style_object[name];
        }
    }
    return style_object;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
function escape_attribute_value(value) {
    // keep booleans, null, and undefined for the sake of `spread`
    const should_escape = typeof value === 'string' || (value && typeof value === 'object');
    return should_escape ? escape(value, true) : value;
}
function escape_object(obj) {
    const result = {};
    for (const key in obj) {
        result[key] = escape_attribute_value(obj[key]);
    }
    return result;
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape(value, true)}"`;
    return ` ${name}${assignment}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : '';
}
function style_object_to_string(style_object) {
    return Object.keys(style_object)
        .filter(key => style_object[key])
        .map(key => `${key}: ${style_object[key]};`)
        .join(' ');
}
function add_styles(style_object) {
    const styles = style_object_to_string(style_object);
    return styles ? ` style="${styles}"` : '';
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            start_hydrating();
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            const { on_mount } = this.$$;
            this.$$.on_disconnect = on_mount.map(run).filter(is_function);
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        disconnectedCallback() {
            run_all(this.$$.on_disconnect);
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    };
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.49.0' }, detail), { bubbles: true }));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
}
function append_hydration_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append_hydration(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function insert_hydration_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert_hydration(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else
        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev('SvelteDOMSetProperty', { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev('SvelteDOMSetDataset', { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data)
        return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
function validate_dynamic_element(tag) {
    const is_string = typeof tag === 'string';
    if (tag && !is_string) {
        throw new Error('<svelte:element> expects "this" attribute to be a string.');
    }
}
function validate_void_dynamic_element(tag) {
    if (tag && is_void(tag)) {
        throw new Error(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
    }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */
class SvelteComponentTyped extends SvelteComponentDev {
    constructor(options) {
        super(options);
    }
}
function loop_guard(timeout) {
    const start = Date.now();
    return () => {
        if (Date.now() - start > timeout) {
            throw new Error('Infinite loop detected');
        }
    };
}




/***/ }),

/***/ "./node_modules/svelte/store/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/svelte/store/index.mjs ***!
  \*********************************************/
/*! exports provided: get, derived, readable, writable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return derived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readable", function() { return readable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writable", function() { return writable; });
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["get_store_value"]; });




const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
        if (Object(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"])(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                    subscriber[1]();
                    subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
        const subscriber = [run, invalidate];
        subscribers.add(subscriber);
        if (subscribers.size === 1) {
            stop = start(set) || _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["noop"];
        }
        run(value);
        return () => {
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["noop"];
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = Object(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["is_function"])(result) ? result : _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["noop"];
            }
        };
        const unsubscribers = stores_array.map((store, i) => Object(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["subscribe"])(store, (value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            Object(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__["run_all"])(unsubscribers);
            cleanup();
        };
    });
}




/***/ }),

/***/ "./node_modules/svelte/transition/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/svelte/transition/index.mjs ***!
  \**************************************************/
/*! exports provided: blur, crossfade, draw, fade, fly, scale, slide */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fly", function() { return fly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony import */ var _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easing/index.mjs */ "./node_modules/svelte/easing/index.mjs");
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function blur(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cubicInOut"], amount = 5, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const f = style.filter === 'none' ? '' : style.filter;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `opacity: ${target_opacity - (od * u)}; filter: ${f} blur(${u * amount}px);`
    };
}
function fade(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__["linear"] } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}
function fly(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cubicOut"], x = 0, y = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
    };
}
function slide(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cubicOut"] } = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const height = parseFloat(style.height);
    const padding_top = parseFloat(style.paddingTop);
    const padding_bottom = parseFloat(style.paddingBottom);
    const margin_top = parseFloat(style.marginTop);
    const margin_bottom = parseFloat(style.marginBottom);
    const border_top_width = parseFloat(style.borderTopWidth);
    const border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
        delay,
        duration,
        easing,
        css: t => 'overflow: hidden;' +
            `opacity: ${Math.min(t * 20, 1) * opacity};` +
            `height: ${t * height}px;` +
            `padding-top: ${t * padding_top}px;` +
            `padding-bottom: ${t * padding_bottom}px;` +
            `margin-top: ${t * margin_top}px;` +
            `margin-bottom: ${t * margin_bottom}px;` +
            `border-top-width: ${t * border_top_width}px;` +
            `border-bottom-width: ${t * border_bottom_width}px;`
    };
}
function scale(node, { delay = 0, duration = 400, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cubicOut"], start = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const sd = 1 - start;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `
			transform: ${transform} scale(${1 - (sd * u)});
			opacity: ${target_opacity - (od * u)}
		`
    };
}
function draw(node, { delay = 0, speed, duration, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cubicInOut"] } = {}) {
    let len = node.getTotalLength();
    const style = getComputedStyle(node);
    if (style.strokeLinecap !== 'butt') {
        len += parseInt(style.strokeWidth);
    }
    if (duration === undefined) {
        if (speed === undefined) {
            duration = 800;
        }
        else {
            duration = len / speed;
        }
    }
    else if (typeof duration === 'function') {
        duration = duration(len);
    }
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
    };
}
function crossfade(_a) {
    var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
    const to_receive = new Map();
    const to_send = new Map();
    function crossfade(from, node, params) {
        const { delay = 0, duration = d => Math.sqrt(d) * 30, easing = _easing_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cubicOut"] } = Object(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, defaults), params);
        const to = node.getBoundingClientRect();
        const dx = from.left - to.left;
        const dy = from.top - to.top;
        const dw = from.width / to.width;
        const dh = from.height / to.height;
        const d = Math.sqrt(dx * dx + dy * dy);
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        const opacity = +style.opacity;
        return {
            delay,
            duration: Object(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_1__["is_function"])(duration) ? duration(d) : duration,
            easing,
            css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
        };
    }
    function transition(items, counterparts, intro) {
        return (node, params) => {
            items.set(params.key, {
                rect: node.getBoundingClientRect()
            });
            return () => {
                if (counterparts.has(params.key)) {
                    const { rect } = counterparts.get(params.key);
                    counterparts.delete(params.key);
                    return crossfade(rect, node, params);
                }
                // if the node is disappearing altogether
                // (i.e. wasn't claimed by the other list)
                // then we need to supply an outro
                items.delete(params.key);
                return fallback && fallback(node, params, intro);
            };
        };
    }
    return [
        transition(to_send, to_receive, false),
        transition(to_receive, to_send, true)
    ];
}




/***/ }),

/***/ "./src/build/p4-worker-loader.js!./src/packager/download-project.js":
/*!**************************************************************************!*\
  !*** ./src/build/p4-worker-loader.js!./src/packager/download-project.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "./node_modules/comlink/dist/esm/comlink.mjs");

    
    const createWorker = () => {
      
        const worker = new Worker(__webpack_require__.p + "js/download-project.worker.js");
      
      return new Promise((resolve, reject) => {
        const terminate = () => {
          worker.terminate();
        };
        const onMessage = (e) => {
          if (e.data === 'ready') {
            cleanup();
            resolve({
              worker: Object(comlink__WEBPACK_IMPORTED_MODULE_0__["wrap"])(worker),
              terminate
            });
          }
        };
        const onError = () => {
          cleanup();
          reject(new Error("Worker js/download-project.worker.js failed to load."));
        };
        const cleanup = () => {
          worker.removeEventListener('message', onMessage);
          worker.removeEventListener('error', onError);
        };
        worker.addEventListener('message', onMessage);
        worker.addEventListener('error', onError);
      });
    };
    /* harmony default export */ __webpack_exports__["default"] = (createWorker);
    

/***/ }),

/***/ "./src/build/unstructure-translations-loader.js!./src/locales/en.json":
/*!****************************************************************************!*\
  !*** ./src/build/unstructure-translations-loader.js!./src/locales/en.json ***!
  \****************************************************************************/
/*! exports provided: p4, progress, select, options, downloads, fileInput, theme, reset, preview, import, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"p4\":{\"description1\":\"Converts Scratch projects into HTML files, zip archives, or executable programs for Windows, macOS, and Linux.\",\"description2\":\"If you just want an easy way to embed a project into your website, you may be interested in {embedding}.\",\"description2-embedding\":\"Embedding\",\"description3\":\"Report bugs, give feedback, and suggest ideas {onScratch} or {onGitHub}.\",\"disclaimer\":\"This site is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.\",\"description3-on\":\"on {brand}\",\"error\":\"Error\",\"errorMessage\":\"Message: {error}\",\"networkError\":\"Couldn't download {url}. Make sure you're connected to the internet and try disabling any browser extensions.\",\"outdated\":\"This version of the packager appears to be outdated. Please refresh and try again.\",\"cannotAccessProject\":\"Can't access project metadata. This probably means the project is unshared, never existed, or the ID is invalid.\",\"cannotAccessProjectCaching\":\"If the project was shared recently, it may take up to an hour for this message to go away.\",\"close\":\"Close\",\"refresh\":\"Refresh\",\"browserNotSupported\":\"Browser not supported\",\"browserNotSupportedDescription\":\"Please update your browser.\",\"importingInterface\":\"Loading options...\",\"unknownImportError\":\"Something went wrong. Please refresh and try again.\",\"reportBug\":\"Report Bug\",\"privacy\":\"Privacy Policy\",\"feedback\":\"Feedback\",\"sourceCode\":\"Source Code\",\"donate\":\"Donate\",\"documentation\":\"Additional resources and help\",\"fosshost\":\"Thank you to Fosshost for providing servers used by the packager\"},\"progress\":{\"loadingAssets\":\"Downloading assets ({complete}/{total})\",\"compressingProject\":\"Compressing project\",\"loadingProjectMetadata\":\"Downloading project metadata\",\"loadingProjectData\":\"Downloading project data\",\"packagingProject\":\"Packaging project\",\"loadingLargeAsset\":\"Downloading {thing}\",\"loadingScripts\":\"Downloading scripts\"},\"select\":{\"select\":\"Select Project\",\"selectHelp\":\"Select the project you want to package by copying and pasting the Scratch project link or using one of the other modes. If you use a project you didn't make, make sure to credit the creator.\",\"id\":\"Scratch Project ID or URL\",\"file\":\"File\",\"url\":\"Other URL\",\"loadProject\":\"Load Project\",\"loadToContinue\":\"Load a project to continue\",\"invalidId\":\"Invalid project ID\",\"invalidUrl\":\"Invalid URL\",\"noFileSelected\":\"No file selected\",\"unsharedProjects\":\"Unshared projects are no longer accessible using their project ID due to Scratch API changes.\",\"unsharedProjectsTemporary\":\"Unshared projects will no longer be accessible using just their project ID at some point in the future due to upcoming Scratch API changes.\",\"unsharedProjectsWorkaround\":\"Instead, you can either share the project or save the project to your computer (File > Save to your computer) and load the file in the packager. Files generated by the packager are fully self contained and not affected by these changes.\",\"unsharedProjectsMore\":\"For more information, visit: {link}\"},\"options\":{\"learnMore\":\"Learn more\",\"runtimeOptions\":\"Runtime Options\",\"storedWarning\":\"Note: This project has settings stored in it, which may override these settings.\",\"turbo\":\"Turbo Mode\",\"framerate\":\"Framerate\",\"interpolation\":\"Interpolation\",\"highQualityPen\":\"High Quality Pen\",\"infiniteClones\":\"Infinite Clones\",\"removeFencing\":\"Remove Fencing\",\"removeMiscLimits\":\"Remove Miscellaneous Limits\",\"stage\":\"Stage\",\"stageSize\":\"Custom Stage Size\",\"preserveRatio\":\"Preserve aspect ratio when resized (recommended)\",\"stretch\":\"Stretch stage to fill screen without changing actual size (experimental)\",\"dynamicResize\":\"Dynamically resize size to match window size (experimental)\",\"username\":\"Username (each \\\"#\\\" gets replaced with a random number)\",\"customUsernameWarning\":\"Be careful when changing the default username as it can cause connections to the default cloud variable server to be blocked. Only the default username is guaranteed to work.\",\"closeWhenStopped\":\"Close window when project stops\",\"autoplay\":\"Start project automatically instead of showing a big green flag\",\"autoplayHint\":\"Note: Many browsers will not allow websites to automatically play sound, so sounds might not play until the user interacts with the project.\",\"playerOptions\":\"Player Options\",\"pageTitle\":\"Page title\",\"loadingScreen\":\"Loading Screen\",\"showProgressBar\":\"Show progress bar\",\"loadingScreenText\":\"Loading screen text\",\"loadingScreenImage\":\"Loading screen image\",\"sizeNormal\":\"Display at normal size\",\"sizeStretch\":\"Fill screen\",\"loadingScreenTextPlaceholder\":\"(Nothing)\",\"icon\":\"Page icon\",\"controls\":\"Controls\",\"showFlag\":\"Show green flag button in controls\",\"showStop\":\"Show stop sign button in controls\",\"showFullscreen\":\"Show fullscreen button in controls\",\"showPause\":\"Show pause button in controls\",\"accentColor\":\"Accent color (active/hovered controls, ask prompt, context menus)\",\"controlsHelp\":\"If all controls are disabled, the controls bar is removed entirely. If only fullscreen is enabled, it will always be located in the top left corner, not in the controls header.\",\"colors\":\"Colors\",\"backgroundColor\":\"Background color\",\"foregroundColor\":\"Foreground color (progress bar, some icons, some text)\",\"monitors\":\"Monitors\",\"editableLists\":\"Editable lists\",\"variableColor\":\"Variable color\",\"listColor\":\"List color\",\"interaction\":\"Input\",\"normalCursor\":\"Normal cursor\",\"noCursor\":\"No cursor\",\"customCursor\":\"Custom cursor\",\"cursorCenter\":\"Cursor center:\",\"automaticallyCenter\":\"Automatically center\",\"cursorHelp\":\"Images up to 32x32 work best. Larger images may not work reliably.\",\"pointerlock\":\"Lock mouse cursor\",\"pointerlockHelp\":\"Based on a TurboWarp Experiment.\",\"gamepad\":\"Support USB or Bluetooth gamepads/controllers\",\"gamepadHelp\":\"Based on the \\\"Gamepad support\\\" addon.\",\"cloudVariables\":\"Cloud Variables\",\"noCloudVariables\":\"This project does not contain cloud variables.\",\"mode\":\"Mode\",\"cloudVariablesHost\":\"Cloud host\",\"cloudVariables-ws\":\"Connect to cloud variable server\",\"cloudVariables-ws-help\":\"\\\"Connect to cloud variable server\\\" syncs variables with other users.\",\"cloudVariables-local\":\"Store in local storage\",\"cloudVariables-local-help\":\"\\\"Store in local storage\\\" stores variables on each user's computer and restores them when the project is opened. If a user has multiple windows/tabs of the project open, changes will sync between those windows.\",\"cloudVariables-ignore\":\"Ignore\",\"cloudVariables-ignore-help\":\"\\\"Ignore\\\" treats cloud variables like normal variables.\",\"cloudVariables-custom\":\"Advanced\",\"cloudVariables-custom-help\":\"\\\"Advanced\\\" uses a different mode for each variable, so some variables can sync with other users but others can be stored locally, for example.\",\"advancedOptions\":\"Advanced Options\",\"advancedSummary\":\"You probably don't want to change these. (Click to open)\",\"specialCloudBehaviors\":\"Special cloud variable behaviors like HTMLifier\",\"unsafeCloudBehaviors\":\"Additional unsafe special cloud behaviors\",\"unsafeCloudBehaviorsWarning\":\"Unsafe cloud behaviors allows the packaged project to execute arbitrary code outside of the \\\"sandbox\\\" that projects are typically executed in. Depending on the environment you're packaging for, this grants projects full control over your computer, including the ability to install viruses. If you do not trust the project you're packaging, please turn off this option.\",\"implicitCloudHint\":\"Tip: Any variable with a name starting with \\\"{cloud}\\\" will be converted to a cloud variable regardless of whether it was marked as one.\",\"enableCompiler\":\"Enable Compiler\",\"warpTimer\":\"Warp Timer\",\"projectId\":\"Project ID\",\"projectIdHelp\":\"Project ID is used when connecting to a cloud variable server and storing local cloud variables. It can contain more than just numbers.\",\"customExtensions\":\"Custom extensions (one URL per line)\",\"customCSS\":\"Custom CSS (Don't change if you don't know what you're doing!)\",\"customJS\":\"Custom JS (Don't change if you don't know what you're doing!)\",\"environment\":\"Environment\",\"html\":\"Plain HTML (standalone, works anywhere)\",\"zip\":\"Zip (ideal for websites)\",\"zip-one-asset\":\"Zip, combine assets into single file (not recommended)\",\"application-win32\":\"{type} Windows application (32-bit or 64-bit)\",\"application-win64\":\"{type} Windows application (64-bit only, not recommended)\",\"application-mac\":\"{type} macOS application\",\"application-linux64\":\"{type} Linux application (64-bit only)\",\"otherEnvironments\":\"Other environments (Click to open)\",\"otherEnvironmentsHelp\":\"Most new projects should use the options listed above instead.\",\"applicationSettings\":\"Application Settings\",\"packageName\":\"Package name\",\"packageNameHelp\":\"Package name should be a unique name used only by your application. The same project should always have the same package name.\",\"version\":\"Version\",\"versionHelp\":\"Updating the version is completely optional and doesn't affect your project's behavior. It may appear in places like about screens depending on the environment.\",\"startWindow\":\"Start as window\",\"startMaximized\":\"Start as maximized window\",\"startFullscreen\":\"Start in fullscreen\",\"package\":\"Package\",\"preview\":\"Preview\",\"resetAll\":\"Reset All Settings\",\"export\":\"Export Settings\",\"import\":\"Import Settings\",\"confirmImportUnsafe\":\"These settings use advanced features such as custom JS that run unknown and possibly malicious code on your computer. Only import this file if you trust the person who created it. If you're not sure what this means, you probably shouldn't import these settings.\",\"downloadsWillAppearHere\":\"Downloads will appear here\"},\"downloads\":{\"link\":\"Download {filename} ({size})\",\"useWorkaround\":\"Click here if download link doesn't work\"},\"fileInput\":{\"select\":\"Select or drop file\",\"clear\":\"Clear Selection\",\"selected\":\"Selected {file}\"},\"theme\":{\"system\":\"Use system theme\",\"dark\":\"Dark\",\"light\":\"Light\"},\"reset\":{\"reset\":\"Reset\",\"confirm\":\"Are you sure you want to reset these settings? This cannot be undone.\",\"confirmAll\":\"Are you sure you want to reset ALL settings? This cannot be undone.\"},\"preview\":{\"loading\":\"Loading Preview\"},\"import\":{\"header\":\"Importing project...\",\"description\":\"This may take a while if the project is large.\",\"cancel\":\"Cancel\"}}");

/***/ }),

/***/ "./src/common/errors.js":
/*!******************************!*\
  !*** ./src/common/errors.js ***!
  \******************************/
/*! exports provided: UserError, AbortError, UnknownNetworkError, OutdatedPackagerError, HTTPError, CannotAccessProjectError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserError", function() { return UserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownNetworkError", function() { return UnknownNetworkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutdatedPackagerError", function() { return OutdatedPackagerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPError", function() { return HTTPError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CannotAccessProjectError", function() { return CannotAccessProjectError; });
/**
 * Error indicating the user has misconfigured something.
 */
class UserError extends Error {
  constructor (message) {
    super(message);
    this.name = 'UserError';
  }
}

/**
 * Error indicating a process was aborted.
 */
class AbortError extends Error {
  constructor (message) {
    super(message || 'Aborted. Although this looks like a scary error, it\'s perfectly normal if you interrupted a loading bar.');
    this.name = 'AbortError';
  }
}

/**
 * Error indicating a network request was unsuccessful and the reason is unknown.
 */
class UnknownNetworkError extends Error {
  constructor (url) {
    super(`Could not fetch ${url} for unknown reason.`);
    this.name = 'UnknownNetworkError';
    this.url = url;
  }
}

/**
 * Error indicating the packager is outdated and must be updated before it can continue.
 */
class OutdatedPackagerError extends Error {
  constructor (message) {
    super(message);
    this.name = 'OutdatedPackagerError';
  }
}

/**
 * Error indicating an HTTP status error.
 */
class HTTPError extends Error {
  constructor (message, status) {
    super(message);
    this.status = status;
    this.name = 'HTTPError';
  }
}

/**
 * Error indicating a project cannot be accessed, perhaps because it's unshared, doesn't exist, or has an invalid ID.
 */
class CannotAccessProjectError extends Error {
  constructor (message) {
    super(message);
    this.name = 'CannotAccessProjectError';
  }
}


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
  constructor () {
    this._events = {};
  }

  addEventListener (event, handler) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(handler);
  }

  removeEventListener (event, handler) {
    const handlers = this._events[event];
    if (handlers) {
      this._events[event] = handlers.filter(i => i !== handler);
    }
  }

  dispatchEvent (event) {
    const handlers = this._events[event.type];
    if (handlers) {
      for (const fn of handlers) {
        fn(event);
      }
    }
  }
}

class CustomEventShim {
  constructor (type, options) {
    this.type = type;
    this.detail = options ? options.detail : {};
  }
}




/***/ }),

/***/ "./src/common/readers.js":
/*!*******************************!*\
  !*** ./src/common/readers.js ***!
  \*******************************/
/*! exports provided: readAsArrayBuffer, readAsURL, readAsText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAsArrayBuffer", function() { return readAsArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAsURL", function() { return readAsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAsText", function() { return readAsText; });
/**
 * @param {Blob} o
 * @returns {Promise<ArrayBuffer>}
 */
const readAsArrayBuffer = (o) => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = () => resolve(fr.result);
  fr.onerror = () => reject(new Error(`Cannot read as array buffer: ${fr.error}`));
  fr.readAsArrayBuffer(o);
});

/**
 * @param {Blob} o
 * @returns {Promise<string>}
 */
const readAsURL = (o) => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = () => resolve(fr.result);
  fr.onerror = () => reject(new Error(`Cannot read as URL: ${fr.error}`));
  fr.readAsDataURL(o);
});

/**
 * @param {Blob} o
 * @returns {Promise<string>}
 */
const readAsText = (o) => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = () => resolve(fr.result);
  fr.onerror = () => reject(new Error(`Cannot read as text: ${fr.error}`));
  fr.readAsText(o);
});


/***/ }),

/***/ "./src/common/request.js":
/*!*******************************!*\
  !*** ./src/common/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/common/errors.js");


const clampProgress = (n) => Math.max(0, Math.min(1, n));

const DO_NOT_USE_FALLBACK_URL_ERRORS = [
  // If we make a request with eg. an invalid project ID, do not use fallback URLs
  400,
  // If we make a request with eg. an unshared project ID, do not use fallback URLs
  404,
];

const request = async (options) => {
  const {
    type,
    progressCallback,
    timeout,
    estimatedSize,
    abortTarget
  } = options;

  const requestURL = (url) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      cleanup();
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new _errors__WEBPACK_IMPORTED_MODULE_0__["HTTPError"](`Couldn't fetch ${url}: status code ${xhr.status}`, xhr.status));
      }
    };
    xhr.onerror = () => {
      cleanup();
      reject(new _errors__WEBPACK_IMPORTED_MODULE_0__["UnknownNetworkError"](url));
    };
  
    if (progressCallback) {
      xhr.onprogress = (e) => {
        if (e.lengthComputable) {
          progressCallback(clampProgress(e.loaded / e.total));
        } else if (estimatedSize) {
          progressCallback(clampProgress(e.loaded / estimatedSize));
        }
      };
    }
  
    xhr.responseType = type;
    xhr.open('GET', url);
    xhr.send();
  
    const cleanup = () => {
      if (cleanupAbortCallback) {
        cleanupAbortCallback();
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  
    let cleanupAbortCallback;
    if (abortTarget) {
      const abortCallback = () => {
        xhr.abort();
        cleanup();
        reject(new Error(`Couldn't fetch ${url}: aborted`));
      };
      abortTarget.addEventListener('abort', abortCallback);
      cleanupAbortCallback = () => {
        abortTarget.removeEventListener('abort', abortCallback);
      };
    }
  
    let timeoutId;
    if (timeout) {
      timeoutId = setTimeout(() => {
        xhr.abort();
        cleanup();
        reject(new Error(`Couldn't fetch ${url}: timed out`));
      }, timeout);
    }
  });

  const urls = Array.isArray(options.url) ? options.url : [options.url];
  if (urls.length === 0) {
    throw new Error('no URLs');
  }
  let errorToThrow;
  for (const url of urls) {
    try {
      return await requestURL(url);
    } catch (e) {
      if (e instanceof _errors__WEBPACK_IMPORTED_MODULE_0__["HTTPError"] && DO_NOT_USE_FALLBACK_URL_ERRORS.includes(e.status)) {
        throw e;
      }
      // We'll record this error if this is the first error, or if the current error provides more information than
      // the old error. This is useful because:
      //  trampoline.turbowarp.org/... -> blocked by filter (appears to us as generic network error)
      //  trampoline.turbowarp.xyz/... -> returns status 500
      // should return the HTTP error, not the generic network error.
      if (!errorToThrow || (errorToThrow instanceof _errors__WEBPACK_IMPORTED_MODULE_0__["UnknownNetworkError"] && !(e instanceof _errors__WEBPACK_IMPORTED_MODULE_0__["UnknownNetworkError"]))) {
        errorToThrow = e;
      }
    }
  }
  throw errorToThrow;
};

/* harmony default export */ __webpack_exports__["default"] = (request);


/***/ }),

/***/ "./src/locales/en.json":
/*!*****************************!*\
  !*** ./src/locales/en.json ***!
  \*****************************/
/*! exports provided: p4, progress, select, options, downloads, fileInput, theme, reset, preview, import, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"p4\":{\"description1\":{\"string\":\"Converts Scratch projects into HTML files, zip archives, or executable programs for Windows, macOS, and Linux.\"},\"description2\":{\"string\":\"If you just want an easy way to embed a project into your website, you may be interested in {embedding}.\"},\"description2-embedding\":{\"string\":\"Embedding\"},\"description3\":{\"string\":\"Report bugs, give feedback, and suggest ideas {onScratch} or {onGitHub}.\"},\"disclaimer\":{\"string\":\"This site is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.\"},\"description3-on\":{\"string\":\"on {brand}\",\"context\":\"Used in the context 'Report bugs on Scratch'.\"},\"error\":{\"string\":\"Error\"},\"errorMessage\":{\"string\":\"Message: {error}\"},\"networkError\":{\"string\":\"Couldn't download {url}. Make sure you're connected to the internet and try disabling any browser extensions.\",\"context\":\"Error displayed when an attempt to download a file failed for an unknown reason.\"},\"outdated\":{\"string\":\"This version of the packager appears to be outdated. Please refresh and try again.\",\"context\":\"Error displayed when the packager detects that you are using an old version and that you must refresh to continue.\"},\"cannotAccessProject\":{\"string\":\"Can't access project metadata. This probably means the project is unshared, never existed, or the ID is invalid.\",\"context\":\"Part of the error modal when loading an unshared project.\"},\"cannotAccessProjectCaching\":{\"string\":\"If the project was shared recently, it may take up to an hour for this message to go away.\",\"context\":\"Part of the error modal when loading an unshared project.\"},\"close\":{\"string\":\"Close\"},\"refresh\":{\"string\":\"Refresh\",\"context\":\"Button in some error messages that refreshes/reloads the page\"},\"browserNotSupported\":{\"string\":\"Browser not supported\",\"description\":\"Message that appears when the user's browser does not support required features.\"},\"browserNotSupportedDescription\":{\"string\":\"Please update your browser.\",\"description\":\"Additional text that appears when the user's browser does not support required features.\"},\"importingInterface\":{\"string\":\"Loading options...\",\"description\":\"Can appear when downloading additional UI scripts. Typically never seen.\"},\"unknownImportError\":{\"string\":\"Something went wrong. Please refresh and try again.\",\"description\":\"Appears when an unknown error happens while downloading additional UI scripts.\"},\"reportBug\":{\"string\":\"Report Bug\"},\"privacy\":{\"string\":\"Privacy Policy\"},\"feedback\":{\"string\":\"Feedback\"},\"sourceCode\":{\"string\":\"Source Code\"},\"donate\":{\"string\":\"Donate\",\"context\":\"Link to donation page\"},\"documentation\":{\"string\":\"Additional resources and help\",\"context\":\"Link to a place with additional information describing advanced topics\"},\"fosshost\":{\"string\":\"Thank you to Fosshost for providing servers used by the packager\",\"context\":\"Link in the site's footer thanking Fosshost.org\"}},\"progress\":{\"loadingAssets\":{\"string\":\"Downloading assets ({complete}/{total})\"},\"compressingProject\":{\"string\":\"Compressing project\"},\"loadingProjectMetadata\":{\"string\":\"Downloading project metadata\"},\"loadingProjectData\":{\"string\":\"Downloading project data\"},\"packagingProject\":{\"string\":\"Packaging project\"},\"loadingLargeAsset\":{\"string\":\"Downloading {thing}\",\"context\":\"Generic loading message used when loading a 'brand name' file such as NW.js or Electron.\"},\"loadingScripts\":{\"string\":\"Downloading scripts\",\"context\":\"Loading message used when loading the Scratch runtime\"}},\"select\":{\"select\":{\"string\":\"Select Project\"},\"selectHelp\":{\"string\":\"Select the project you want to package by copying and pasting the Scratch project link or using one of the other modes. If you use a project you didn't make, make sure to credit the creator.\"},\"id\":{\"string\":\"Scratch Project ID or URL\",\"context\":\"Radio option to select a project from the Scratch website\"},\"file\":{\"string\":\"File\",\"context\":\"Radio option to upload a project from file\"},\"url\":{\"string\":\"Other URL\",\"context\":\"Radio option to choose a project from a non-Scratch URL\"},\"loadProject\":{\"string\":\"Load Project\",\"context\":\"Button to load a project\"},\"loadToContinue\":{\"string\":\"Load a project to continue\"},\"invalidId\":{\"string\":\"Invalid project ID\",\"context\":\"Error message\"},\"invalidUrl\":{\"string\":\"Invalid URL\",\"context\":\"Error message\"},\"noFileSelected\":{\"string\":\"No file selected\",\"context\":\"Error message\"},\"unsharedProjects\":{\"string\":\"Unshared projects are no longer accessible using their project ID due to Scratch API changes.\",\"context\":\"Warning message about unshared projects no longer being accessible.\"},\"unsharedProjectsTemporary\":{\"string\":\"Unshared projects will no longer be accessible using just their project ID at some point in the future due to upcoming Scratch API changes.\",\"context\":\"Temporary warning message about unshared projects not being accessible in the FUTURE. Will be replaced with similar message after the changes are implemented.\"},\"unsharedProjectsWorkaround\":{\"string\":\"Instead, you can either share the project or save the project to your computer (File > Save to your computer) and load the file in the packager. Files generated by the packager are fully self contained and not affected by these changes.\",\"context\":\"Suggested alternatives to continue accessing unshared projects.\"},\"unsharedProjectsMore\":{\"string\":\"For more information, visit: {link}\",\"context\":\"Link to learn more about the state of unshared projects.\"}},\"options\":{\"learnMore\":{\"string\":\"Learn more\",\"context\":\"Hover text for '(?)' link to learn more about an option\"},\"runtimeOptions\":{\"string\":\"Runtime Options\"},\"storedWarning\":{\"string\":\"Note: This project has settings stored in it, which may override these settings.\"},\"turbo\":{\"string\":\"Turbo Mode\"},\"framerate\":{\"string\":\"Framerate\"},\"interpolation\":{\"string\":\"Interpolation\"},\"highQualityPen\":{\"string\":\"High Quality Pen\"},\"infiniteClones\":{\"string\":\"Infinite Clones\"},\"removeFencing\":{\"string\":\"Remove Fencing\"},\"removeMiscLimits\":{\"string\":\"Remove Miscellaneous Limits\"},\"stage\":{\"string\":\"Stage\",\"context\":\"Header of option group related to the stage, its size, etc.\"},\"stageSize\":{\"string\":\"Custom Stage Size\",\"context\":\"Custom stage size option\"},\"preserveRatio\":{\"string\":\"Preserve aspect ratio when resized (recommended)\"},\"stretch\":{\"string\":\"Stretch stage to fill screen without changing actual size (experimental)\"},\"dynamicResize\":{\"string\":\"Dynamically resize size to match window size (experimental)\"},\"username\":{\"string\":\"Username (each \\\"#\\\" gets replaced with a random number)\"},\"customUsernameWarning\":{\"string\":\"Be careful when changing the default username as it can cause connections to the default cloud variable server to be blocked. Only the default username is guaranteed to work.\",\"context\":\"Warning that appears when using custom username and cloud variables at the same time.\"},\"closeWhenStopped\":{\"string\":\"Close window when project stops\",\"context\":\"Option to close the window containing the packaged project when all the scripts within a project have stopped running.\"},\"autoplay\":{\"string\":\"Start project automatically instead of showing a big green flag\"},\"autoplayHint\":{\"string\":\"Note: Many browsers will not allow websites to automatically play sound, so sounds might not play until the user interacts with the project.\"},\"playerOptions\":{\"string\":\"Player Options\",\"context\":\"Player options section header\"},\"pageTitle\":{\"string\":\"Page title\"},\"loadingScreen\":{\"string\":\"Loading Screen\",\"context\":\"Header of loading screen settings section\"},\"showProgressBar\":{\"string\":\"Show progress bar\"},\"loadingScreenText\":{\"string\":\"Loading screen text\"},\"loadingScreenImage\":{\"string\":\"Loading screen image\"},\"sizeNormal\":{\"string\":\"Display at normal size\"},\"sizeStretch\":{\"string\":\"Fill screen\"},\"loadingScreenTextPlaceholder\":{\"string\":\"(Nothing)\",\"context\":\"Placeholder text for the 'Loading Screen Text' option\"},\"icon\":{\"string\":\"Page icon\"},\"controls\":{\"string\":\"Controls\",\"context\":\"Controls section header\"},\"showFlag\":{\"string\":\"Show green flag button in controls\"},\"showStop\":{\"string\":\"Show stop sign button in controls\"},\"showFullscreen\":{\"string\":\"Show fullscreen button in controls\"},\"showPause\":{\"string\":\"Show pause button in controls\"},\"accentColor\":{\"string\":\"Accent color (active/hovered controls, ask prompt, context menus)\"},\"controlsHelp\":{\"string\":\"If all controls are disabled, the controls bar is removed entirely. If only fullscreen is enabled, it will always be located in the top left corner, not in the controls header.\"},\"colors\":{\"string\":\"Colors\",\"context\":\"Colors section header\"},\"backgroundColor\":{\"string\":\"Background color\"},\"foregroundColor\":{\"string\":\"Foreground color (progress bar, some icons, some text)\"},\"monitors\":{\"string\":\"Monitors\",\"context\":\"Monitors refers to variable and list monitors/watchers/displays that display on the stage\"},\"editableLists\":{\"string\":\"Editable lists\"},\"variableColor\":{\"string\":\"Variable color\",\"context\":\"Name of option that controls the color of variable monitors that appear over the stage\"},\"listColor\":{\"string\":\"List color\",\"context\":\"Name of option that controls background color of rows in list monitors that appear over the stage\"},\"interaction\":{\"string\":\"Input\",\"context\":\"Input settings header\"},\"normalCursor\":{\"string\":\"Normal cursor\"},\"noCursor\":{\"string\":\"No cursor\"},\"customCursor\":{\"string\":\"Custom cursor\"},\"cursorCenter\":{\"string\":\"Cursor center:\",\"context\":\"Option to configure the center of a custom cursor. Followed by 'X: (input) Y: (input)'\"},\"automaticallyCenter\":{\"string\":\"Automatically center\",\"context\":\"Button that automatically centers a custom cursor\"},\"cursorHelp\":{\"string\":\"Images up to 32x32 work best. Larger images may not work reliably.\"},\"pointerlock\":{\"string\":\"Lock mouse cursor\",\"context\":\"Option to enable pointerlock\"},\"pointerlockHelp\":{\"string\":\"Based on a TurboWarp Experiment.\"},\"gamepad\":{\"string\":\"Support USB or Bluetooth gamepads/controllers\"},\"gamepadHelp\":{\"string\":\"Based on the \\\"Gamepad support\\\" addon.\"},\"cloudVariables\":{\"string\":\"Cloud Variables\",\"context\":\"Cloud variables section header\"},\"noCloudVariables\":{\"string\":\"This project does not contain cloud variables.\",\"context\":\"Message that appears when the project contain no cloud variables.\"},\"mode\":{\"string\":\"Mode\",\"context\":\"Label to choose how to handle cloud variables\"},\"cloudVariablesHost\":{\"string\":\"Cloud host\",\"context\":\"Option to use configure which cloud variable server to connect to\"},\"cloudVariables-ws\":{\"string\":\"Connect to cloud variable server\"},\"cloudVariables-ws-help\":{\"string\":\"\\\"Connect to cloud variable server\\\" syncs variables with other users.\"},\"cloudVariables-local\":{\"string\":\"Store in local storage\"},\"cloudVariables-local-help\":{\"string\":\"\\\"Store in local storage\\\" stores variables on each user's computer and restores them when the project is opened. If a user has multiple windows/tabs of the project open, changes will sync between those windows.\"},\"cloudVariables-ignore\":{\"string\":\"Ignore\"},\"cloudVariables-ignore-help\":{\"string\":\"\\\"Ignore\\\" treats cloud variables like normal variables.\"},\"cloudVariables-custom\":{\"string\":\"Advanced\"},\"cloudVariables-custom-help\":{\"string\":\"\\\"Advanced\\\" uses a different mode for each variable, so some variables can sync with other users but others can be stored locally, for example.\"},\"advancedOptions\":{\"string\":\"Advanced Options\"},\"advancedSummary\":{\"string\":\"You probably don't want to change these. (Click to open)\",\"context\":\"Text that can be clicked to expand the advanced options section.\"},\"specialCloudBehaviors\":{\"string\":\"Special cloud variable behaviors like HTMLifier\",\"context\":\"Do not translate 'HTMLifier'\"},\"unsafeCloudBehaviors\":{\"string\":\"Additional unsafe special cloud behaviors\"},\"unsafeCloudBehaviorsWarning\":{\"string\":\"Unsafe cloud behaviors allows the packaged project to execute arbitrary code outside of the \\\"sandbox\\\" that projects are typically executed in. Depending on the environment you're packaging for, this grants projects full control over your computer, including the ability to install viruses. If you do not trust the project you're packaging, please turn off this option.\",\"context\":\"Warning that appears when unsafe cloud behaviors is enabled.\"},\"implicitCloudHint\":{\"string\":\"Tip: Any variable with a name starting with \\\"{cloud}\\\" will be converted to a cloud variable regardless of whether it was marked as one.\"},\"enableCompiler\":{\"string\":\"Enable Compiler\"},\"warpTimer\":{\"string\":\"Warp Timer\"},\"projectId\":{\"string\":\"Project ID\"},\"projectIdHelp\":{\"string\":\"Project ID is used when connecting to a cloud variable server and storing local cloud variables. It can contain more than just numbers.\"},\"customExtensions\":{\"string\":\"Custom extensions (one URL per line)\"},\"customCSS\":{\"string\":\"Custom CSS (Don't change if you don't know what you're doing!)\",\"context\":\"Do not translate 'CSS'\"},\"customJS\":{\"string\":\"Custom JS (Don't change if you don't know what you're doing!)\",\"context\":\"Do not translate 'JS'\"},\"environment\":{\"string\":\"Environment\",\"context\":\"Label to select which environment to package the project for\"},\"html\":{\"string\":\"Plain HTML (standalone, works anywhere)\"},\"zip\":{\"string\":\"Zip (ideal for websites)\"},\"zip-one-asset\":{\"string\":\"Zip, combine assets into single file (not recommended)\"},\"application-win32\":{\"string\":\"{type} Windows application (32-bit or 64-bit)\",\"context\":\"type will become something like 'NW.js' or 'Electron'. Do not translate 'Windows'.\"},\"application-win64\":{\"string\":\"{type} Windows application (64-bit only, not recommended)\",\"context\":\"type will become something like 'NW.js' or 'Electron'. Do not translate 'Windows'.\"},\"application-mac\":{\"string\":\"{type} macOS application\",\"context\":\"type will become something like 'NW.js' or 'Electron'. Do not translate 'macOS'.\"},\"application-linux64\":{\"string\":\"{type} Linux application (64-bit only)\",\"context\":\"type will become something like 'NW.js' or 'Electron'. Do not translate 'Linux'.\"},\"otherEnvironments\":{\"string\":\"Other environments (Click to open)\",\"context\":\"Text that can be clicked to expand list of environments to include some unrecommended ones.\"},\"otherEnvironmentsHelp\":{\"string\":\"Most new projects should use the options listed above instead.\",\"context\":\"Text describing the 'Other environments' section.\"},\"applicationSettings\":{\"string\":\"Application Settings\"},\"packageName\":{\"string\":\"Package name\"},\"packageNameHelp\":{\"string\":\"Package name should be a unique name used only by your application. The same project should always have the same package name.\"},\"version\":{\"string\":\"Version\",\"context\":\"Label for application version number input\"},\"versionHelp\":{\"string\":\"Updating the version is completely optional and doesn't affect your project's behavior. It may appear in places like about screens depending on the environment.\",\"context\":\"Additional information about the version number option\"},\"startWindow\":{\"string\":\"Start as window\"},\"startMaximized\":{\"string\":\"Start as maximized window\"},\"startFullscreen\":{\"string\":\"Start in fullscreen\"},\"package\":{\"string\":\"Package\",\"context\":\"Button to package the project\"},\"preview\":{\"string\":\"Preview\",\"context\":\"Button to preview the project\"},\"resetAll\":{\"string\":\"Reset All Settings\",\"developer_comment\":\"Button that resets all settings\"},\"export\":{\"string\":\"Export Settings\",\"developer_comment\":\"Button to export packager settings\"},\"import\":{\"string\":\"Import Settings\",\"developer_comment\":\"Button to import packager settings\"},\"confirmImportUnsafe\":{\"string\":\"These settings use advanced features such as custom JS that run unknown and possibly malicious code on your computer. Only import this file if you trust the person who created it. If you're not sure what this means, you probably shouldn't import these settings.\",\"developer_comment\":\"Confirmation prompt that appears when importing packager settings that use 'unsafe' features.\"},\"downloadsWillAppearHere\":{\"string\":\"Downloads will appear here\",\"context\":\"Placeholder that appears when no project has been packaged yet so there is nothing to download\"}},\"downloads\":{\"link\":{\"string\":\"Download {filename} ({size})\",\"context\":\"Link to download project after it has been packaged. filename might be \\\"Packaged Project.html\\\" and size might be \\\"6.2MB\\\"\"},\"useWorkaround\":{\"string\":\"Click here if download link doesn't work\",\"context\":\"Buttons that appears when downloading certain file types on certain systems to work around system bugs that prevent downloading files.\"}},\"fileInput\":{\"select\":{\"string\":\"Select or drop file\"},\"clear\":{\"string\":\"Clear Selection\",\"context\":\"Button to unselect a file\"},\"selected\":{\"string\":\"Selected {file}\",\"context\":\"Message indicating the name of the selected file\"}},\"theme\":{\"system\":{\"string\":\"Use system theme\",\"context\":\"Option to choose dark/light mode based on whatever the global system theme is\"},\"dark\":{\"string\":\"Dark\",\"context\":\"Dark mode option\"},\"light\":{\"string\":\"Light\",\"context\":\"Light mode option\"}},\"reset\":{\"reset\":{\"string\":\"Reset\",\"context\":\"Hover text of button to reset settings within a section\"},\"confirm\":{\"string\":\"Are you sure you want to reset these settings? This cannot be undone.\",\"context\":\"Prompt to confirm user wants to reset a specific subsection's settings\"},\"confirmAll\":{\"string\":\"Are you sure you want to reset ALL settings? This cannot be undone.\",\"context\":\"Prompt to confirm user wants to reset ALL settings for the current project\"}},\"preview\":{\"loading\":{\"string\":\"Loading Preview\"}},\"import\":{\"header\":{\"string\":\"Importing project...\",\"description\":\"Header that appears when importing a project from an external site\"},\"description\":{\"string\":\"This may take a while if the project is large.\",\"description\":\"Appears when importing a project from an external site\"},\"cancel\":{\"string\":\"Cancel\",\"description\":\"Button to cancel import\"}}}");

/***/ }),

/***/ "./src/locales/index.js":
/*!******************************!*\
  !*** ./src/locales/index.js ***!
  \******************************/
/*! exports provided: locale, supportedLocales, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedLocales", function() { return supportedLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return translate; });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _p4_persistent_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../p4/persistent-store */ "./src/p4/persistent-store.js");
/* harmony import */ var _build_unstructure_translations_loader_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../build/unstructure-translations-loader!./en.json */ "./src/build/unstructure-translations-loader.js!./src/locales/en.json");
var _build_unstructure_translations_loader_en_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/unstructure-translations-loader!./en.json */ "./src/build/unstructure-translations-loader.js!./src/locales/en.json", 1);
/* harmony import */ var _locale_names_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-names.json */ "./src/locales/locale-names.json");
var _locale_names_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./locale-names.json */ "./src/locales/locale-names.json", 1);





const allMessages = {
  en: () => _build_unstructure_translations_loader_en_json__WEBPACK_IMPORTED_MODULE_2__,
  // Generated code:
  /*===*/
  "en": () => __webpack_require__(/*! ./en.json */ "./src/locales/en.json"), 
  "zh-cn": () => __webpack_require__(/*! ./zh-cn.json */ "./src/locales/zh-cn.json"),
  "zh-tw": () => __webpack_require__(/*! ./zh-tw.json */ "./src/locales/zh-tw.json"),
  /*===*/
};

const supportedLocales = {};
// Iterate over localeNames to preserve order
for (const key of Object.keys(_locale_names_json__WEBPACK_IMPORTED_MODULE_3__)) {
  if (allMessages[key]) {
    supportedLocales[key] = _locale_names_json__WEBPACK_IMPORTED_MODULE_3__[key];
  }
}

const getInitialLocale = () => [
  navigator.language.toLowerCase(),
  navigator.language.toLowerCase().split('-')[0]
].find(i => allMessages[i]) || 'en';

const locale = Object(_p4_persistent_store__WEBPACK_IMPORTED_MODULE_1__["default"])('P4.locale', getInitialLocale());
locale.subscribe((lang) => {
  if (!allMessages[lang]) {
    locale.set('en');
  }
  document.documentElement.lang = lang;
});

const getProperty = (obj, id) => {
  const parts = id.split('.');
  for (let i = 0; i < parts.length - 1; i++) {
    obj = obj[parts[i]];
    if (!obj) {
      return null;
    }
  }
  return obj[parts[parts.length - 1]] || null;
};

const translate = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["derived"])(locale, (locale) => {
  const localMessages = allMessages[locale]();
  /**
   * @param {string} id Message ID
   * @returns {string} Translated message
   */
  const translateMessage = (id) => {
    return getProperty(localMessages, id) || getProperty(_build_unstructure_translations_loader_en_json__WEBPACK_IMPORTED_MODULE_2__, id) || id;
  };
  translate.translate = translateMessage;
  return translateMessage;
});




/***/ }),

/***/ "./src/locales/locale-names.json":
/*!***************************************!*\
  !*** ./src/locales/locale-names.json ***!
  \***************************************/
/*! exports provided: ab, af, ar, am, an, az, id, bn, be, bg, ca, cs, cy, da, de, et, el, en, es, es-419, eu, fa, fr, fy, ga, gd, gl, ko, hy, he, hr, xh, zu, is, it, ka, kk, qu, sw, ht, ku, ckb, lv, lt, hu, mi, mn, nl, ja, ja-Hira, nb, nn, or, uz, th, km, pl, pt, pt-br, rap, ro, ru, nso, tn, sk, sl, sr, fi, sv, vi, tr, uk, zh-cn, zh-tw, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ab\":\"Аҧсшәа\",\"af\":\"Afrikaans\",\"ar\":\"العربية\",\"am\":\"አማርኛ\",\"an\":\"Aragonés\",\"az\":\"Azeri\",\"id\":\"Bahasa Indonesia\",\"bn\":\"বাংলা\",\"be\":\"Беларуская\",\"bg\":\"Български\",\"ca\":\"Català\",\"cs\":\"Česky\",\"cy\":\"Cymraeg\",\"da\":\"Dansk\",\"de\":\"Deutsch\",\"et\":\"Eesti\",\"el\":\"Ελληνικά\",\"en\":\"English\",\"es\":\"Español (España)\",\"es-419\":\"Español Latinoamericano\",\"eu\":\"Euskara\",\"fa\":\"فارسی\",\"fr\":\"Français\",\"fy\":\"Frysk\",\"ga\":\"Gaeilge\",\"gd\":\"Gàidhlig\",\"gl\":\"Galego\",\"ko\":\"한국어\",\"hy\":\"Հայերեն\",\"he\":\"עִבְרִית\",\"hr\":\"Hrvatski\",\"xh\":\"isiXhosa\",\"zu\":\"isiZulu\",\"is\":\"Íslenska\",\"it\":\"Italiano\",\"ka\":\"ქართული ენა\",\"kk\":\"қазақша\",\"qu\":\"Kichwa\",\"sw\":\"Kiswahili\",\"ht\":\"Kreyòl ayisyen\",\"ku\":\"Kurdî\",\"ckb\":\"کوردیی ناوەندی\",\"lv\":\"Latviešu\",\"lt\":\"Lietuvių\",\"hu\":\"Magyar\",\"mi\":\"Māori\",\"mn\":\"Монгол хэл\",\"nl\":\"Nederlands\",\"ja\":\"日本語\",\"ja-Hira\":\"にほんご\",\"nb\":\"Norsk Bokmål\",\"nn\":\"Norsk Nynorsk\",\"or\":\"ଓଡ଼ିଆ\",\"uz\":\"Oʻzbekcha\",\"th\":\"ไทย\",\"km\":\"ភាសាខ្មែរ\",\"pl\":\"Polski\",\"pt\":\"Português\",\"pt-br\":\"Português Brasileiro\",\"rap\":\"Rapa Nui\",\"ro\":\"Română\",\"ru\":\"Русский\",\"nso\":\"Sepedi\",\"tn\":\"Setswana\",\"sk\":\"Slovenčina\",\"sl\":\"Slovenščina\",\"sr\":\"Српски\",\"fi\":\"Suomi\",\"sv\":\"Svenska\",\"vi\":\"Tiếng Việt\",\"tr\":\"Türkçe\",\"uk\":\"Українська\",\"zh-cn\":\"简体中文\",\"zh-tw\":\"繁體中文\"}");

/***/ }),

/***/ "./src/locales/zh-cn.json":
/*!********************************!*\
  !*** ./src/locales/zh-cn.json ***!
  \********************************/
/*! exports provided: downloads, fileInput, import, options, p4, preview, progress, reset, select, theme, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"downloads\":{\"link\":\"下载 {filename}（{size}）\",\"useWorkaround\":\"如果下载链接不起作用，请单击此处\"},\"fileInput\":{\"clear\":\"清除选择\",\"select\":\"选择或拖入文件\",\"selected\":\"已选择 {file}\"},\"import\":{\"cancel\":\"取消\",\"description\":\"如果作品太大，可能需要很多时间。\",\"header\":\"导入作品中...\"},\"options\":{\"accentColor\":\"主题色（激活/悬停的控件、询问窗口、上下文菜单）\",\"advancedOptions\":\"高级选项\",\"advancedSummary\":\"大部分情况下，你不需要修改这里的设置。（点击打开）\",\"application-linux64\":\"Linux 程序（仅 64 位，基于 {type}）\",\"application-mac\":\"macOS 程序（基于 {type}）\",\"application-win32\":\"Windows 程序（32 位或 64 位，基于 {type}）\",\"application-win64\":\"Windows 程序（仅 64 位，基于 {type}）\",\"applicationSettings\":\"应用程序设置\",\"automaticallyCenter\":\"自动设为中心\",\"autoplay\":\"加载完成时自动开始运行而不是显示一个大绿旗\",\"autoplayHint\":\"注意：很多浏览器不允许网站自动播放声音，因此在用户与作品交互前，声音可能不会播放。\",\"backgroundColor\":\"背景色\",\"closeWhenStopped\":\"当作品停止时关闭窗口\",\"cloudVariables\":\"云变量\",\"cloudVariables-custom\":\"高级\",\"cloudVariables-custom-help\":\"“高级”可以给每个云变量不同的设置。例如，有些变量可以和他人同步，有些变量就在本地储存。\",\"cloudVariables-ignore\":\"忽略\",\"cloudVariables-ignore-help\":\"“忽略”让所有云变量像普通变量一样工作\",\"cloudVariables-local\":\"存储在本地\",\"cloudVariables-local-help\":\"“存储在本地”选项会将变量存储在每个用户的电脑浏览器上，并在作品打开时恢复它们。 如果用户使用同一个电脑浏览器打开了作品的多个窗口/选项卡，更改将在这些窗口之间同步。但这个存储位置可能被用户意外清除。\",\"cloudVariables-ws\":\"连接到云变量服务器\",\"cloudVariables-ws-help\":\"“连接到云变量服务器”与其他用户同步变量。\",\"cloudVariablesHost\":\"云变量服务器地址\",\"colors\":\"颜色\",\"confirmImportUnsafe\":\"这些设置使用JavaScript，而JavaScript可能会运行病毒。请务必不要导入未知来源或来自外人的文件。\",\"controls\":\"控制按钮\",\"controlsHelp\":\"如果此处的所有选项都不勾选，将会删除控制栏。如果只有全屏按钮被选中，则它会放在网页的左上角，而不是控制栏上。\",\"cursorCenter\":\"鼠标中心：\",\"cursorHelp\":\"尺寸为 32x32 及以下的图像表现得最好。更大的图像可能无法正常工作。\",\"customCSS\":\"自定义 CSS（如果你不确定你在做什么，别动它）\",\"customCursor\":\"自定义光标\",\"customExtensions\":\"自定义扩展（每行一个 URL）\",\"customJS\":\"自定义 JS（如果你不确定你在做什么，别动它）\",\"customUsernameWarning\":\"如果您修改了缺省用户名，请小心，因为它能造成缺省云变量服务器被断开。只有缺省用户名保证可以用。\",\"downloadsWillAppearHere\":\"下载进度将显示在这里\",\"dynamicResize\":\"动态匹配窗口大小（实验性）\",\"editableLists\":\"允许编辑列表\",\"enableCompiler\":\"使用编译\",\"environment\":\"运行环境\",\"export\":\"导出设置\",\"foregroundColor\":\"前景色（进度栏、一些图标、一些文本）\",\"framerate\":\"帧率\",\"gamepad\":\"支持 USB 或蓝牙游戏手柄\",\"gamepadHelp\":\"基于 Gamepad 插件。\",\"highQualityPen\":\"高清画笔\",\"html\":\"HTML 文件（单个文件，在大部分现代浏览器上工作）\",\"icon\":\"窗口图标\",\"implicitCloudHint\":\"提示：任何名称以“{cloud}”开头的变量都将被转换为云变量，无论它们创建时是否是云变量。\",\"import\":\"导入设置\",\"infiniteClones\":\"无限克隆\",\"interaction\":\"输入\",\"interpolation\":\"补帧\",\"learnMore\":\"查看更多\",\"listColor\":\"列表颜色\",\"loadingScreen\":\"加载页面\",\"loadingScreenImage\":\"加载页面图片\",\"loadingScreenText\":\"加载提示文本\",\"loadingScreenTextPlaceholder\":\"（无）\",\"mode\":\"模式\",\"monitors\":\"查看\",\"noCloudVariables\":\"该作品不含云变量。\",\"noCursor\":\"无光标\",\"normalCursor\":\"正常光标\",\"otherEnvironments\":\"其它平台（点击打开）\",\"otherEnvironmentsHelp\":\"大部分作品只需要使用上面列出的选项即可。\",\"package\":\"打包\",\"packageName\":\"程序包名称\",\"packageNameHelp\":\"程序包名称应该是一个只由你的应用程序使用的唯一名称。同一个作品应该总是使用相同的程序包名称。\",\"pageTitle\":\"页面标题\",\"playerOptions\":\"展示选项\",\"pointerlock\":\"锁定光标\",\"pointerlockHelp\":\"基于一项 TurboWarp 实验性功能。\",\"preserveRatio\":\"调整大小时保留纵横比（推荐）\",\"preview\":\"预览\",\"projectId\":\"作品 ID\",\"projectIdHelp\":\"作品 ID 用于连接云变量服务器或存储本地云变量。可以包含非数字内容。\",\"removeFencing\":\"角色可穿过边缘\",\"removeMiscLimits\":\"移除其他限制\",\"resetAll\":\"重置所有设置\",\"runtimeOptions\":\"运行选项\",\"showFlag\":\"在控制栏显示绿旗按钮\",\"showFullscreen\":\"在控制栏显示全屏按钮\",\"showPause\":\"在控制栏显示暂停按钮\",\"showProgressBar\":\"显示进度\",\"showStop\":\"在控制栏显示停止按钮\",\"sizeNormal\":\"以正常尺寸展示\",\"sizeStretch\":\"全屏\",\"specialCloudBehaviors\":\"兼容 HTMLifier 的特殊云变量\",\"stage\":\"舞台\",\"stageSize\":\"自定义舞台大小\",\"startFullscreen\":\"以全屏模式启动\",\"startMaximized\":\"以最大化窗口模式启动\",\"startWindow\":\"以窗口模式启动\",\"storedWarning\":\"注意：此作品中已经存储了设置信息，可能会被覆盖。\",\"stretch\":\"拉伸舞台以填充屏幕而不改变实际大小（实验性）\",\"turbo\":\"加速模式\",\"unsafeCloudBehaviors\":\"额外的不安全的特殊云变量行为\",\"unsafeCloudBehaviorsWarning\":\"不安全的云变量行为允许打包的作品在作品通常执行的“沙盒”之外执行任意代码。根据你打包的环境，这可能会赋予作品对你的计算机的完全控制权，包括安装病毒的能力。如果你不信任你要打包的作品，请关闭这个选项。\",\"username\":\"用户名（每个“#”号代表一位随机数字）\",\"variableColor\":\"变量颜色\",\"version\":\"版本\",\"versionHelp\":\"更新版本是完全可选的，不会影响你的作品的行为。根据环境的不同，它可能会出现在关于屏幕等地方。\",\"warpTimer\":\"循环计时器\",\"zip\":\"Zip 压缩包（适合嵌入网站）\",\"zip-one-asset\":\"Zip 压缩包，把所有素材打包在一个文件中（不推荐）\"},\"p4\":{\"browserNotSupported\":\"不支持浏览器\",\"browserNotSupportedDescription\":\"请更新您的浏览器。\",\"cannotAccessProject\":\"无法访问作品数据。这可能意味着此作品未共享、不存在或 ID 无效。\",\"cannotAccessProjectCaching\":\"最近分享的作品可能需要一个小时才能显示。\",\"close\":\"关闭\",\"description1\":\"将 Scratch 作品转换为 HTML 文件、ZIP 压缩包或 Windows、MacOS 和 Linux 的可执行文件。\",\"description2\":\"如果您只是想以一种简单的方式将 Scratch 官网作品嵌入您的网站，您可能会对 {embedding} 感兴趣。 \",\"description2-embedding\":\"网站嵌入\",\"description3\":\"在 {onScratch} 或者 {onGitHub} 报告错误，给予反馈，并提出建议。\",\"description3-on\":\"{brand}\",\"disclaimer\":\"此网站不属于 Scratch、Scratch 团队或 Scratch 基金会。\",\"documentation\":\"更多资源和帮助\",\"donate\":\"捐赠\",\"error\":\"错误\",\"errorMessage\":\"错误：{error}\",\"feedback\":\"反馈\",\"cfp\":\"感谢 Cloudflare Pages 提供 AxolotlPackager 使用的服务器\",\"ghp\":\"感谢 GitHub Pages 提供 AxolotlPackager 使用的服务器\",\"vc\":\"感谢 Vercel 提供 AxolotlPackager 使用的服务器\",\"la\":\"感谢 TurboWarp Packager 提供 AxolotlPackager 使用的大型静态资源的下载地址（文件托管于他们的网站上）\",\"importingInterface\":\"正在加载选项...\",\"networkError\":\"无法下载 {url}。请确保你已连接到互联网，并尝试禁用浏览器扩展。\",\"outdated\":\"这个版本的 AxolotlPackager 似乎已经过期。请刷新并重试。\",\"privacy\":\"隐私政策\",\"refresh\":\"刷新\",\"reportBug\":\"反馈问题\",\"sourceCode\":\"源代码\",\"unknownImportError\":\"出问题了。请刷新并重试。\"},\"preview\":{\"loading\":\"加载预览\"},\"progress\":{\"compressingProject\":\"压缩作品中\",\"loadingAssets\":\"下载素材中（第 {complete} 个，共 {total} 个）\",\"loadingLargeAsset\":\"下载 {thing} 中\",\"loadingProjectData\":\"下载作品数据中\",\"loadingProjectMetadata\":\"下载作品元数据中\",\"loadingScripts\":\"下载脚本中\",\"packagingProject\":\"打包作品中\"},\"reset\":{\"confirm\":\"该操作不可撤销，确定要重置吗？\",\"confirmAll\":\"你确认要重置 *所有的* 设置吗？这操作撤销不了！\",\"reset\":\"重置\"},\"select\":{\"file\":\"文件\",\"id\":\"Scratch 官网作品 ID 或者网页链接\",\"invalidId\":\"无效的作品 ID\",\"invalidUrl\":\"无效的作品链接。请检查链接是否为直接链接，即右键打开是否会直接开始下载。\",\"loadProject\":\"加载作品\",\"loadToContinue\":\"加载作品以继续\",\"noFileSelected\":\"没有选择文件\",\"select\":\"选择作品\",\"selectHelp\":\"您可以通过复制粘贴 Scratch 作品链接，或使用其他模式来选择要打包的作品。 如果您打包的作品并非原创，请做好署名。\",\"unsharedProjects\":\"未分享的作品将不会显示。\",\"unsharedProjectsMore\":\"详见 {link}\",\"unsharedProjectsTemporary\":\"由于未来 Scratch API 的变化，未共享的作品将不再能只使用其作品 ID 访问。\",\"unsharedProjectsWorkaround\":\"您可以尝试分享作品或者将作品保存到设备（文件 > 保存到电脑）并在打包机中打开。打包程序生成的文件是完全独立的，不受 Scratch API 更新的影响。\",\"url\":\"其他网站的直接链接\"},\"theme\":{\"dark\":\"暗黑主题\",\"light\":\"明亮主题\",\"system\":\"使用系统主题\"}}");

/***/ }),

/***/ "./src/locales/zh-tw.json":
/*!********************************!*\
  !*** ./src/locales/zh-tw.json ***!
  \********************************/
/*! exports provided: fileInput, import, options, p4, preview, progress, reset, select, theme, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"fileInput\":{\"clear\":\"清除所選\",\"select\":\"選擇或放入檔案\",\"selected\":\"已選擇「{file}」\"},\"import\":{\"cancel\":\"取消\"},\"options\":{\"accentColor\":\"主題色（按鈕背景、詢問框、右鍵選單等）\",\"advancedOptions\":\"進階選項\",\"advancedSummary\":\"正常來說，你不會想要、也不需更改這些（點擊以展開）。\",\"application-linux64\":\"{type} Linux 應用程式（僅 64 位）\",\"application-mac\":\"{type} macOS 應用程式\",\"application-win32\":\"{type} Windows 應用程式（32 位或 64 位）\",\"application-win64\":\"{type} Windows 應用程式（僅 64 位，不推薦）\",\"applicationSettings\":\"應用程式選項\",\"autoplay\":\"直接開始程序而不顯示一個大綠旗\",\"backgroundColor\":\"背景色\",\"cloudVariables\":\"雲端變數\",\"cloudVariables-custom\":\"個別更改\",\"cloudVariables-custom-help\":\"個別更改⸺個別更改運行方式。\",\"cloudVariables-ignore\":\"忽略\",\"cloudVariables-ignore-help\":\"忽略⸺以普通變數方式運行。\",\"cloudVariables-local\":\"存儲在本機\",\"cloudVariables-ws\":\"連接到雲端變數主機\",\"cloudVariables-ws-help\":\"連接到雲端變數主機⸺與其他玩家同步。\",\"cloudVariablesHost\":\"雲端變數主機：\",\"colors\":\"顏色\",\"controls\":\"控制欄\",\"controlsHelp\":\"若全部隱藏，控制欄不會顯示。\\n若僅全螢幕按鈕顯示，它會被置於螢幕右上方，控制欄同樣不會顯示。\",\"cursorHelp\":\"圖片大小最好為 32×32，再大的圖片可能無法正常運行。\",\"customCSS\":\"自定義CSS(如果你不知道你在做什麼，別動！)\",\"customCursor\":\"自訂指標\",\"customExtensions\":\"自訂擴充功能（一行一個網址）\",\"customJS\":\"自訂 JS（如果你不知道你在做什麼，千萬別更改它！）\",\"downloadsWillAppearHere\":\"這裡會顯示下載連結\",\"editableLists\":\"可編輯鏈表\",\"enableCompiler\":\"編譯器\",\"environment\":\"封裝選項\",\"foregroundColor\":\"前景色（進度條、某些圖示和文字等）\",\"framerate\":\"幀率\",\"gamepad\":\"支援 USB 或藍牙遊戲手把\",\"gamepadHelp\":\"基於「遊戲手把支援」附加元件。\",\"highQualityPen\":\"高品質畫筆\",\"html\":\"HTML（獨立，各處皆可用）\",\"icon\":\"圖示\",\"infiniteClones\":\"無限分身\",\"interaction\":\"輸入\",\"interpolation\":\"補幀\",\"learnMore\":\"瞭解更多\",\"loadingScreen\":\"載入畫面\",\"loadingScreenImage\":\"載入畫面圖片\",\"loadingScreenText\":\"載入畫面文字\",\"loadingScreenTextPlaceholder\":\"（無）\",\"mode\":\"模式：\",\"monitors\":\"監視器\",\"noCursor\":\"隱藏指標\",\"normalCursor\":\"顯示指標\",\"otherEnvironments\":\"其他方式（點擊以展開）\",\"otherEnvironmentsHelp\":\"大多數的新專案應使用上面的方式。\",\"package\":\"封裝\",\"packageName\":\"應用程式名稱\",\"packageNameHelp\":\"應用程式名稱必須是唯一的，相同的專案應使用同樣的應用程式名稱。\",\"pageTitle\":\"標題\",\"playerOptions\":\"介面設定\",\"pointerlock\":\"鎖定指標\",\"pointerlockHelp\":\"基於 TurboWarp 實驗性功能。\",\"preview\":\"預覽\",\"projectId\":\"作品ID\",\"removeFencing\":\"移除屏障\",\"removeMiscLimits\":\"移除各類限制\",\"runtimeOptions\":\"運行選項\",\"showFlag\":\"在控制欄顯示綠旗\",\"showFullscreen\":\"全螢幕按鈕\",\"showPause\":\"在控制欄顯示暫停按鈕\",\"showProgressBar\":\"進度條\",\"showStop\":\"停止按鈕\",\"sizeNormal\":\"原始大小\",\"sizeStretch\":\"填滿畫面\",\"startFullscreen\":\"以滿屏方式啟動\",\"startMaximized\":\"以最大化窗口啟動\",\"startWindow\":\"以窗口啟動\",\"turbo\":\"加速模式\",\"username\":\"用戶名稱（以「#」代表一個隨機數）\",\"warpTimer\":\"防卡死\",\"zip\":\"Zip（用於網站的最佳選擇）\",\"zip-one-asset\":\"Zip，封裝所有素材（不推薦）\"},\"p4\":{\"close\":\"關閉\",\"description1\":\"將Scratch項目打包為網頁文件、ZIP压缩包或Windows、macOS与Linux應用程序\",\"description2-embedding\":\"嵌入\",\"description3\":\"在 {onScratch} 或 {onGitHub} 上回報錯誤、給予回饋或提出建議。\",\"error\":\"錯誤\",\"errorMessage\":\"訊息：{error}\",\"feedback\":\"回饋\",\"privacy\":\"隱私權政策\",\"refresh\":\"重新整理\",\"reportBug\":\"回報錯誤\",\"sourceCode\":\"原始碼\"},\"preview\":{\"loading\":\"預覽加載中\"},\"progress\":{\"compressingProject\":\"壓縮專案中……\",\"loadingLargeAsset\":\"下載中{thing}\",\"loadingProjectData\":\"作品數據下載中\",\"loadingScripts\":\"腳本下載中\",\"packagingProject\":\"封裝專案中……\"},\"reset\":{\"confirm\":\"你確定要重設這些設定嗎？這不能被撤銷。\",\"reset\":\"重設\"},\"select\":{\"file\":\"檔案\",\"id\":\"Scratch 專案 ID 或網址\",\"invalidId\":\"無效的專案 ID\",\"invalidUrl\":\"無效的專案網址\",\"loadProject\":\"載入專案\",\"loadToContinue\":\"載入專案以繼續\",\"noFileSelected\":\"沒有選擇檔案。\",\"select\":\"選擇專案\",\"selectHelp\":\"貼上你要封裝的專案網址、ID 或上傳檔案。\\n注意：若此專案並非你的作品，請標記原作者。\",\"url\":\"其他網址\"},\"theme\":{\"dark\":\"黑暗主題\",\"light\":\"明亮主題\",\"system\":\"使用系統主題\"}}");

/***/ }),

/***/ "./src/p4/Button.svelte":
/*!******************************!*\
  !*** ./src/p4/Button.svelte ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _packager_brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packager/brand */ "./src/packager/brand.js");
/* harmony import */ var _packager_brand__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_packager_brand__WEBPACK_IMPORTED_MODULE_1__);
/* src/p4/Button.svelte generated by Svelte v3.49.0 */




function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-16o14py", "button.svelte-16o14py.svelte-16o14py{position:relative;font-family:inherit;font-size:14px;color:white;border:none;padding:0.5rem 1rem;margin:0;border-radius:4px;overflow:hidden;cursor:pointer;font-family:inherit;font-weight:bold}.text.svelte-16o14py.svelte-16o14py{display:flex;align-items:center;justify-content:center;position:relative;z-index:10}.dimmer.svelte-16o14py.svelte-16o14py{display:none;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.25)}button.svelte-16o14py:active .dimmer.svelte-16o14py{display:block}");
}

function create_fragment(ctx) {
	let button;
	let div0;
	let t0;
	let div1;
	let t1;
	let mounted;
	let dispose;

	return {
		c() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*text*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "dimmer svelte-16o14py");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "text svelte-16o14py");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "svelte-16o14py");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(button, "background-color", /*getColor*/ ctx[1](), false);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t1);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", /*click_handler*/ ctx[4]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*text*/ 1) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, /*text*/ ctx[0]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { secondary } = $$props;
	let { dangerous } = $$props;
	let { text } = $$props;

	const getColor = () => {
		if (secondary) return '#0FBD8C';
		if (dangerous) return '#FF8C1A';
		return _packager_brand__WEBPACK_IMPORTED_MODULE_1__["ACCENT_COLOR"];
	};

	function click_handler(event) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bubble"].call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('secondary' in $$props) $$invalidate(2, secondary = $$props.secondary);
		if ('dangerous' in $$props) $$invalidate(3, dangerous = $$props.dangerous);
		if ('text' in $$props) $$invalidate(0, text = $$props.text);
	};

	return [text, getColor, secondary, dangerous, click_handler];
}

class Button extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { secondary: 2, dangerous: 3, text: 0 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/p4/ComplexMessage.svelte":
/*!**************************************!*\
  !*** ./src/p4/ComplexMessage.svelte ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _locales_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales/index */ "./src/locales/index.js");
/* src/p4/ComplexMessage.svelte generated by Svelte v3.49.0 */





function create_fragment(ctx) {
	let span;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			/*span_binding*/ ctx[3](span);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			/*span_binding*/ ctx[3](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { message } = $$props;
	let { values } = $$props;
	let el;

	const build = () => {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}

		const parts = message.split(/{(\w+)}/g);

		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			const isText = i % 2 === 0;

			if (isText) {
				el.appendChild(document.createTextNode(part));
			} else {
				const value = values && values[part];

				if (value) {
					const node = document.createElement('a');
					node.href = value.href;
					node.textContent = value.text;

					if (value.newTab) {
						node.target = '_blank';
						node.rel = 'noopener noreferrer';
					}

					el.appendChild(node);
				} else {
					console.warn('Missing placeholder', part);
					el.appendChild(document.createTextNode(`???{${part}}`));
				}
			}
		}
	};

	const unsubscribe = _locales_index__WEBPACK_IMPORTED_MODULE_2__["_"].subscribe(() => {
		if (el) {
			// message props don't get updated until after tick
			Object(svelte__WEBPACK_IMPORTED_MODULE_1__["tick"])().then(build);
		}
	});

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(build);
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onDestroy"])(unsubscribe);

	function span_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$props => {
		if ('message' in $$props) $$invalidate(1, message = $$props.message);
		if ('values' in $$props) $$invalidate(2, values = $$props.values);
	};

	return [el, message, values, span_binding];
}

class ComplexMessage extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { message: 1, values: 2 });
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ComplexMessage);

/***/ }),

/***/ "./src/p4/DropArea.svelte":
/*!********************************!*\
  !*** ./src/p4/DropArea.svelte ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* src/p4/DropArea.svelte generated by Svelte v3.49.0 */




function create_fragment(ctx) {
	let div;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "drop", /*drop_handler*/ ctx[4]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "dragover", /*dragover_handler*/ ctx[5]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "dragleave", /*dragleave_handler*/ ctx[6])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot_base"])(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[2],
						!current
						? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_all_dirty_from_scope"])(/*$$scope*/ ctx[2])
						: Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, /*$$scope*/ ctx[2], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { dropping = false } = $$props;
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

	const drop_handler = e => {
		if (e.dataTransfer.types.includes('Files') && e.dataTransfer.files[0]) {
			e.preventDefault();
			dispatch('drop', e.dataTransfer);
			$$invalidate(0, dropping = false);
		}
	};

	const dragover_handler = e => {
		if (e.dataTransfer.types.includes('Files')) {
			e.preventDefault();
			e.dataTransfer.dropEffect = 'copy';
			$$invalidate(0, dropping = true);
		}
	};

	const dragleave_handler = e => {
		$$invalidate(0, dropping = false);
	};

	$$self.$$set = $$props => {
		if ('dropping' in $$props) $$invalidate(0, dropping = $$props.dropping);
		if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [
		dropping,
		dispatch,
		$$scope,
		slots,
		drop_handler,
		dragover_handler,
		dragleave_handler
	];
}

class DropArea extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { dropping: 0 });
	}
}

/* harmony default export */ __webpack_exports__["default"] = (DropArea);

/***/ }),

/***/ "./src/p4/ImportProject.svelte":
/*!*************************************!*\
  !*** ./src/p4/ImportProject.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/transition/index.mjs");
/* harmony import */ var _locales___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales/ */ "./src/locales/index.js");
/* src/p4/ImportProject.svelte generated by Svelte v3.49.0 */






function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-4m5nmg", ".outer.svelte-4m5nmg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:20;background:rgba(255, 255, 255, 0.8);color:black;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;user-select:none}[theme=\"dark\"] .outer.svelte-4m5nmg{background:rgba(0, 0, 0, 0.8);color:white}.inner.svelte-4m5nmg{max-width:480px}");
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let h2;
	let t0_value = /*$_*/ ctx[0]('import.header') + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*$_*/ ctx[0]('import.description') + "";
	let t2;
	let t3;
	let button;
	let t4_value = /*$_*/ ctx[0]('import.cancel') + "";
	let t4;
	let div1_outro;
	let current;
	let mounted;
	let dispose;

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t4_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "inner svelte-4m5nmg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "outer svelte-4m5nmg");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, h2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h2, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t4);
			current = true;

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", /*cancel*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*$_*/ 1) && t0_value !== (t0_value = /*$_*/ ctx[0]('import.header') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if ((!current || dirty & /*$_*/ 1) && t2_value !== (t2_value = /*$_*/ ctx[0]('import.description') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);
			if ((!current || dirty & /*$_*/ 1) && t4_value !== (t4_value = /*$_*/ ctx[0]('import.cancel') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t4, t4_value);
		},
		i(local) {
			if (current) return;
			if (div1_outro) div1_outro.end(1);
			current = true;
		},
		o(local) {
			div1_outro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_out_transition"])(div1, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fade"], { duration: 200 });
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			if (detaching && div1_outro) div1_outro.end();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $_;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _locales___WEBPACK_IMPORTED_MODULE_3__["_"], $$value => $$invalidate(0, $_ = $$value));
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

	const cancel = () => {
		dispatch('cancel');
	};

	return [$_, cancel];
}

class ImportProject extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {}, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ImportProject);

/***/ }),

/***/ "./src/p4/Modals.svelte":
/*!******************************!*\
  !*** ./src/p4/Modals.svelte ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Section_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section.svelte */ "./src/p4/Section.svelte");
/* harmony import */ var _Button_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.svelte */ "./src/p4/Button.svelte");
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errors */ "./src/common/errors.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores */ "./src/p4/stores.js");
/* harmony import */ var _packager_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../packager/brand */ "./src/packager/brand.js");
/* harmony import */ var _packager_brand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_packager_brand__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locales___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../locales/ */ "./src/locales/index.js");
/* harmony import */ var _ComplexMessage_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ComplexMessage.svelte */ "./src/p4/ComplexMessage.svelte");
/* src/p4/Modals.svelte generated by Svelte v3.49.0 */












function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-15nxjx", "[p4-modal-visible]{overflow:hidden}.modal.svelte-15nxjx{position:fixed;top:0;left:0;width:100%;height:100%;z-index:20;display:flex;align-items:center;justify-content:center;background-color:rgba(0, 0, 0, 0.75);word-break:break-word}.technical.svelte-15nxjx{font-style:italic}");
}

// (84:0) {#if modalVisible}
function create_if_block(ctx) {
	let div;
	let section;
	let current;
	let mounted;
	let dispose;

	section = new _Section_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				modal: true,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(section.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "modal svelte-15nxjx");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(section, div, null);
			/*div_binding*/ ctx[8](div);
			current = true;

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["self"])(/*closeModal*/ ctx[4]));
				mounted = true;
			}
		},
		p(ctx, dirty) {
			const section_changes = {};

			if (dirty & /*$$scope, $_, $error*/ 1036) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(section);
			/*div_binding*/ ctx[8](null);
			mounted = false;
			dispose();
		}
	};
}

// (141:6) {:else}
function create_else_block(ctx) {
	let p0;
	let t0_value = /*$_*/ ctx[3]('p4.errorMessage').replace('{error}', /*$error*/ ctx[2]) + "";
	let t0;
	let t1;
	let p1;
	let button;
	let t2;
	let a;
	let t3_value = /*$_*/ ctx[3]('p4.reportBug') + "";
	let t3;
	let a_href_value;
	let current;

	button = new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: { text: /*$_*/ ctx[3]('p4.close') }
		});

	button.$on("click", /*closeModal*/ ctx[4]);

	return {
		c() {
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", a_href_value = _packager_brand__WEBPACK_IMPORTED_MODULE_5__["FEEDBACK_PRIMARY"].link);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, p1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t3);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*$_, $error*/ 12) && t0_value !== (t0_value = /*$_*/ ctx[3]('p4.errorMessage').replace('{error}', /*$error*/ ctx[2]) + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			const button_changes = {};
			if (dirty & /*$_*/ 8) button_changes.text = /*$_*/ ctx[3]('p4.close');
			button.$set(button_changes);
			if ((!current || dirty & /*$_*/ 8) && t3_value !== (t3_value = /*$_*/ ctx[3]('p4.reportBug') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t3, t3_value);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button);
		}
	};
}

// (116:59) 
function create_if_block_4(ctx) {
	let p0;
	let t0_value = /*$_*/ ctx[3]('p4.cannotAccessProject') + "";
	let t0;
	let t1;
	let p1;
	let t2_value = /*$_*/ ctx[3]('select.unsharedProjects') + "";
	let t2;
	let t3;
	let p2;
	let complexmessage;
	let t4;
	let p3;
	let t5_value = /*$_*/ ctx[3]('p4.cannotAccessProjectCaching') + "";
	let t5;
	let t6;
	let p4;
	let button;
	let current;

	complexmessage = new _ComplexMessage_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({
			props: {
				message: /*$_*/ ctx[3]('select.unsharedProjectsMore'),
				values: {
					link: {
						text: 'https://docs.turbowarp.org/unshared-projects',
						href: 'https://docs.turbowarp.org/unshared-projects',
						newTab: true
					}
				}
			}
		});

	button = new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: { text: /*$_*/ ctx[3]('p4.close') }
		});

	button.$on("click", /*closeModal*/ ctx[4]);

	return {
		c() {
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(complexmessage.$$.fragment);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t5_value);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(complexmessage, p2, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p3, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t6, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, p4, null);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*$_*/ 8) && t0_value !== (t0_value = /*$_*/ ctx[3]('p4.cannotAccessProject') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if ((!current || dirty & /*$_*/ 8) && t2_value !== (t2_value = /*$_*/ ctx[3]('select.unsharedProjects') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);
			const complexmessage_changes = {};
			if (dirty & /*$_*/ 8) complexmessage_changes.message = /*$_*/ ctx[3]('select.unsharedProjectsMore');
			complexmessage.$set(complexmessage_changes);
			if ((!current || dirty & /*$_*/ 8) && t5_value !== (t5_value = /*$_*/ ctx[3]('p4.cannotAccessProjectCaching') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t5, t5_value);
			const button_changes = {};
			if (dirty & /*$_*/ 8) button_changes.text = /*$_*/ ctx[3]('p4.close');
			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(complexmessage.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(complexmessage.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(complexmessage);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p3);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t6);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button);
		}
	};
}

// (109:56) 
function create_if_block_3(ctx) {
	let p0;
	let t0_value = /*$_*/ ctx[3]('p4.outdated') + "";
	let t0;
	let t1;
	let p1;
	let t2;
	let t3;
	let p2;
	let button0;
	let t4;
	let button1;
	let current;

	button0 = new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: { text: /*$_*/ ctx[3]('p4.refresh') }
		});

	button0.$on("click", /*refresh*/ ctx[6]);

	button1 = new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				secondary: true,
				text: /*$_*/ ctx[3]('p4.close')
			}
		});

	button1.$on("click", /*closeModal*/ ctx[4]);

	return {
		c() {
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*$error*/ ctx[2]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button0.$$.fragment);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button1.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p1, "class", "technical svelte-15nxjx");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button0, p2, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p2, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button1, p2, null);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*$_*/ 8) && t0_value !== (t0_value = /*$_*/ ctx[3]('p4.outdated') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if (!current || dirty & /*$error*/ 4) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, /*$error*/ ctx[2]);
			const button0_changes = {};
			if (dirty & /*$_*/ 8) button0_changes.text = /*$_*/ ctx[3]('p4.refresh');
			button0.$set(button0_changes);
			const button1_changes = {};
			if (dirty & /*$_*/ 8) button1_changes.text = /*$_*/ ctx[3]('p4.close');
			button1.$set(button1_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button1.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button1);
		}
	};
}

// (93:54) 
function create_if_block_2(ctx) {
	let p0;
	let complexmessage;
	let t;
	let p1;
	let button;
	let current;

	complexmessage = new _ComplexMessage_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({
			props: {
				message: /*$_*/ ctx[3]('p4.networkError'),
				values: {
					url: {
						text: /*$error*/ ctx[2].url,
						href: /*$error*/ ctx[2].url,
						newTab: true
					}
				}
			}
		});

	button = new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: { text: /*$_*/ ctx[3]('p4.close') }
		});

	button.$on("click", /*closeModal*/ ctx[4]);

	return {
		c() {
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(complexmessage.$$.fragment);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(complexmessage, p0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, p1, null);
			current = true;
		},
		p(ctx, dirty) {
			const complexmessage_changes = {};
			if (dirty & /*$_*/ 8) complexmessage_changes.message = /*$_*/ ctx[3]('p4.networkError');

			if (dirty & /*$error*/ 4) complexmessage_changes.values = {
				url: {
					text: /*$error*/ ctx[2].url,
					href: /*$error*/ ctx[2].url,
					newTab: true
				}
			};

			complexmessage.$set(complexmessage_changes);
			const button_changes = {};
			if (dirty & /*$_*/ 8) button_changes.text = /*$_*/ ctx[3]('p4.close');
			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(complexmessage.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(complexmessage.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(complexmessage);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button);
		}
	};
}

// (88:6) {#if $error instanceof UserError}
function create_if_block_1(ctx) {
	let p0;
	let t0_value = /*$error*/ ctx[2].message + "";
	let t0;
	let t1;
	let p1;
	let button;
	let current;

	button = new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: { text: /*$_*/ ctx[3]('p4.close') }
		});

	button.$on("click", /*closeModal*/ ctx[4]);

	return {
		c() {
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, p1, null);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*$error*/ 4) && t0_value !== (t0_value = /*$error*/ ctx[2].message + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			const button_changes = {};
			if (dirty & /*$_*/ 8) button_changes.text = /*$_*/ ctx[3]('p4.close');
			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button);
		}
	};
}

// (86:4) <Section modal>
function create_default_slot(ctx) {
	let h2;
	let t0_value = /*$_*/ ctx[3]('p4.error') + "";
	let t0;
	let t1;
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;

	const if_block_creators = [
		create_if_block_1,
		create_if_block_2,
		create_if_block_3,
		create_if_block_4,
		create_else_block
	];

	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$error*/ ctx[2] instanceof _common_errors__WEBPACK_IMPORTED_MODULE_3__["UserError"]) return 0;
		if (/*$error*/ ctx[2] instanceof _common_errors__WEBPACK_IMPORTED_MODULE_3__["UnknownNetworkError"]) return 1;
		if (/*$error*/ ctx[2] instanceof _common_errors__WEBPACK_IMPORTED_MODULE_3__["OutdatedPackagerError"]) return 2;
		if (/*$error*/ ctx[2] instanceof _common_errors__WEBPACK_IMPORTED_MODULE_3__["CannotAccessProjectError"]) return 3;
		return 4;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h2, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*$_*/ 8) && t0_value !== (t0_value = /*$_*/ ctx[3]('p4.error') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let mounted;
	let dispose;
	let if_block = /*modalVisible*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(window, "keydown", /*onKeyDown*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*modalVisible*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*modalVisible*/ 1) {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block_anchor);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $error;
	let $_;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _stores__WEBPACK_IMPORTED_MODULE_4__["error"], $$value => $$invalidate(2, $error = $$value));
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _locales___WEBPACK_IMPORTED_MODULE_6__["_"], $$value => $$invalidate(3, $_ = $$value));
	let { modalVisible } = $$props;
	let modalElement;
	let initiallyFocusedElement;
	const getAllFocusableElements = () => Array.from(document.querySelectorAll('a, button, input, select')).filter(i => !modalElement || !modalElement.contains(i));

	const closeModal = () => {
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_store_value"])(_stores__WEBPACK_IMPORTED_MODULE_4__["error"], $error = null, $error);
	};

	const onKeyDown = e => {
		if (e.key === 'Escape') {
			closeModal();
		}
	};

	const refresh = () => location.reload();

	function div_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? 'unshift' : 'push'](() => {
			modalElement = $$value;
			$$invalidate(1, modalElement);
		});
	}

	$$self.$$set = $$props => {
		if ('modalVisible' in $$props) $$invalidate(0, modalVisible = $$props.modalVisible);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$error, initiallyFocusedElement*/ 132) {
			$: {
				$$invalidate(0, modalVisible = !!$error);

				if ($error) {
					console.error($error);
					document.body.setAttribute('p4-modal-visible', '');
					$$invalidate(7, initiallyFocusedElement = document.activeElement);

					getAllFocusableElements().forEach(i => {
						i.setAttribute('p4-old-tabIndex', i.tabIndex);
						i.tabIndex = -1;
					});
				} else {
					document.body.removeAttribute('p4-modal-visible');

					getAllFocusableElements().forEach(i => {
						if (i.hasAttribute('p4-old-tabIndex')) {
							i.tabIndex = i.getAttribute('p4-old-tabIndex');
							i.removeAttribute('p4-old-tabIndex');
						}
					});

					if (initiallyFocusedElement) {
						initiallyFocusedElement.focus();
					}
				}
			}
		}

		if ($$self.$$.dirty & /*modalElement*/ 2) {
			$: if (modalElement) {
				const button = modalElement.querySelector('button');

				if (button) {
					button.focus();
				}
			}
		}
	};

	return [
		modalVisible,
		modalElement,
		$error,
		$_,
		closeModal,
		onKeyDown,
		refresh,
		initiallyFocusedElement,
		div_binding
	];
}

class Modals extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { modalVisible: 0 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Modals);

/***/ }),

/***/ "./src/p4/News.svelte":
/*!****************************!*\
  !*** ./src/p4/News.svelte ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Section_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section.svelte */ "./src/p4/Section.svelte");
/* src/p4/News.svelte generated by Svelte v3.49.0 */



const color = '#b117f8';

class News extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, null, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./src/p4/P4.svelte":
/*!**************************!*\
  !*** ./src/p4/P4.svelte ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _locales___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/ */ "./src/locales/index.js");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/transition/index.mjs");
/* harmony import */ var _ComplexMessage_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComplexMessage.svelte */ "./src/p4/ComplexMessage.svelte");
/* harmony import */ var _Section_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section.svelte */ "./src/p4/Section.svelte");
/* harmony import */ var _SelectProject_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectProject.svelte */ "./src/p4/SelectProject.svelte");
/* harmony import */ var _SelectLocale_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectLocale.svelte */ "./src/p4/SelectLocale.svelte");
/* harmony import */ var _SelectTheme_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectTheme.svelte */ "./src/p4/SelectTheme.svelte");
/* harmony import */ var _Progress_svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Progress.svelte */ "./src/p4/Progress.svelte");
/* harmony import */ var _Modals_svelte__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modals.svelte */ "./src/p4/Modals.svelte");
/* harmony import */ var _News_svelte__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./News.svelte */ "./src/p4/News.svelte");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stores */ "./src/p4/stores.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./environment */ "./src/p4/environment.js");
/* harmony import */ var _packager_brand__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../packager/brand */ "./src/packager/brand.js");
/* harmony import */ var _packager_brand__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_packager_brand__WEBPACK_IMPORTED_MODULE_13__);
/* src/p4/P4.svelte generated by Svelte v3.49.0 */

















function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-98renn", ":root{font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif}[theme=\"dark\"]{background:#111;color:#eee;color-scheme:dark}a{color:blue}[theme=\"dark\"] a{color:#56b2ff}a:active{color:red}input[type=\"text\"],input[type=\"number\"],textarea{padding:2px}input[type=\"text\"],input[type=\"number\"],textarea,.is-not-safari select{background-color:white;color:black;border:1px solid rgb(160, 160, 160);border-radius:2px}.is-not-safari select:hover{border-color:rgb(30, 30, 30)}[theme=\"dark\"] input[type=\"text\"],[theme=\"dark\"] input[type=\"number\"],[theme=\"dark\"] textarea,[theme=\"dark\"] .is-not-safari select{background-color:#333;color:white;border-color:#888}[theme=\"dark\"] .is-not-safari select:hover{border-color:#bbb}p,h1,h2,h3{margin:12px 0}summary{cursor:pointer}input{font-size:0.8em}main.svelte-98renn.svelte-98renn{padding-bottom:10px}footer.svelte-98renn.svelte-98renn{text-align:center}footer.svelte-98renn>div.svelte-98renn{margin-top:12px}.disclaimer.svelte-98renn.svelte-98renn{font-style:italic}.version.svelte-98renn.svelte-98renn{font-size:small;opacity:0.8}.version.svelte-98renn a.svelte-98renn{color:inherit}");
}

function get_then_context(ctx) {
	ctx[14] = ctx[15].default;
}

// (126:6) {#if version}
function create_if_block_7(ctx) {
	let p;
	let t0;
	let t1;
	let if_block = _environment__WEBPACK_IMPORTED_MODULE_12__["isStandalone"] && create_if_block_8(ctx);

	return {
		c() {
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(_environment__WEBPACK_IMPORTED_MODULE_12__["version"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p, "class", "version svelte-98renn");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t1);
			if (if_block) if_block.m(p, null);
		},
		p(ctx, dirty) {
			if (_environment__WEBPACK_IMPORTED_MODULE_12__["isStandalone"]) if_block.p(ctx, dirty);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
			if (if_block) if_block.d();
		}
	};
}

// (129:10) {#if isStandalone}
function create_if_block_8(ctx) {
	let t0;
	let a;
	let t1;

	return {
		c() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("- ");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(_packager_brand__WEBPACK_IMPORTED_MODULE_13__["WEBSITE"]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", _packager_brand__WEBPACK_IMPORTED_MODULE_13__["WEBSITE"]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "class", "svelte-98renn");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, a, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t1);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(a);
		}
	};
}

// (123:2) <Section accent={ACCENT_COLOR}>
function create_default_slot_4(ctx) {
	let div;
	let h1;
	let t1;
	let t2;
	let p0;
	let t3_value = /*$_*/ ctx[3]('p4.description1') + "";
	let t3;
	let t4;
	let p1;
	let complexmessage0;
	let t5;
	let p2;
	let complexmessage1;
	let t6;
	let p3;
	let t7_value = /*$_*/ ctx[3]('p4.disclaimer') + "";
	let t7;
	let current;
	let if_block = _environment__WEBPACK_IMPORTED_MODULE_12__["version"] && create_if_block_7(ctx);

	complexmessage0 = new _ComplexMessage_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				message: /*$_*/ ctx[3]('p4.description2'),
				values: {
					embedding: {
						text: /*$_*/ ctx[3]('p4.description2-embedding'),
						href: 'https://docs.turbowarp.org/embedding'
					}
				}
			}
		});

	complexmessage1 = new _ComplexMessage_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				message: /*$_*/ ctx[3]('p4.description3'),
				values: {
					// These placeholders are named this way for legacy reasons.
					onScratch: {
						text: /*$_*/ ctx[3]('p4.description3-on').replace('{brand}', _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_PRIMARY"].name),
						href: _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_PRIMARY"].link
					},
					onGitHub: {
						text: /*$_*/ ctx[3]('p4.description3-on').replace('{brand}', _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_SECONDARY"].name),
						href: _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_SECONDARY"].link
					}
				}
			}
		});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h1.textContent = `${_packager_brand__WEBPACK_IMPORTED_MODULE_13__["APP_NAME"]}`;
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(complexmessage0.$$.fragment);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(complexmessage1.$$.fragment);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t7_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(p3, "class", "disclaimer svelte-98renn");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t1);
			if (if_block) if_block.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(complexmessage0, p1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(complexmessage1, p2, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, p3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p3, t7);
			current = true;
		},
		p(ctx, dirty) {
			if (_environment__WEBPACK_IMPORTED_MODULE_12__["version"]) if_block.p(ctx, dirty);
			if ((!current || dirty & /*$_*/ 8) && t3_value !== (t3_value = /*$_*/ ctx[3]('p4.description1') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t3, t3_value);
			const complexmessage0_changes = {};
			if (dirty & /*$_*/ 8) complexmessage0_changes.message = /*$_*/ ctx[3]('p4.description2');

			if (dirty & /*$_*/ 8) complexmessage0_changes.values = {
				embedding: {
					text: /*$_*/ ctx[3]('p4.description2-embedding'),
					href: 'https://docs.turbowarp.org/embedding'
				}
			};

			complexmessage0.$set(complexmessage0_changes);
			const complexmessage1_changes = {};
			if (dirty & /*$_*/ 8) complexmessage1_changes.message = /*$_*/ ctx[3]('p4.description3');

			if (dirty & /*$_*/ 8) complexmessage1_changes.values = {
				// These placeholders are named this way for legacy reasons.
				onScratch: {
					text: /*$_*/ ctx[3]('p4.description3-on').replace('{brand}', _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_PRIMARY"].name),
					href: _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_PRIMARY"].link
				},
				onGitHub: {
					text: /*$_*/ ctx[3]('p4.description3-on').replace('{brand}', _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_SECONDARY"].name),
					href: _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_SECONDARY"].link
				}
			};

			complexmessage1.$set(complexmessage1_changes);
			if ((!current || dirty & /*$_*/ 8) && t7_value !== (t7_value = /*$_*/ ctx[3]('p4.disclaimer') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t7, t7_value);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(complexmessage0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(complexmessage1.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(complexmessage0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(complexmessage1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (if_block) if_block.d();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(complexmessage0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(complexmessage1);
		}
	};
}

// (168:2) {#if !isStandalone}
function create_if_block_6(ctx) {
	let news;
	let current;
	news = new _News_svelte__WEBPACK_IMPORTED_MODULE_10__["default"]({});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(news.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(news, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(news.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(news.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(news, detaching);
		}
	};
}

// (174:2) {:else}
function create_else_block(ctx) {
	let section;
	let current;

	section = new _Section_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				accent: "#4C97FF",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(section.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(section, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const section_changes = {};

			if (dirty & /*$$scope, $_*/ 65544) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(section, detaching);
		}
	};
}

// (172:2) {#if isSupported}
function create_if_block_5(ctx) {
	let selectproject;
	let updating_projectData;
	let current;

	function selectproject_projectData_binding(value) {
		/*selectproject_projectData_binding*/ ctx[9](value);
	}

	let selectproject_props = {};

	if (/*projectData*/ ctx[0] !== void 0) {
		selectproject_props.projectData = /*projectData*/ ctx[0];
	}

	selectproject = new _SelectProject_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: selectproject_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(selectproject, 'projectData', selectproject_projectData_binding));

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(selectproject.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(selectproject, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const selectproject_changes = {};

			if (!updating_projectData && dirty & /*projectData*/ 1) {
				updating_projectData = true;
				selectproject_changes.projectData = /*projectData*/ ctx[0];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_projectData = false);
			}

			selectproject.$set(selectproject_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(selectproject.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(selectproject.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(selectproject, detaching);
		}
	};
}

// (175:4) <Section accent="#4C97FF">
function create_default_slot_3(ctx) {
	let h2;
	let t0_value = /*$_*/ ctx[3]('p4.browserNotSupported') + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*$_*/ ctx[3]('p4.browserNotSupportedDescription') + "";
	let t2;

	return {
		c() {
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h2, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*$_*/ 8 && t0_value !== (t0_value = /*$_*/ ctx[3]('p4.browserNotSupported') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if (dirty & /*$_*/ 8 && t2_value !== (t2_value = /*$_*/ ctx[3]('p4.browserNotSupportedDescription') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
		}
	};
}

// (181:2) {#if projectData}
function create_if_block_4(ctx) {
	let await_block_anchor;
	let promise;
	let current;

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: true,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 15,
		blocks: [,,,]
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["handle_promise"])(promise = /*getPackagerOptionsComponent*/ ctx[5](), info);

	return {
		c() {
			await_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			info.block.c();
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_await_block_branch"])(info, ctx, dirty);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(info.block);
			current = true;
		},
		o(local) {
			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(block);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};
}

// (193:4) {:catch}
function create_catch_block(ctx) {
	let section;
	let current;

	section = new _Section_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				center: true,
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(section.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(section, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const section_changes = {};

			if (dirty & /*$$scope, $_*/ 65544) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(section, detaching);
		}
	};
}

// (194:6) <Section center>
function create_default_slot_2(ctx) {
	let p;
	let t_value = /*$_*/ ctx[3]('p4.unknownImportError') + "";
	let t;

	return {
		c() {
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t);
		},
		p(ctx, dirty) {
			if (dirty & /*$_*/ 8 && t_value !== (t_value = /*$_*/ ctx[3]('p4.unknownImportError') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
		}
	};
}

// (186:4) {:then { default: PackagerOptions }}
function create_then_block(ctx) {
	get_then_context(ctx);
	let div;
	let packageroptions;
	let updating_title;
	let div_intro;
	let current;

	function packageroptions_title_binding(value) {
		/*packageroptions_title_binding*/ ctx[10](value);
	}

	let packageroptions_props = { projectData: /*projectData*/ ctx[0] };

	if (/*title*/ ctx[1] !== void 0) {
		packageroptions_props.title = /*title*/ ctx[1];
	}

	packageroptions = new /*PackagerOptions*/ ctx[14]({ props: packageroptions_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(packageroptions, 'title', packageroptions_title_binding));

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(packageroptions.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(packageroptions, div, null);
			current = true;
		},
		p(ctx, dirty) {
			get_then_context(ctx);
			const packageroptions_changes = {};
			if (dirty & /*projectData*/ 1) packageroptions_changes.projectData = /*projectData*/ ctx[0];

			if (!updating_title && dirty & /*title*/ 2) {
				updating_title = true;
				packageroptions_changes.title = /*title*/ ctx[1];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_title = false);
			}

			packageroptions.$set(packageroptions_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(packageroptions.$$.fragment, local);

			if (!div_intro) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
					div_intro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_in_transition"])(div, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fade"], {});
					div_intro.start();
				});
			}

			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(packageroptions.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(packageroptions);
		}
	};
}

// (182:42)        <Section center>         <Progress text={$_('p4.importingInterface')}
function create_pending_block(ctx) {
	let section;
	let current;

	section = new _Section_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				center: true,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(section.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(section, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const section_changes = {};

			if (dirty & /*$$scope, $_*/ 65544) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(section, detaching);
		}
	};
}

// (183:6) <Section center>
function create_default_slot_1(ctx) {
	let progress_1;
	let current;

	progress_1 = new _Progress_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				text: /*$_*/ ctx[3]('p4.importingInterface')
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(progress_1.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(progress_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const progress_1_changes = {};
			if (dirty & /*$_*/ 8) progress_1_changes.text = /*$_*/ ctx[3]('p4.importingInterface');
			progress_1.$set(progress_1_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(progress_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(progress_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(progress_1, detaching);
		}
	};
}

// (202:2) {#if $progress.visible}
function create_if_block_3(ctx) {
	let section;
	let current;

	section = new _Section_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				center: true,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(section.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(section, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const section_changes = {};

			if (dirty & /*$$scope, $progress*/ 65552) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(section, detaching);
		}
	};
}

// (203:4) <Section center>
function create_default_slot(ctx) {
	let progress_1;
	let current;

	progress_1 = new _Progress_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({
			props: {
				progress: /*$progress*/ ctx[4].progress,
				text: /*$progress*/ ctx[4].text
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(progress_1.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(progress_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const progress_1_changes = {};
			if (dirty & /*$progress*/ 16) progress_1_changes.progress = /*$progress*/ ctx[4].progress;
			if (dirty & /*$progress*/ 16) progress_1_changes.text = /*$progress*/ ctx[4].text;
			progress_1.$set(progress_1_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(progress_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(progress_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(progress_1, detaching);
		}
	};
}

// (210:6) {#if !isStandalone}
function create_if_block_2(ctx) {
	let a;
	let t0_value = /*$_*/ ctx[3]('p4.privacy') + "";
	let t0;
	let t1;
	let span;

	return {
		c() {
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = "-";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", "privacy.html");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, a, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*$_*/ 8 && t0_value !== (t0_value = /*$_*/ ctx[3]('p4.privacy') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(a);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
		}
	};
}

// (215:6) {#if SOURCE_CODE}
function create_if_block_1(ctx) {
	let span;
	let t1;
	let a;
	let t2_value = /*$_*/ ctx[3]('p4.sourceCode') + "";
	let t2;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = "-";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", _packager_brand__WEBPACK_IMPORTED_MODULE_13__["SOURCE_CODE"]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, a, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*$_*/ 8 && t2_value !== (t2_value = /*$_*/ ctx[3]('p4.sourceCode') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(a);
		}
	};
}

// (219:6) {#if DONATE}
function create_if_block(ctx) {
	let span;
	let t1;
	let a;
	let t2_value = /*$_*/ ctx[3]('p4.donate') + "";
	let t2;

	return {
		c() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span.textContent = "-";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a, "href", _packager_brand__WEBPACK_IMPORTED_MODULE_13__["DONATE"]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, a, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*$_*/ 8 && t2_value !== (t2_value = /*$_*/ ctx[3]('p4.donate') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(a);
		}
	};
}

function create_fragment(ctx) {
	let modals;
	let updating_modalVisible;
	let t0;
	let main;
	let section;
	let t1;
	let t2;
	let current_block_type_index;
	let if_block1;
	let t3;
	let t4;
	let t5;
	let footer;
	let div0;
	let t6;
	let a0;
	let t7_value = /*$_*/ ctx[3]('p4.feedback') + "";
	let t7;
	let a0_href_value;
	let t8;
	let t9;
	let t10;
	let div1;
	let a1;
	let t11_value = /*$_*/ ctx[3]('p4.documentation') + "";
	let t11;
	let t12;
	let div2;
	let a2;
	let t13_value = /*$_*/ ctx[3]('p4.cfp') + "";
	let t13;
	let t14;
	let div3;
	let a3;
	let t15_value = /*$_*/ ctx[3]('p4.ghp') + "";
	let t15;
	let t16;
	let div4;
	let a4;
	let t17_value = /*$_*/ ctx[3]('p4.vc') + "";
	let t17;
	let t18;
	let div5;
	let a5;
	let t19_value = /*$_*/ ctx[3]('p4.la') + "";
	let t19;
	let t20;
	let div6;
	let selecttheme;
	let t21;
	let div7;
	let selectlocale;
	let current;

	function modals_modalVisible_binding(value) {
		/*modals_modalVisible_binding*/ ctx[8](value);
	}

	let modals_props = {};

	if (/*modalVisible*/ ctx[2] !== void 0) {
		modals_props.modalVisible = /*modalVisible*/ ctx[2];
	}

	modals = new _Modals_svelte__WEBPACK_IMPORTED_MODULE_9__["default"]({ props: modals_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(() => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(modals, 'modalVisible', modals_modalVisible_binding));

	section = new _Section_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				accent: _packager_brand__WEBPACK_IMPORTED_MODULE_13__["ACCENT_COLOR"],
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	let if_block0 = !_environment__WEBPACK_IMPORTED_MODULE_12__["isStandalone"] && create_if_block_6(ctx);
	const if_block_creators = [create_if_block_5, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (_environment__WEBPACK_IMPORTED_MODULE_12__["isSupported"]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let if_block2 = /*projectData*/ ctx[0] && create_if_block_4(ctx);
	let if_block3 = /*$progress*/ ctx[4].visible && create_if_block_3(ctx);
	let if_block4 = !_environment__WEBPACK_IMPORTED_MODULE_12__["isStandalone"] && create_if_block_2(ctx);
	let if_block5 = _packager_brand__WEBPACK_IMPORTED_MODULE_13__["SOURCE_CODE"] && create_if_block_1(ctx);
	let if_block6 = _packager_brand__WEBPACK_IMPORTED_MODULE_13__["DONATE"] && create_if_block(ctx);
	selecttheme = new _SelectTheme_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({});
	selectlocale = new _SelectLocale_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(modals.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(section.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block0) if_block0.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if_block1.c();
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block2) if_block2.c();
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block3) if_block3.c();
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			footer = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("footer");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block4) if_block4.c();
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			a0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t7_value);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block5) if_block5.c();
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block6) if_block6.c();
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t11_value);
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t13_value);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t15_value);
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t17 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t17_value);
			t18 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			a5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t19 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t19_value);
			t20 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(selecttheme.$$.fragment);
			t21 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(selectlocale.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a0, "href", a0_href_value = _packager_brand__WEBPACK_IMPORTED_MODULE_13__["FEEDBACK_PRIMARY"].link);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a1, "href", "https://docs.turbowarp.org/packager");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a2, "href", "https://pages.cloudflare.com/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a3, "href", "https://pages.github.com/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a4, "href", "https://vercel.com/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(a5, "href", "https://packager.turbowarp.org/");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div5, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div6, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div7, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(footer, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "aria-hidden", /*modalVisible*/ ctx[2]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "class", "svelte-98renn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(main, "is-not-safari", !_environment__WEBPACK_IMPORTED_MODULE_12__["isSafari"]);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(modals, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, main, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(section, main, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t1);
			if (if_block0) if_block0.m(main, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t2);
			if_blocks[current_block_type_index].m(main, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t3);
			if (if_block2) if_block2.m(main, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t4);
			if (if_block3) if_block3.m(main, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(main, footer);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div0);
			if (if_block4) if_block4.m(div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, a0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a0, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t8);
			if (if_block5) if_block5.m(div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t9);
			if (if_block6) if_block6.m(div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, a1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a1, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, a2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a2, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, t14);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, a3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a3, t15);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, t16);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, a4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a4, t17);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, t18);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div5, a5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(a5, t19);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, t20);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(selecttheme, div6, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, t21);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(footer, div7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(selectlocale, div7, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const modals_changes = {};

			if (!updating_modalVisible && dirty & /*modalVisible*/ 4) {
				updating_modalVisible = true;
				modals_changes.modalVisible = /*modalVisible*/ ctx[2];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(() => updating_modalVisible = false);
			}

			modals.$set(modals_changes);
			const section_changes = {};

			if (dirty & /*$$scope, $_*/ 65544) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
			if_block1.p(ctx, dirty);

			if (/*projectData*/ ctx[0]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*projectData*/ 1) {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_4(ctx);
					if_block2.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
					if_block2.m(main, t4);
				}
			} else if (if_block2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (/*$progress*/ ctx[4].visible) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty & /*$progress*/ 16) {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block_3(ctx);
					if_block3.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block3, 1);
					if_block3.m(main, t5);
				}
			} else if (if_block3) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (!_environment__WEBPACK_IMPORTED_MODULE_12__["isStandalone"]) if_block4.p(ctx, dirty);
			if ((!current || dirty & /*$_*/ 8) && t7_value !== (t7_value = /*$_*/ ctx[3]('p4.feedback') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t7, t7_value);
			if (_packager_brand__WEBPACK_IMPORTED_MODULE_13__["SOURCE_CODE"]) if_block5.p(ctx, dirty);
			if (_packager_brand__WEBPACK_IMPORTED_MODULE_13__["DONATE"]) if_block6.p(ctx, dirty);
			if ((!current || dirty & /*$_*/ 8) && t11_value !== (t11_value = /*$_*/ ctx[3]('p4.documentation') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t11, t11_value);
			if ((!current || dirty & /*$_*/ 8) && t13_value !== (t13_value = /*$_*/ ctx[3]('p4.cfp') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t13, t13_value);
			if ((!current || dirty & /*$_*/ 8) && t15_value !== (t15_value = /*$_*/ ctx[3]('p4.ghp') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t15, t15_value);
			if ((!current || dirty & /*$_*/ 8) && t17_value !== (t17_value = /*$_*/ ctx[3]('p4.vc') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t17, t17_value);
			if ((!current || dirty & /*$_*/ 8) && t19_value !== (t19_value = /*$_*/ ctx[3]('p4.la') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t19, t19_value);

			if (!current || dirty & /*modalVisible*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(main, "aria-hidden", /*modalVisible*/ ctx[2]);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(modals.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(section.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(selecttheme.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(selectlocale.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(modals.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(section.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(selecttheme.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(selectlocale.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(modals, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(main);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(section);
			if (if_block0) if_block0.d();
			if_blocks[current_block_type_index].d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
			if (if_block5) if_block5.d();
			if (if_block6) if_block6.d();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(selecttheme);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(selectlocale);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $error;
	let $theme;
	let $_;
	let $progress;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _stores__WEBPACK_IMPORTED_MODULE_11__["error"], $$value => $$invalidate(11, $error = $$value));
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _stores__WEBPACK_IMPORTED_MODULE_11__["theme"], $$value => $$invalidate(7, $theme = $$value));
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _locales___WEBPACK_IMPORTED_MODULE_1__["_"], $$value => $$invalidate(3, $_ = $$value));
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _stores__WEBPACK_IMPORTED_MODULE_11__["progress"], $$value => $$invalidate(4, $progress = $$value));
	let projectData;
	const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
	let systemTheme = darkMedia.matches ? 'dark' : 'light';

	if (darkMedia.addEventListener) {
		darkMedia.addEventListener('change', () => {
			$$invalidate(6, systemTheme = darkMedia.matches ? 'dark' : 'light');
		});
	}

	let modalVisible = false;
	const defaultTitle = document.title;
	let title = '';

	const getPackagerOptionsComponent = () => __webpack_require__.e(/*! import() | packager-options-ui */ "packager-options-ui").then(__webpack_require__.bind(null, /*! ./PackagerOptions.svelte */ "./src/p4/PackagerOptions.svelte")).catch(err => {
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_store_value"])(_stores__WEBPACK_IMPORTED_MODULE_11__["error"], $error = err, $error);
	});

	// We know for sure we will need this component very soon, so start loading it immediately.
	getPackagerOptionsComponent();

	function modals_modalVisible_binding(value) {
		modalVisible = value;
		$$invalidate(2, modalVisible);
	}

	function selectproject_projectData_binding(value) {
		projectData = value;
		$$invalidate(0, projectData);
	}

	function packageroptions_title_binding(value) {
		title = value;
		$$invalidate(1, title);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$theme, systemTheme*/ 192) {
			$: document.documentElement.setAttribute('theme', $theme === 'system' ? systemTheme : $theme);
		}

		if ($$self.$$.dirty & /*projectData, title*/ 3) {
			$: document.title = projectData && title
			? `${title} - ${_packager_brand__WEBPACK_IMPORTED_MODULE_13__["APP_NAME"]}`
			: defaultTitle;
		}
	};

	return [
		projectData,
		title,
		modalVisible,
		$_,
		$progress,
		getPackagerOptionsComponent,
		systemTheme,
		$theme,
		modals_modalVisible_binding,
		selectproject_projectData_binding,
		packageroptions_title_binding
	];
}

class P4 extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {}, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (P4);

/***/ }),

/***/ "./src/p4/Progress.svelte":
/*!********************************!*\
  !*** ./src/p4/Progress.svelte ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/p4/Progress.svelte generated by Svelte v3.49.0 */


function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-19rq0vp", ".progress.svelte-19rq0vp{display:flex;align-items:center;flex-direction:column}.bar-outer.svelte-19rq0vp{width:200px;height:10px;border:1px solid currentColor;margin-bottom:4px;background:black}[theme=\"dark\"] .bar-outer.svelte-19rq0vp{background:transparent}.bar-inner.svelte-19rq0vp{height:100%;width:0;background:white}.text.svelte-19rq0vp{font-style:italic}");
}

function create_fragment(ctx) {
	let div3;
	let div1;
	let div0;
	let t0;
	let div2;
	let t1;

	return {
		c() {
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(/*text*/ ctx[1]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "bar-inner svelte-19rq0vp");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div0, "width", `${/*progress*/ ctx[0] * 100}%`, false);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "bar-outer svelte-19rq0vp");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "text svelte-19rq0vp");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "progress svelte-19rq0vp");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t1);
		},
		p(ctx, [dirty]) {
			if (dirty & /*progress*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(div0, "width", `${/*progress*/ ctx[0] * 100}%`, false);
			}

			if (dirty & /*text*/ 2) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, /*text*/ ctx[1]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div3);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { progress = 0 } = $$props;
	let { text = '' } = $$props;

	$$self.$$set = $$props => {
		if ('progress' in $$props) $$invalidate(0, progress = $$props.progress);
		if ('text' in $$props) $$invalidate(1, text = $$props.text);
	};

	return [progress, text];
}

class Progress extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { progress: 0, text: 1 }, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Progress);

/***/ }),

/***/ "./src/p4/ResetButton.svelte":
/*!***********************************!*\
  !*** ./src/p4/ResetButton.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _locales___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales/ */ "./src/locales/index.js");
/* harmony import */ var _reset_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.svg */ "./src/p4/reset.svg");
/* src/p4/ResetButton.svelte generated by Svelte v3.49.0 */






function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-zife22", "button.svelte-zife22{width:26px;height:26px;margin:0;padding:4px;border:none;background:none;cursor:pointer;border-radius:4px}button.svelte-zife22:hover{background:rgba(0, 0, 0, 0.15)}button.svelte-zife22:active{background:rgba(0, 0, 0, 0.3)}[theme=\"dark\"] button.svelte-zife22:hover{background:rgba(255, 255, 255, 0.15)}[theme=\"dark\"] button.svelte-zife22:active{background:rgba(255, 255, 255, 0.3)}img.svelte-zife22{width:100%;height:100%}[theme=\"dark\"] img.svelte-zife22{filter:invert(100%)}");
}

function create_fragment(ctx) {
	let button;
	let img;
	let img_src_value;
	let img_draggable_value;
	let img_alt_value;
	let img_title_value;
	let mounted;
	let dispose;

	return {
		c() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			if (!Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["src_url_equal"])(img.src, img_src_value = _reset_svg__WEBPACK_IMPORTED_MODULE_3__["default"])) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "src", img_src_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "draggable", img_draggable_value = false);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "alt", img_alt_value = /*$_*/ ctx[0]('reset.reset'));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "title", img_title_value = /*$_*/ ctx[0]('reset.reset'));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "class", "svelte-zife22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "svelte-zife22");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, img);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", /*click*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$_*/ 1 && img_alt_value !== (img_alt_value = /*$_*/ ctx[0]('reset.reset'))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "alt", img_alt_value);
			}

			if (dirty & /*$_*/ 1 && img_title_value !== (img_title_value = /*$_*/ ctx[0]('reset.reset'))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "title", img_title_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $_;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _locales___WEBPACK_IMPORTED_MODULE_2__["_"], $$value => $$invalidate(0, $_ = $$value));
	const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])();

	const click = () => {
		if (confirm($_('reset.confirm'))) {
			dispatch('click');
		}
	};

	return [$_, click];
}

class ResetButton extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {}, add_css);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (ResetButton);

/***/ }),

/***/ "./src/p4/Section.svelte":
/*!*******************************!*\
  !*** ./src/p4/Section.svelte ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _ResetButton_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetButton.svelte */ "./src/p4/ResetButton.svelte");
/* src/p4/Section.svelte generated by Svelte v3.49.0 */




function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-1qy2cex", ".card.svelte-1qy2cex{max-width:625px;margin:auto;border-radius:0.3em;background-color:#fff;padding:1em;margin-top:1em;margin-bottom:1em;box-shadow:0 2px 0.5em 0.1em rgba(0, 0, 0, 0.2)}[theme=\"dark\"] .card.svelte-1qy2cex{background:#222}.caption.svelte-1qy2cex{font-style:italic}.modal.svelte-1qy2cex{width:100%;max-width:400px;margin:0 8px}.center.svelte-1qy2cex{height:40px;display:flex;justify-content:center;align-items:center;text-align:center}.reset.svelte-1qy2cex{float:right}");
}

// (52:2) {#if reset}
function create_if_block(ctx) {
	let div;
	let resetbutton;
	let current;
	resetbutton = new _ResetButton_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({});

	resetbutton.$on("click", function () {
		if (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(/*reset*/ ctx[4])) /*reset*/ ctx[4].apply(this, arguments);
	});

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(resetbutton.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "reset svelte-1qy2cex");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(resetbutton, div, null);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(resetbutton.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(resetbutton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(resetbutton);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t;
	let current;
	let if_block = /*reset*/ ctx[4] && create_if_block(ctx);
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block) if_block.c();
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (default_slot) default_slot.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "card svelte-1qy2cex");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "caption", /*caption*/ ctx[0]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "modal", /*modal*/ ctx[2]);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "center", /*caption*/ ctx[0] || /*center*/ ctx[1]);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(
				div,
				"border-top",
				/*accent*/ ctx[3]
				? `6px solid ${/*accent*/ ctx[3]}`
				: '',
				false
			);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if (if_block) if_block.m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (/*reset*/ ctx[4]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*reset*/ 16) {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(div, t);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_slot_base"])(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_all_dirty_from_scope"])(/*$$scope*/ ctx[5])
						: Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			if (dirty & /*caption*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "caption", /*caption*/ ctx[0]);
			}

			if (dirty & /*modal*/ 4) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "modal", /*modal*/ ctx[2]);
			}

			if (dirty & /*caption, center*/ 3) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(div, "center", /*caption*/ ctx[0] || /*center*/ ctx[1]);
			}

			if (dirty & /*accent*/ 8) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_style"])(
					div,
					"border-top",
					/*accent*/ ctx[3]
					? `6px solid ${/*accent*/ ctx[3]}`
					: '',
					false
				);
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { caption = false } = $$props;
	let { center = false } = $$props;
	let { modal = false } = $$props;
	let { accent = '' } = $$props;
	let { reset } = $$props;

	$$self.$$set = $$props => {
		if ('caption' in $$props) $$invalidate(0, caption = $$props.caption);
		if ('center' in $$props) $$invalidate(1, center = $$props.center);
		if ('modal' in $$props) $$invalidate(2, modal = $$props.modal);
		if ('accent' in $$props) $$invalidate(3, accent = $$props.accent);
		if ('reset' in $$props) $$invalidate(4, reset = $$props.reset);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [caption, center, modal, accent, reset, $$scope, slots];
}

class Section extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"],
			{
				caption: 0,
				center: 1,
				modal: 2,
				accent: 3,
				reset: 4
			},
			add_css
		);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/p4/SelectLocale.svelte":
/*!************************************!*\
  !*** ./src/p4/SelectLocale.svelte ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _locales_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/index */ "./src/locales/index.js");
/* src/p4/SelectLocale.svelte generated by Svelte v3.49.0 */




function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i][0];
	child_ctx[3] = list[i][1];
	return child_ctx;
}

// (6:2) {#each Object.entries(supportedLocales) as [locale, name]}
function create_each_block(ctx) {
	let option;
	let t_value = /*name*/ ctx[3] + "";
	let t;
	let option_value_value;

	return {
		c() {
			option = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			option.__value = option_value_value = /*locale*/ ctx[2];
			option.value = option.__value;
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, option, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(option);
		}
	};
}

function create_fragment(ctx) {
	let select;
	let mounted;
	let dispose;
	let each_value = Object.entries(_locales_index__WEBPACK_IMPORTED_MODULE_1__["supportedLocales"]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			select = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			if (/*$locale*/ ctx[0] === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => /*select_change_handler*/ ctx[1].call(select));
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, select, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select, /*$locale*/ ctx[0]);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select, "change", /*select_change_handler*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*Object, supportedLocales*/ 0) {
				each_value = Object.entries(_locales_index__WEBPACK_IMPORTED_MODULE_1__["supportedLocales"]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*$locale, Object, supportedLocales*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select, /*$locale*/ ctx[0]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(select);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $locale;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _locales_index__WEBPACK_IMPORTED_MODULE_1__["locale"], $$value => $$invalidate(0, $locale = $$value));

	function select_change_handler() {
		$locale = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
		_locales_index__WEBPACK_IMPORTED_MODULE_1__["locale"].set($locale);
	}

	return [$locale, select_change_handler];
}

class SelectLocale extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (SelectLocale);

/***/ }),

/***/ "./src/p4/SelectProject.svelte":
/*!*************************************!*\
  !*** ./src/p4/SelectProject.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales */ "./src/locales/index.js");
/* harmony import */ var _Section_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section.svelte */ "./src/p4/Section.svelte");
/* harmony import */ var _Button_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button.svelte */ "./src/p4/Button.svelte");
/* harmony import */ var _DropArea_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DropArea.svelte */ "./src/p4/DropArea.svelte");
/* harmony import */ var _ComplexMessage_svelte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ComplexMessage.svelte */ "./src/p4/ComplexMessage.svelte");
/* harmony import */ var _ImportProject_svelte__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImportProject.svelte */ "./src/p4/ImportProject.svelte");
/* harmony import */ var _persistent_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./persistent-store */ "./src/p4/persistent-store.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stores */ "./src/p4/stores.js");
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/errors */ "./src/common/errors.js");
/* harmony import */ var _get_project_metadata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-project-metadata */ "./src/p4/get-project-metadata.js");
/* harmony import */ var _packager_load_project__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../packager/load-project */ "./src/packager/load-project.js");
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./url-utils */ "./src/p4/url-utils.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./task */ "./src/p4/task.js");
/* harmony import */ var _import_project_from_opener__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./import-project-from-opener */ "./src/p4/import-project-from-opener.js");
/* src/p4/SelectProject.svelte generated by Svelte v3.49.0 */



















function add_css(target) {
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_styles"])(target, "svelte-3d81jx", "input[type=\"text\"].svelte-3d81jx{max-width:300px;flex-grow:1}.options.svelte-3d81jx{margin:12px 0}.option.svelte-3d81jx{min-height:25px;display:flex;align-items:center;flex-wrap:wrap}input[type=\"text\"].svelte-3d81jx,input[type=\"file\"].svelte-3d81jx{margin-left:4px}");
}

// (234:0) {#if isImportingProject}
function create_if_block_4(ctx) {
	let importingproject;
	let current;
	importingproject = new _ImportProject_svelte__WEBPACK_IMPORTED_MODULE_8__["default"]({});
	importingproject.$on("cancel", /*cancel_handler*/ ctx[18]);

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(importingproject.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(importingproject, target, anchor);
			current = true;
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(importingproject.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(importingproject.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(importingproject, detaching);
		}
	};
}

// (251:8) {#if $type === "id"}
function create_if_block_3(ctx) {
	let input;
	let input_value_value;
	let mounted;
	let dispose;

	return {
		c() {
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "text");
			input.value = input_value_value = /*getDisplayedProjectURL*/ ctx[10]();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "spellcheck", "false");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "svelte-3d81jx");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, input, anchor);

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "keypress", /*submitOnEnter*/ ctx[11]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "input", /*handleInput*/ ctx[12]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "focus", /*handleFocus*/ ctx[13])
				];

				mounted = true;
			}
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(input);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (268:8) {#if $type === "url"}
function create_if_block_2(ctx) {
	let input;
	let mounted;
	let dispose;

	return {
		c() {
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "text");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "spellcheck", "false");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "placeholder", "https://...");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "svelte-3d81jx");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, input, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*$projectUrl*/ ctx[5]);

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "input", /*input_input_handler*/ ctx[24]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "keypress", /*submitOnEnter*/ ctx[11])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$projectUrl*/ 32 && input.value !== /*$projectUrl*/ ctx[5]) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input, /*$projectUrl*/ ctx[5]);
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(input);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (274:4) {#if $type === "id"}
function create_if_block_1(ctx) {
	let p0;
	let t0_value = /*$_*/ ctx[4]('select.unsharedProjectsTemporary') + "";
	let t0;
	let t1;
	let p1;
	let t2_value = /*$_*/ ctx[4]('select.unsharedProjectsWorkaround') + "";
	let t2;
	let t3;
	let p2;
	let complexmessage;
	let current;

	complexmessage = new _ComplexMessage_svelte__WEBPACK_IMPORTED_MODULE_7__["default"]({
			props: {
				message: /*$_*/ ctx[4]('select.unsharedProjectsMore'),
				values: {
					link: {
						text: 'https://docs.turbowarp.org/unshared-projects',
						href: 'https://docs.turbowarp.org/unshared-projects',
						newTab: true
					}
				}
			}
		});

	return {
		c() {
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(complexmessage.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(complexmessage, p2, null);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*$_*/ 16) && t0_value !== (t0_value = /*$_*/ ctx[4]('select.unsharedProjectsTemporary') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if ((!current || dirty[0] & /*$_*/ 16) && t2_value !== (t2_value = /*$_*/ ctx[4]('select.unsharedProjectsWorkaround') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);
			const complexmessage_changes = {};
			if (dirty[0] & /*$_*/ 16) complexmessage_changes.message = /*$_*/ ctx[4]('select.unsharedProjectsMore');
			complexmessage.$set(complexmessage_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(complexmessage.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(complexmessage.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(complexmessage);
		}
	};
}

// (241:2) <Section accent="#4C97FF">
function create_default_slot_2(ctx) {
	let h2;
	let t0_value = /*$_*/ ctx[4]('select.select') + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*$_*/ ctx[4]('select.selectHelp') + "";
	let t2;
	let t3;
	let div3;
	let div0;
	let label0;
	let input0;
	let t4;
	let t5_value = /*$_*/ ctx[4]('select.id') + "";
	let t5;
	let t6;
	let t7;
	let div1;
	let label1;
	let input1;
	let t8;
	let t9_value = /*$_*/ ctx[4]('select.file') + "";
	let t9;
	let t10;
	let input2;
	let input2_hidden_value;
	let t11;
	let div2;
	let label2;
	let input3;
	let t12;
	let t13_value = /*$_*/ ctx[4]('select.url') + "";
	let t13;
	let t14;
	let t15;
	let t16;
	let button;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*$type*/ ctx[1] === "id" && create_if_block_3(ctx);
	let if_block1 = /*$type*/ ctx[1] === "url" && create_if_block_2(ctx);
	let if_block2 = /*$type*/ ctx[1] === "id" && create_if_block_1(ctx);

	button = new _Button_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({
			props: {
				text: /*$_*/ ctx[4]('select.loadProject')
			}
		});

	button.$on("click", /*load*/ ctx[16]);

	return {
		c() {
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t5_value);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block0) if_block0.c();
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t9_value);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			input3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t13_value);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block2) if_block2.c();
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "type", "radio");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input0, "name", "project-type");
			input0.__value = "id";
			input0.value = input0.__value;
			/*$$binding_groups*/ ctx[20][0].push(input0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "option svelte-3d81jx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "type", "radio");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input1, "name", "project-type");
			input1.__value = "file";
			input1.value = input1.__value;
			/*$$binding_groups*/ ctx[20][0].push(input1);
			input2.hidden = input2_hidden_value = /*$type*/ ctx[1] !== "file";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input2, "type", "file");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input2, "accept", ".sb,.sb2,.sb3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input2, "class", "svelte-3d81jx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "option file-input-option svelte-3d81jx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input3, "type", "radio");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input3, "name", "project-type");
			input3.__value = "url";
			input3.value = input3.__value;
			/*$$binding_groups*/ ctx[20][0].push(input3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "option svelte-3d81jx");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "options svelte-3d81jx");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h2, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, label0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, input0);
			input0.checked = input0.__value === /*$type*/ ctx[1];
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t6);
			if (if_block0) if_block0.m(div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, label1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, input1);
			input1.checked = input1.__value === /*$type*/ ctx[1];
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, input2);
			/*input2_binding*/ ctx[22](input2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, label2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label2, input3);
			input3.checked = input3.__value === /*$type*/ ctx[1];
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label2, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label2, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t14);
			if (if_block1) if_block1.m(div2, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t15, anchor);
			if (if_block2) if_block2.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t16, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, target, anchor);
			current = true;

			if (!mounted) {
				dispose = [
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input0, "change", /*input0_change_handler*/ ctx[19]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input1, "change", /*input1_change_handler*/ ctx[21]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input2, "change", /*handleFileInputChange*/ ctx[15]),
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input3, "change", /*input3_change_handler*/ ctx[23])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if ((!current || dirty[0] & /*$_*/ 16) && t0_value !== (t0_value = /*$_*/ ctx[4]('select.select') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if ((!current || dirty[0] & /*$_*/ 16) && t2_value !== (t2_value = /*$_*/ ctx[4]('select.selectHelp') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);

			if (dirty[0] & /*$type*/ 2) {
				input0.checked = input0.__value === /*$type*/ ctx[1];
			}

			if ((!current || dirty[0] & /*$_*/ 16) && t5_value !== (t5_value = /*$_*/ ctx[4]('select.id') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t5, t5_value);

			if (/*$type*/ ctx[1] === "id") {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					if_block0.m(div0, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty[0] & /*$type*/ 2) {
				input1.checked = input1.__value === /*$type*/ ctx[1];
			}

			if ((!current || dirty[0] & /*$_*/ 16) && t9_value !== (t9_value = /*$_*/ ctx[4]('select.file') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t9, t9_value);

			if (!current || dirty[0] & /*$type*/ 2 && input2_hidden_value !== (input2_hidden_value = /*$type*/ ctx[1] !== "file")) {
				input2.hidden = input2_hidden_value;
			}

			if (dirty[0] & /*$type*/ 2) {
				input3.checked = input3.__value === /*$type*/ ctx[1];
			}

			if ((!current || dirty[0] & /*$_*/ 16) && t13_value !== (t13_value = /*$_*/ ctx[4]('select.url') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t13, t13_value);

			if (/*$type*/ ctx[1] === "url") {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					if_block1.m(div2, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*$type*/ ctx[1] === "id") {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty[0] & /*$type*/ 2) {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_1(ctx);
					if_block2.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
					if_block2.m(t16.parentNode, t16);
				}
			} else if (if_block2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			const button_changes = {};
			if (dirty[0] & /*$_*/ 16) button_changes.text = /*$_*/ ctx[4]('select.loadProject');
			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div3);
			/*$$binding_groups*/ ctx[20][0].splice(/*$$binding_groups*/ ctx[20][0].indexOf(input0), 1);
			if (if_block0) if_block0.d();
			/*$$binding_groups*/ ctx[20][0].splice(/*$$binding_groups*/ ctx[20][0].indexOf(input1), 1);
			/*input2_binding*/ ctx[22](null);
			/*$$binding_groups*/ ctx[20][0].splice(/*$$binding_groups*/ ctx[20][0].indexOf(input3), 1);
			if (if_block1) if_block1.d();
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t15);
			if (if_block2) if_block2.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t16);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button, detaching);
			mounted = false;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (240:0) <DropArea on:drop={handleDrop}>
function create_default_slot_1(ctx) {
	let section;
	let current;

	section = new _Section_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				accent: "#4C97FF",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(section.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(section, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const section_changes = {};

			if (dirty[0] & /*$_, $type, $projectUrl, fileInputElement*/ 58 | dirty[1] & /*$$scope*/ 1) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(section, detaching);
		}
	};
}

// (299:0) {#if !$progress.visible && !projectData}
function create_if_block(ctx) {
	let section;
	let current;

	section = new _Section_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				caption: true,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(section.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(section, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const section_changes = {};

			if (dirty[0] & /*$_*/ 16 | dirty[1] & /*$$scope*/ 1) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(section, detaching);
		}
	};
}

// (300:2) <Section caption>
function create_default_slot(ctx) {
	let p;
	let t_value = /*$_*/ ctx[4]('select.loadToContinue') + "";
	let t;

	return {
		c() {
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(p, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$_*/ 16 && t_value !== (t_value = /*$_*/ ctx[4]('select.loadToContinue') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
		}
	};
}

function create_fragment(ctx) {
	let t0;
	let droparea;
	let t1;
	let if_block1_anchor;
	let current;
	let if_block0 = /*isImportingProject*/ ctx[2] && create_if_block_4(ctx);

	droparea = new _DropArea_svelte__WEBPACK_IMPORTED_MODULE_6__["default"]({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	droparea.$on("drop", /*handleDrop*/ ctx[14]);
	let if_block1 = !/*$progress*/ ctx[6].visible && !/*projectData*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(droparea.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			if_block1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(droparea, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			if (if_block1) if_block1.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*isImportingProject*/ ctx[2]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*isImportingProject*/ 4) {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0, 1);
					if_block0.m(t0.parentNode, t0);
				}
			} else if (if_block0) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			const droparea_changes = {};

			if (dirty[0] & /*$_, $type, $projectUrl, fileInputElement*/ 58 | dirty[1] & /*$$scope*/ 1) {
				droparea_changes.$$scope = { dirty, ctx };
			}

			droparea.$set(droparea_changes);

			if (!/*$progress*/ ctx[6].visible && !/*projectData*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*$progress, projectData*/ 65) {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(droparea.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(droparea.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1);
			current = false;
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(droparea, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			if (if_block1) if_block1.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block1_anchor);
		}
	};
}

const defaultProjectId = '60917032';

function instance($$self, $$props, $$invalidate) {
	let $_;
	let $projectUrl;
	let $type;
	let $projectId;
	let $progress;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _locales__WEBPACK_IMPORTED_MODULE_3__["_"], $$value => $$invalidate(4, $_ = $$value));
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _stores__WEBPACK_IMPORTED_MODULE_10__["progress"], $$value => $$invalidate(6, $progress = $$value));
	const type = Object(_persistent_store__WEBPACK_IMPORTED_MODULE_9__["default"])('SelectProject.type', 'id');
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, type, value => $$invalidate(1, $type = value));
	const projectId = Object(_persistent_store__WEBPACK_IMPORTED_MODULE_9__["default"])('SelectProject.id', defaultProjectId);
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, projectId, value => $$invalidate(17, $projectId = value));
	const projectUrl = Object(_persistent_store__WEBPACK_IMPORTED_MODULE_9__["default"])('SelectProject.url', '');
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, projectUrl, value => $$invalidate(5, $projectUrl = value));
	let isImportingProject = false;
	const searchParams = new URLSearchParams(location.search);

	if (searchParams.has('import_from')) {
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_store_value"])(type, $type = 'file', $type);
		const origin = searchParams.get('import_from');

		Object(_import_project_from_opener__WEBPACK_IMPORTED_MODULE_16__["default"])({
			origin,
			onStartImporting: () => {
				$$invalidate(2, isImportingProject = true);
			},
			onCancelImporting: () => {
				$$invalidate(2, isImportingProject = false);
			},
			onFinishImporting: files => {
				if (!isImportingProject) {
					// Import was cancelled.
					return;
				}

				$$invalidate(2, isImportingProject = false);
				$$invalidate(3, fileInputElement.files = files, fileInputElement);
				setFiles(files);
			}
		});
	} else {
		const projectIdInURL = (/^#\d+$/).test(location.hash)
		? location.hash.substring(1)
		: null;

		if (projectIdInURL) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_store_value"])(type, $type = 'id', $type);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_store_value"])(projectId, $projectId = projectIdInURL, $projectId);
		}
	}

	let { projectData = null } = $$props;

	const resetProjectAndCancelTask = () => {
		$$invalidate(0, projectData = null);
		_stores__WEBPACK_IMPORTED_MODULE_10__["currentTask"].abort();
	};

	// just incase some non-number string was stored from older versions
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_store_value"])(projectId, $projectId = Object(_url_utils__WEBPACK_IMPORTED_MODULE_14__["extractProjectId"])($projectId), $projectId);

	const getDisplayedProjectURL = () => `https://scratch.mit.edu/projects/${$projectId}`;

	const submitOnEnter = e => {
		if (e.key === 'Enter') {
			load();
		}
	};

	const handleInput = e => {
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_store_value"])(projectId, $projectId = Object(_url_utils__WEBPACK_IMPORTED_MODULE_14__["extractProjectId"])(e.target.value), $projectId);
		e.target.value = getDisplayedProjectURL();
	};

	const handleFocus = e => {
		e.target.select();
	};

	let fileInputElement;

	const copyFileList = files => {
		const transfer = new DataTransfer();

		for (const file of files) {
			transfer.items.add(file);
		}

		return transfer.files;
	};

	// This is used to remember files between reloads in some browsers (currently only Firefox)
	// This element is defined in the HTML of template.ejs because some browsers won't
	// autocomplete file inputs generated by JS.
	const inputForRememberingProjectFile = document.querySelector('.input-for-remembering-project-file');

	if (inputForRememberingProjectFile) {
		// Check for autocompleted files after mount so that fileInputElement is defined.
		Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
			const storedFiles = inputForRememberingProjectFile.files;

			if (storedFiles.length) {
				$$invalidate(3, fileInputElement.files = copyFileList(storedFiles), fileInputElement);
			}
		});
	}

	const setFiles = files => {
		resetProjectAndCancelTask();

		if (fileInputElement.files !== files) {
			$$invalidate(3, fileInputElement.files = files, fileInputElement);
		}

		if (inputForRememberingProjectFile) {
			inputForRememberingProjectFile.files = copyFileList(files);
		}

		if (files.length && $type === 'file') {
			load();
		}
	};

	const handleDrop = ({ detail: dataTransfer }) => {
		const name = dataTransfer.files[0].name;

		if (name.endsWith('.sb') || name.endsWith('.sb2') || name.endsWith('.sb3')) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_store_value"])(type, $type = 'file', $type);
			setFiles(dataTransfer.files);
		}
	};

	const handleFileInputChange = e => {
		setFiles(e.target.files);
	};

	const internalLoad = async task => {
		let uniqueId = '';
		let id = null;
		let projectTitle = '';
		let project;

		const progressCallback = (type, a, b) => {
			if (type === 'fetch') {
				task.setProgress(a);
			} else if (type === 'assets') {
				task.setProgressText($_('progress.loadingAssets').replace('{complete}', a).replace('{total}', b));
				task.setProgress(a / b);
			} else if (type === 'compress') {
				task.setProgressText($_('progress.compressingProject'));
				task.setProgress(a);
			}
		};

		if ($type === 'id') {
			id = $projectId;

			if (!id) {
				throw new _common_errors__WEBPACK_IMPORTED_MODULE_11__["UserError"]($_('select.invalidId'));
			}

			uniqueId = `#${id}`;
			task.setProgressText($_('progress.loadingProjectMetadata'));
			let metadata;

			try {
				metadata = await Object(_get_project_metadata__WEBPACK_IMPORTED_MODULE_12__["default"])(id);
			} catch(e) {
				// For now, we'll treat this as non-critical.
				// In the future, this will probably be a critical error.
				console.error(e);
			}

			const token = metadata ? metadata.token : null;
			projectTitle = metadata ? metadata.title : '';
			task.setProgressText($_('progress.loadingProjectData'));
			const { promise: loadProjectPromise, terminate } = await _packager_load_project__WEBPACK_IMPORTED_MODULE_13__["default"].fromID(id, token, progressCallback);
			task.whenAbort(terminate);
			project = await loadProjectPromise;
		} else if ($type === 'file') {
			const files = fileInputElement.files;
			const file = files && files[0];

			if (!file) {
				throw new _common_errors__WEBPACK_IMPORTED_MODULE_11__["UserError"]($_('select.noFileSelected'));
			}

			uniqueId = `@${file.name}`;
			projectTitle = file.name;
			task.setProgressText($_('progress.compressingProject'));
			project = await (await _packager_load_project__WEBPACK_IMPORTED_MODULE_13__["default"].fromFile(file, progressCallback)).promise;
		} else if ($type === 'url') {
			const url = $projectUrl;

			if (!Object(_url_utils__WEBPACK_IMPORTED_MODULE_14__["isValidURL"])(url)) {
				throw new _common_errors__WEBPACK_IMPORTED_MODULE_11__["UserError"]($_('select.invalidUrl'));
			}

			uniqueId = `$${url}`;
			projectTitle = Object(_url_utils__WEBPACK_IMPORTED_MODULE_14__["getTitleFromURL"])(url);
			task.setProgressText($_('progress.loadingProjectData'));
			project = await (await _packager_load_project__WEBPACK_IMPORTED_MODULE_13__["default"].fromURL(url, progressCallback)).promise;
		} else {
			throw new Error('Unknown type');
		}

		return {
			projectId: id,
			uniqueId,
			title: projectTitle,
			project
		};
	};

	const load = async () => {
		resetProjectAndCancelTask();
		const task = new _task__WEBPACK_IMPORTED_MODULE_15__["default"]();
		$$invalidate(0, projectData = await task.do(internalLoad(task)));
		task.done();
	};

	const $$binding_groups = [[]];

	const cancel_handler = () => {
		$$invalidate(2, isImportingProject = false);
	};

	function input0_change_handler() {
		$type = this.__value;
		type.set($type);
	}

	function input1_change_handler() {
		$type = this.__value;
		type.set($type);
	}

	function input2_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? 'unshift' : 'push'](() => {
			fileInputElement = $$value;
			$$invalidate(3, fileInputElement);
		});
	}

	function input3_change_handler() {
		$type = this.__value;
		type.set($type);
	}

	function input_input_handler() {
		$projectUrl = this.value;
		projectUrl.set($projectUrl);
	}

	$$self.$$set = $$props => {
		if ('projectData' in $$props) $$invalidate(0, projectData = $$props.projectData);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*$projectId, $type*/ 131074) {
			// Reset project when input changes
			$: ($projectId, $type, resetProjectAndCancelTask());
		}
	};

	return [
		projectData,
		$type,
		isImportingProject,
		fileInputElement,
		$_,
		$projectUrl,
		$progress,
		type,
		projectId,
		projectUrl,
		getDisplayedProjectURL,
		submitOnEnter,
		handleInput,
		handleFocus,
		handleDrop,
		handleFileInputChange,
		load,
		$projectId,
		cancel_handler,
		input0_change_handler,
		$$binding_groups,
		input1_change_handler,
		input2_binding,
		input3_change_handler,
		input_input_handler
	];
}

class SelectProject extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { projectData: 0 }, add_css, [-1, -1]);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (SelectProject);

/***/ }),

/***/ "./src/p4/SelectTheme.svelte":
/*!***********************************!*\
  !*** ./src/p4/SelectTheme.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores */ "./src/p4/stores.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales */ "./src/locales/index.js");
/* src/p4/SelectTheme.svelte generated by Svelte v3.49.0 */





function create_fragment(ctx) {
	let select;
	let option0;
	let t0_value = /*$_*/ ctx[1]('theme.system') + "";
	let t0;
	let option1;
	let t1_value = /*$_*/ ctx[1]('theme.light') + "";
	let t1;
	let option2;
	let t2_value = /*$_*/ ctx[1]('theme.dark') + "";
	let t2;
	let mounted;
	let dispose;

	return {
		c() {
			select = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");
			option0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			option1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			option2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			option0.__value = "system";
			option0.value = option0.__value;
			option1.__value = "light";
			option1.value = option1.__value;
			option2.__value = "dark";
			option2.value = option2.__value;
			if (/*$theme*/ ctx[0] === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => /*select_change_handler*/ ctx[2].call(select));
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, select, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select, option0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select, option1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select, option2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option2, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select, /*$theme*/ ctx[0]);

			if (!mounted) {
				dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select, "change", /*select_change_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$_*/ 2 && t0_value !== (t0_value = /*$_*/ ctx[1]('theme.system') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			if (dirty & /*$_*/ 2 && t1_value !== (t1_value = /*$_*/ ctx[1]('theme.light') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, t1_value);
			if (dirty & /*$_*/ 2 && t2_value !== (t2_value = /*$_*/ ctx[1]('theme.dark') + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t2, t2_value);

			if (dirty & /*$theme*/ 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select, /*$theme*/ ctx[0]);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(select);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $theme;
	let $_;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _stores__WEBPACK_IMPORTED_MODULE_1__["theme"], $$value => $$invalidate(0, $theme = $$value));
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _locales__WEBPACK_IMPORTED_MODULE_2__["_"], $$value => $$invalidate(1, $_ = $$value));

	function select_change_handler() {
		$theme = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
		_stores__WEBPACK_IMPORTED_MODULE_1__["theme"].set($theme);
	}

	return [$theme, $_, select_change_handler];
}

class SelectTheme extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (SelectTheme);

/***/ }),

/***/ "./src/p4/environment.js":
/*!*******************************!*\
  !*** ./src/p4/environment.js ***!
  \*******************************/
/*! exports provided: isSupported, isSafari, isChromeOS, isStandalone, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupported", function() { return isSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChromeOS", function() { return isChromeOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStandalone", function() { return isStandalone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
// Legacy Edge supports all the syntax we use but not TextDecoder and TextEncoder
const isSupported = typeof TextDecoder === 'function';

const isSafari = navigator.vendor === 'Apple Computer, Inc.';

const isChromeOS = navigator.userAgent.includes('CrOS');

const isStandalone = !!false;

const version = null;


/***/ }),

/***/ "./src/p4/get-project-metadata.js":
/*!****************************************!*\
  !*** ./src/p4/get-project-metadata.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/errors */ "./src/common/errors.js");
/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/request */ "./src/common/request.js");



const getProjectMetadata = async (id) => {
  try {
    const meta = await Object(_common_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
      url: [
        // Hopefully one of these URLs won't be blocked.
        `https://trampoline.turbowarp.org/proxy/projects/${id}`,
        `https://trampoline.turbowarp.xyz/proxy/projects/${id}`
      ],
      type: 'json'
    });
    return {
      title: meta.title,
      token: meta.project_token
    };
  } catch (e) {
    if (e && e.status === 404) {
      throw new _common_errors__WEBPACK_IMPORTED_MODULE_0__["CannotAccessProjectError"](`Cannot access project ${id}`);
    }
    throw e;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getProjectMetadata);


/***/ }),

/***/ "./src/p4/import-project-from-opener.js":
/*!**********************************************!*\
  !*** ./src/p4/import-project-from-opener.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const importProjectFromOpener = ({
  origin,
  onStartImporting,
  onFinishImporting,
  onCancelImporting
}) => {
  const opener = window.opener || window.parent;
  if (!opener || opener === window) {
    console.warn('Import ignored: cannot find parent window');
    return;
  }

  if (!origin.startsWith('http:') && !origin.startsWith('https:')) {
    console.warn('Import ignored: invalid origin');
    return;
  }

  const post = (data) => {
    // postMessage could throw if origin is invalid
    try {
      opener.postMessage({
        p4: data
      }, origin);
    } catch (e) {
      console.warn('Cannot post message', e);
    }
  };

  let hasStarted = false;
  let hasFinishedOrCancelled = false;

  const onMessage = (e) => {
    if (e.origin !== origin) {
      return;
    }

    const data = e.data && e.data.p4;
    if (!data) {
      return;
    }

    if (!hasStarted) {
      if (data.type === 'start-import') {
        hasStarted = true;
        onStartImporting();
      }
    } else if (!hasFinishedOrCancelled) {
      if (data.type === 'finish-import') {
        cleanup();

        // Convert data to File
        const buffer = data.data;
        // Default title should not be changed.
        const name = data.name || 'Untitled';
        const file = new File([buffer], name);

        // Convert File to FileList
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        onFinishImporting(dataTransfer.files);
      } else if (data.type === 'cancel-import') {
        cleanup();
        onCancelImporting();
      }
    }
  };
  window.addEventListener('message', onMessage);

  const cleanup = () => {
    hasFinishedOrCancelled = true;
    window.removeEventListener('message', onMessage);
  };

  post({
    type: 'ready-for-import'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (importProjectFromOpener);


/***/ }),

/***/ "./src/p4/index.js":
/*!*************************!*\
  !*** ./src/p4/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _P4_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./P4.svelte */ "./src/p4/P4.svelte");
/* harmony import */ var _file_loader_name_sw_js_sw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !file-loader?name=sw.js!./sw.js */ "./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/p4/sw.js");



const app = new _P4_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
  target: document.getElementById('app')
});

document.body.setAttribute('p4-loaded', '');

if (undefined && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(_file_loader_name_sw_js_sw_js__WEBPACK_IMPORTED_MODULE_1__["default"])
      .then(() => {
        console.log('SW registered');
      }).catch((error) => {
        console.log('SW error', error);
      });
  });
}


/***/ }),

/***/ "./src/p4/merge.js":
/*!*************************!*\
  !*** ./src/p4/merge.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const type = (obj) => {
  if (obj === null) return 'null';
  if (Array.isArray(obj)) return 'array';
  if (typeof Blob !== 'undefined' && obj instanceof Blob) return 'blob';
  return typeof obj;
};

const merge = (into, from) => {
  const typeInto = type(into);
  const typeFrom = type(from);
  if (from === null && typeInto === 'blob') {
    return into;
  }
  if (typeInto !== typeFrom || typeInto === 'undefined') {
    return from;
  }
  if (typeInto === 'object') {
    for (const key of Object.keys(from)) {
      into[key] = merge(into[key], from[key]);
    }
    for (const key of Object.keys(into)) {
      if (!Object.prototype.hasOwnProperty.call(from, key)) {
        delete into[key];
      }
    }
  }
  return into;
};

/* harmony default export */ __webpack_exports__["default"] = (merge);


/***/ }),

/***/ "./src/p4/persistent-store.js":
/*!************************************!*\
  !*** ./src/p4/persistent-store.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge */ "./src/p4/merge.js");
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialize */ "./src/p4/serialize.js");




const writablePersistentStore = (key, defaultValue) => {
  let value = JSON.parse(JSON.stringify(defaultValue));
  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) {
    value = Object(_merge__WEBPACK_IMPORTED_MODULE_1__["default"])(localValue, value);
  }
  const store = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])(value, () => {
    const unsubscribe = store.subscribe(value => {
      const serialized = Object(_serialize__WEBPACK_IMPORTED_MODULE_2__["default"])(value, defaultValue);
      if (serialized === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(serialized));
      }
    });
    return unsubscribe;
  });
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (writablePersistentStore);


/***/ }),

/***/ "./src/p4/reset.svg":
/*!**************************!*\
  !*** ./src/p4/reset.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/reset.80a6e1615fc013684ad8047dba5ce064.svg");

/***/ }),

/***/ "./src/p4/serialize.js":
/*!*****************************!*\
  !*** ./src/p4/serialize.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isObject = (v) => !!v && typeof v === 'object' && !Array.isArray(v);

const areArraysEqual = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

/**
 * @returns {*|null} null means "do not store"
 */
const serialize = (value, defaultValue) => {
  // Never serialize blobs.
  if (value instanceof Blob) {
    return null;
  }
  if (isObject(defaultValue)) {
    const result = {};
    for (const key of Object.keys(defaultValue)) {
      if (!Object.prototype.hasOwnProperty.call(value, key)) {
        continue;
      }
      const serialized = serialize(value[key], defaultValue[key]);
      if (serialized !== null) {
        result[key] = serialized;
      }
    }
    if (Object.keys(result).length === 0) {
      return null;
    }
    return result;
  }
  if (Array.isArray(value)) {
    if (Array.isArray(defaultValue)) {
      if (areArraysEqual(value, defaultValue)) {
        return null;
      }
    } else {
      return null;
    }
  }
  if (value === defaultValue) {
    return null;
  }
  return value;
};

/* harmony default export */ __webpack_exports__["default"] = (serialize);


/***/ }),

/***/ "./src/p4/stores.js":
/*!**************************!*\
  !*** ./src/p4/stores.js ***!
  \**************************/
/*! exports provided: error, progress, currentTask, theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentTask", function() { return currentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");


const error = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])(null);

const progress = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])({
  progress: 0,
  visible: false,
  text: ''
});
progress.reset = () => {
  progress.set({
    progress: 0,
    visible: false,
    text: ''
  });
};

const currentTask = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])(null);
currentTask.replace = (newTask) => {
  currentTask.update((old) => {
    if (old) {
      old.abort();
    }
    return newTask;
  });
};
currentTask.abort = () => {
  currentTask.update((old) => {
    if (old) {
      old.abort();
      progress.reset();
    }
    return null;
  });
};

const POSSIBLE_THEMES = [
  'system',
  'dark',
  'light'
];
const THEME_KEY = 'P4.theme';
const theme = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])('system');
try {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (POSSIBLE_THEMES.includes(storedTheme)) {
    theme.set(storedTheme);
  }
} catch (e) {
  // Ignore
}
theme.subscribe((value) => {
  try {
    if (value === 'system') {
      localStorage.removeItem(THEME_KEY);
    } else {
      localStorage.setItem(THEME_KEY, value);
    }
  } catch (e) {
    // ignore
  }
});


/***/ }),

/***/ "./src/p4/task.js":
/*!************************!*\
  !*** ./src/p4/task.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_event_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/event-target */ "./src/common/event-target.js");
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/errors */ "./src/common/errors.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stores */ "./src/p4/stores.js");




class Task extends _common_event_target__WEBPACK_IMPORTED_MODULE_0__["EventTarget"] {
  constructor () {
    super();
    this.aborted = false;
    _stores__WEBPACK_IMPORTED_MODULE_2__["progress"].reset();
    _stores__WEBPACK_IMPORTED_MODULE_2__["progress"].update((p) => {
      p.visible = true;
      return p;
    });
    _stores__WEBPACK_IMPORTED_MODULE_2__["currentTask"].replace(this);
  }

  abort () {
    if (!this.aborted) {
      this.aborted = true;
      this.dispatchEvent(new Event('abort'));
    }
  }

  error (e) {
    if (!this.aborted) {
      _stores__WEBPACK_IMPORTED_MODULE_2__["error"].set(e);
      _stores__WEBPACK_IMPORTED_MODULE_2__["progress"].reset();
      this.abort();
    }
  }

  setProgress (percent) {
    if (!this.aborted) {
      _stores__WEBPACK_IMPORTED_MODULE_2__["progress"].update((p) => {
        p.progress = percent;
        return p;
      });
    }
  }

  setProgressText (text) {
    if (!this.aborted) {
      _stores__WEBPACK_IMPORTED_MODULE_2__["progress"].update((p) => {
        p.text = text;
        return p;
      });
    }
  }

  whenAbort (callback) {
    this.addEventListener('abort', callback);
    if (this.aborted) {
      callback();
    }
  }

  do (promise) {
    if (this.aborted) {
      return Promise.reject(new _common_errors__WEBPACK_IMPORTED_MODULE_1__["AbortError"]());
    }
    return new Promise((resolve, reject) => {
      const abortCallback = () => {
        reject(new _common_errors__WEBPACK_IMPORTED_MODULE_1__["AbortError"]());
      };
      this.addEventListener('abort', abortCallback);
      promise
        .then((r) => {
          resolve(r);
          this.removeEventListener('abort', abortCallback);
        })
        .catch((e) => {
          reject(e);
          this.error(e);
          this.removeEventListener('abort', abortCallback);
        });
    });
  }

  done () {
    _stores__WEBPACK_IMPORTED_MODULE_2__["progress"].update((p) => {
      p.visible = false;
      return p;
    });
    _stores__WEBPACK_IMPORTED_MODULE_2__["currentTask"].set(null);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Task);


/***/ }),

/***/ "./src/p4/url-utils.js":
/*!*****************************!*\
  !*** ./src/p4/url-utils.js ***!
  \*****************************/
/*! exports provided: extractProjectId, isValidURL, getTitleFromURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractProjectId", function() { return extractProjectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidURL", function() { return isValidURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitleFromURL", function() { return getTitleFromURL; });
const extractProjectId = (text) => {
  const match = text.match(/\d+/);
  if (!match) {
    return '';
  }
  return match[0];
};

const isValidURL = (str) => {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (e) {
    return false;
  }
};

const getTitleFromURL = (url) => {
  const match = url.match(/\/([^\/]+)\.sb[2|3]?$/);
  if (match) {
    return match[1];
  }
  return '';
};


/***/ }),

/***/ "./src/packager/brand.js":
/*!*******************************!*\
  !*** ./src/packager/brand.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
These values control branding strings throughout the entire app. If you're forking, please take a few minutes to update them.

"The website" refers to the website itself that you use to load projects and convert them to another form.

"Packaged projects" refers to the files generated by the website. They include a line of text something like:
`Parts of this script are from the ${APP_NAME} <${WEBSITE}>, licensed as follows: ${COPYRIGHT_NOTICE}`

APP_NAME is the name of the app. This text is included in packaged projects.

WEBSITE is your app's website. This link is included in packaged projects.

COPYRIGHT_NOTICE is A copyright notice regarding the app. This text is included in packaged projects.
Also make sure to update the "License" section in README.md

ACCENT_COLOR is a color used in various parts of the interface and as the default value for the accent
color option. It should be a 6-character hex color (#123abc)

SOURCE_CODE is where users can find the app's source code. This link is included in the website's footer.
If this is set to an empty string, the link is removed.

FEEDBACK_PRIMARY and FEEDBACK_SECONDARY are feedback/bug report links shown in various places throughout the website.
name is how they will be labelled in the interface and link is of course a URL

DONATE is a link that people can visit to donate.
If this is set to an empty string, the link is removed.
*/

module.exports = {
  APP_NAME: 'TurboWarp Packager',
  WEBSITE: 'https://packager.turbowarp.org/',
  COPYRIGHT_NOTICE: `Copyright (C) 2021-2022 Thomas Weber

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
  ACCENT_COLOR: '#ff4c4c',
  SOURCE_CODE: 'https://github.com/TurboWarp/packager',
  FEEDBACK_PRIMARY: {
    name: 'Scratch',
    link: 'https://scratch.mit.edu/users/GarboMuffin/#comments'
  },
  FEEDBACK_SECONDARY: {
    name: 'GitHub',
    link: 'https://github.com/TurboWarp/packager/issues'
  },
  DONATE: 'https://github.com/sponsors/GarboMuffin',
};


/***/ }),

/***/ "./src/packager/load-project.js":
/*!**************************************!*\
  !*** ./src/packager/load-project.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! comlink */ "./node_modules/comlink/dist/esm/comlink.mjs");
/* harmony import */ var _build_p4_worker_loader_download_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/p4-worker-loader!./download-project */ "./src/build/p4-worker-loader.js!./src/packager/download-project.js");
/* harmony import */ var _common_readers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/readers */ "./src/common/readers.js");
/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/request */ "./src/common/request.js");
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errors */ "./src/common/errors.js");






const downloadProject = async (buffer, progressCallback) => {
  const {worker, terminate} = await Object(_build_p4_worker_loader_download_project__WEBPACK_IMPORTED_MODULE_1__["default"])();
  let terminateAndReject;
  const downloadPromise = new Promise((resolve, reject) => {
    worker.downloadProject(Object(comlink__WEBPACK_IMPORTED_MODULE_0__["transfer"])(buffer, [buffer]), Object(comlink__WEBPACK_IMPORTED_MODULE_0__["proxy"])(progressCallback))
      .then((res) => {
        terminate();
        resolve(res);
      })
      .catch((err) => {
        terminate();
        reject(err)
      });
    terminateAndReject = () => {
      terminate();
      reject(new _common_errors__WEBPACK_IMPORTED_MODULE_4__["AbortError"]());
    };
  });
  return {
    promise: downloadPromise,
    terminate: terminateAndReject
  };
};

const fromURL = async (url, progressCallback) => {
  const buffer = await Object(_common_request__WEBPACK_IMPORTED_MODULE_3__["default"])({
    url,
    type: 'arraybuffer',
    progressCallback: (progress) => {
      progressCallback('fetch', progress);
    }
  });
  return downloadProject(buffer, progressCallback);
};

const fromID = (id, token, progressCallback) => {
  const tokenPart = token ? `?token=${token}` : '';
  const url = `https://projects.scratch.mit.edu/${id}${tokenPart}`;
  return fromURL(url, progressCallback);
};

const fromFile = async (file, progressCallback) => {
  const buffer = await Object(_common_readers__WEBPACK_IMPORTED_MODULE_2__["readAsArrayBuffer"])(file);
  return downloadProject(buffer, progressCallback);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  fromID,
  fromURL,
  fromFile
});


/***/ })

/******/ });
//# sourceMappingURL=p4.js.map