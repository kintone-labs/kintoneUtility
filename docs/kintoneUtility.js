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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"required":{"app":"\"params\" needs \"app\".","apps":"\"params\" needs \"apps\".","id":"\"params\" needs \"id\".","idOrUpdateKey":"\"params\" needs \"id\" or \"updateKey\".","updateKey":"\"params\" needs \"updateKey\", \"updateKey.field\" and \"updateKey.value\".","fileKey":"\"params\" needs \"fileKey\".","fileNameOrBlob":"\"params\" needs \"fileName\" and \"blob\"."},"shouldBeArray":{"records":"\"records\" should be Array.","ids":"\"ids\" should be Array."},"overLength":{"recordsLessThan2000":"\"records\" should be less than or equal to 2,000.","recordsLessThan1500":"\"records\" should be less than or equal to 1,500.","ids":"\"ids.length\" should be less than or equal to 2,000."},"emptyArray":{"records":"\"records\" is empty. \"records\" needs to contain one record at least.","ids":"\"ids\" is empty. \"ids\" needs to contain one id at least."},"notUniqueField":"\"params.updateKey\" is not unique field.","emptyLoginNameOrPass":"\"loginName\" or \"password\" is empty. Usage: kintoneUtility.rest.setUserAuth('loginName', 'password')","emptyUserNameOrPass":"\"userName\" or \"password\" is empty. Usage: kintoneUtility.rest.setBasicAuth('userName', 'password')","emptyApiToken":"\"apiToken\" is empty. Usage: kintoneUtility.rest.setApiTokenAuth('apiToken')","emptyDomain":"\"domain\" is empty. Usage: kintoneUtility.rest.setDomain('xxxx.cybozu.com')","emptyGuestSpaceId":"\"guestSpaceId\" is empty. Usage: kintoneUtility.rest.setGuestSpaceId('guestSpaceId')","useSetDomain":"Can't make a request url. Please use kintoneUtility.rest.setDomain."}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _es6Promise = __webpack_require__(7);

/** Function: createError
 *  @param {string} message
 *
 *  @return {object} promise
 */
exports.default = function (message) {
    return new _es6Promise.Promise(function (resolve, reject) {
        reject({
            status: 'error',
            message: message
        });
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _useXMLHttp = __webpack_require__(20);

var _useXMLHttp2 = _interopRequireDefault(_useXMLHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: sendRequest
 *  @param {string} api
 *  @param {string} method
 *  @param {object} param
 *  @param {boolean} isGuest
 *
 *  @return  {object} result
 */
exports.default = function (api, method, param, isGuest) {
    var isUserAuth = Boolean(kintoneUtility.rest.userAuthBase64);
    var isApiTokenAuth = Boolean(kintoneUtility.rest.apiToken);
    var isSpecifiedGuestSpaceId = Boolean(kintoneUtility.rest.guestSpaceId);
    var isFileApi = api.indexOf('file') > -1;

    if (window && window.kintone && !isUserAuth && !isApiTokenAuth && !isSpecifiedGuestSpaceId && !isFileApi) {
        //use kintone.api
        return kintone.api(kintone.api.url(api, isGuest), method, param).then(function (response) {
            return response;
        });
    } else if (window && window.XMLHttpRequest) {
        //use xmlhttp (include file api)
        return (0, _useXMLHttp2.default)(api, method, param, isGuest);
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"records":100,"getRecords":500,"upsertRecords":1500,"bulk":2000}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: makeBulkParam
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {array} params.ids
 *  @param {array} params.revisions
 *  @param {string} params.method
 *  @param {boolean} params.isGuest
 *
 *  @return {object} bulkParam
 */
exports.default = function (params) {
    var LIMIT = _limit2.default.records;
    var bulkParam = {
        requests: []
    };
    var length = params.records ? params.records.length : params.ids.length;
    var loopTimes = Math.ceil(length / LIMIT);
    var begin = 0;
    var api = void 0;
    if (kintoneUtility.rest.guestSpaceId) {
        api = '/k/guest/' + kintoneUtility.rest.guestSpaceId + '/v1/records.json';
    } else if (params.isGuest) {
        api = kintone.api.url('/k/v1/records', true).replace(location.origin, '');
    } else {
        api = '/k/v1/records.json';
    }
    for (var i = 0; i < loopTimes; i++) {
        var request = {
            method: params.method,
            api: api,
            payload: {
                app: params.app
            }
        };
        if (params.records) {
            request.payload.records = params.records.slice(begin, begin + LIMIT);
        }
        if (params.ids) {
            request.payload.ids = params.ids.slice(begin, begin + LIMIT);
        }
        if (params.revisions) {
            request.payload.revisions = params.revisions.slice(begin, begin + LIMIT);
        }
        bulkParam.requests.push(request);
        begin += LIMIT;
    }

    return bulkParam;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: getAllRecordsByQuery
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} params.query
 *  @param {array} params.fields
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
var getAllRecordsByQuery = function getAllRecordsByQuery(params, records, offsetNum) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    }

    var LIMIT = _limit2.default.getRecords;
    var allRecords = records || [];
    var offset = offsetNum || 0;
    var param = {
        app: params.app,
        query: params.query ? params.query + ' limit ' + LIMIT + ' offset ' + offset : 'limit ' + LIMIT + ' offset ' + offset,
        fields: params.fields || []
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/records', 'GET', param, isGuest).then(function (response) {
        allRecords = allRecords.concat(response.records);
        if (response.records.length < LIMIT) {
            return {
                records: allRecords
            };
        }
        return getAllRecordsByQuery(params, allRecords, offset + LIMIT);
    });
};

exports.default = getAllRecordsByQuery;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: sliceArray
 *  @param {array} arr
 *  @param {number} begin
 *
 *  @return {object} result
 */
exports.default = function (arr, begin) {
  var end = arr.length - begin > _limit2.default.bulk ? begin + _limit2.default.bulk : arr.length;
  return arr.slice(begin, end);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: getRecords
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} params.query
 *  @param {array} params.fields
 *  @param {boolean} params.totalCount
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    }

    var param = {
        app: params.app,
        query: params.query || '',
        fields: params.fields || [],
        totalCount: params.totalCount || false
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/records', 'GET', param, isGuest);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: postRecord
 *  @param {object} params
 *  @param {number} params.app
 *  @param {object} params.record
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    }

    var param = {
        app: params.app,
        record: params.record
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/record', 'POST', param, isGuest);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _makeBulkParam = __webpack_require__(4);

var _makeBulkParam2 = _interopRequireDefault(_makeBulkParam);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: postRecords
 *   Can't register over 2000 records.
 *   If request is failed, no record is registerd.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!Array.isArray(params.records)) {
        return (0, _createError2.default)(_errorMessages2.default.shouldBeArray.records);
    } else if (params.records && params.records.length > _limit2.default.bulk) {
        return (0, _createError2.default)(_errorMessages2.default.overLength.recordsLessThan2000);
    } else if (params.records && params.records.length < 1) {
        return (0, _createError2.default)(_errorMessages2.default.emptyArray.records);
    }

    var isGuest = Boolean(params.isGuest);
    var param = (0, _makeBulkParam2.default)({
        app: params.app,
        records: params.records,
        method: 'POST',
        isGuest: isGuest
    });

    return (0, _sendRequest2.default)('/k/v1/bulkRequest', 'POST', param, isGuest);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: putRecord
 *  @param {object} params
 *  @param {number} params.app
 *  @param {number} params.id
 *  @param {object} params.updateKey
 *  @param {string} params.updateKey.field
 *  @param {string} params.updateKey.value
 *  @param {number} params.revision
 *  @param {object} params.record
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!params.id && !params.updateKey) {
        return (0, _createError2.default)(_errorMessages2.default.required.idOrUpdateKey);
    }

    var param = {
        app: params.app,
        record: params.record
    };
    if (params.revision) {
        param.revision = params.revision;
    }
    if (params.id) {
        param.id = params.id;
    } else if (params.updateKey) {
        param.updateKey = params.updateKey;
    }

    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/record', 'PUT', param, isGuest);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _makeBulkParam = __webpack_require__(4);

var _makeBulkParam2 = _interopRequireDefault(_makeBulkParam);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: putRecords
 *   Can't update over 2000 records.
 *   If request is failed, no record is updated.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!Array.isArray(params.records)) {
        return (0, _createError2.default)(_errorMessages2.default.shouldBeArray.records);
    } else if (params.records && params.records.length > _limit2.default.bulk) {
        return (0, _createError2.default)(_errorMessages2.default.overLength.recordsLessThan2000);
    } else if (params.records && params.records.length < 1) {
        return (0, _createError2.default)(_errorMessages2.default.emptyArray.records);
    }

    var isGuest = Boolean(params.isGuest);
    var param = (0, _makeBulkParam2.default)({
        app: params.app,
        records: params.records,
        method: 'PUT',
        isGuest: isGuest
    });

    return (0, _sendRequest2.default)('/k/v1/bulkRequest', 'POST', param, isGuest);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _makeBulkParam = __webpack_require__(4);

var _makeBulkParam2 = _interopRequireDefault(_makeBulkParam);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: deleteRecords
 *   Can't delete over 2000 records.
 *   If request is failed, no record is deleted.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.ids
 *  @param {array} params.revisions
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!Array.isArray(params.ids)) {
        return (0, _createError2.default)(_errorMessages2.default.shouldBeArray.ids);
    } else if (params.ids && params.ids.length > _limit2.default.bulk) {
        return (0, _createError2.default)(_errorMessages2.default.overLength.ids);
    } else if (params.ids && params.ids.length < 1) {
        return (0, _createError2.default)(_errorMessages2.default.emptyArray.ids);
    }

    var isGuest = Boolean(params.isGuest);
    var param = (0, _makeBulkParam2.default)({
        app: params.app,
        ids: params.ids,
        revisions: params.revisions,
        method: 'DELETE',
        isGuest: isGuest
    });

    return (0, _sendRequest2.default)('/k/v1/bulkRequest', 'POST', param, isGuest);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _deleteRecords = __webpack_require__(14);

var _deleteRecords2 = _interopRequireDefault(_deleteRecords);

var _sliceArray = __webpack_require__(6);

var _sliceArray2 = _interopRequireDefault(_sliceArray);

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: deleteAllRecords
 *   Can delete over 2000 records, but can't do rollback.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.ids
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!Array.isArray(params.ids)) {
        return (0, _createError2.default)(_errorMessages2.default.shouldBeArray.ids);
    } else if (params.ids && params.ids.length < 1) {
        return (0, _createError2.default)(_errorMessages2.default.emptyArray.ids);
    }

    var results = [];

    var deleteAll = function deleteAll(beginNum) {
        var begin = beginNum || 0;
        var isGuest = Boolean(params.isGuest);
        var param = {
            app: params.app,
            ids: (0, _sliceArray2.default)(params.ids, begin),
            isGuest: isGuest
        };

        return (0, _deleteRecords2.default)(param).then(function (response) {
            results = results.concat(response.results);
            begin += _limit2.default.bulk;
            if (params.ids.length <= begin) {
                return {
                    results: results
                };
            }
            return deleteAll(begin);
        });
    };

    return deleteAll();
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(27)
var ieee754 = __webpack_require__(28)
var isArray = __webpack_require__(29)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getRecord = __webpack_require__(18);

var _getRecord2 = _interopRequireDefault(_getRecord);

var _getRecords = __webpack_require__(9);

var _getRecords2 = _interopRequireDefault(_getRecords);

var _getAllRecordsByQuery = __webpack_require__(5);

var _getAllRecordsByQuery2 = _interopRequireDefault(_getAllRecordsByQuery);

var _postRecord = __webpack_require__(10);

var _postRecord2 = _interopRequireDefault(_postRecord);

var _postRecords = __webpack_require__(11);

var _postRecords2 = _interopRequireDefault(_postRecords);

var _postAllRecords = __webpack_require__(21);

var _postAllRecords2 = _interopRequireDefault(_postAllRecords);

var _putRecord = __webpack_require__(12);

var _putRecord2 = _interopRequireDefault(_putRecord);

var _putRecords = __webpack_require__(13);

var _putRecords2 = _interopRequireDefault(_putRecords);

var _putAllRecords = __webpack_require__(22);

var _putAllRecords2 = _interopRequireDefault(_putAllRecords);

var _deleteRecords = __webpack_require__(14);

var _deleteRecords2 = _interopRequireDefault(_deleteRecords);

var _deleteAllRecords = __webpack_require__(15);

var _deleteAllRecords2 = _interopRequireDefault(_deleteAllRecords);

var _deleteAllRecordsByQuery = __webpack_require__(23);

var _deleteAllRecordsByQuery2 = _interopRequireDefault(_deleteAllRecordsByQuery);

var _upsertRecord = __webpack_require__(24);

var _upsertRecord2 = _interopRequireDefault(_upsertRecord);

var _upsertRecords = __webpack_require__(25);

var _upsertRecords2 = _interopRequireDefault(_upsertRecords);

var _setBasicAuth = __webpack_require__(26);

var _setBasicAuth2 = _interopRequireDefault(_setBasicAuth);

var _setUserAuth = __webpack_require__(30);

var _setUserAuth2 = _interopRequireDefault(_setUserAuth);

var _setApiTokenAuth = __webpack_require__(31);

var _setApiTokenAuth2 = _interopRequireDefault(_setApiTokenAuth);

var _setDomain = __webpack_require__(32);

var _setDomain2 = _interopRequireDefault(_setDomain);

var _setGuestSpaceId = __webpack_require__(33);

var _setGuestSpaceId2 = _interopRequireDefault(_setGuestSpaceId);

var _clearBasicAuth = __webpack_require__(34);

var _clearBasicAuth2 = _interopRequireDefault(_clearBasicAuth);

var _clearUserAuth = __webpack_require__(35);

var _clearUserAuth2 = _interopRequireDefault(_clearUserAuth);

var _clearApiTokenAuth = __webpack_require__(36);

var _clearApiTokenAuth2 = _interopRequireDefault(_clearApiTokenAuth);

var _clearDomain = __webpack_require__(37);

var _clearDomain2 = _interopRequireDefault(_clearDomain);

var _clearGuestSpaceId = __webpack_require__(38);

var _clearGuestSpaceId2 = _interopRequireDefault(_clearGuestSpaceId);

var _downloadFile = __webpack_require__(39);

var _downloadFile2 = _interopRequireDefault(_downloadFile);

var _uploadFile = __webpack_require__(40);

var _uploadFile2 = _interopRequireDefault(_uploadFile);

var _getFormFields = __webpack_require__(41);

var _getFormFields2 = _interopRequireDefault(_getFormFields);

var _getFormLayout = __webpack_require__(42);

var _getFormLayout2 = _interopRequireDefault(_getFormLayout);

var _postDeployAppSettings = __webpack_require__(43);

var _postDeployAppSettings2 = _interopRequireDefault(_postDeployAppSettings);

var _getAppDeployStatus = __webpack_require__(44);

var _getAppDeployStatus2 = _interopRequireDefault(_getAppDeployStatus);

var _getCustomization = __webpack_require__(45);

var _getCustomization2 = _interopRequireDefault(_getCustomization);

var _updateCustomization = __webpack_require__(46);

var _updateCustomization2 = _interopRequireDefault(_updateCustomization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kintoneUtility = {
    rest: {
        getRecord: _getRecord2.default,
        getRecords: _getRecords2.default,
        getAllRecordsByQuery: _getAllRecordsByQuery2.default,
        postRecord: _postRecord2.default,
        postRecords: _postRecords2.default,
        postAllRecords: _postAllRecords2.default,
        putRecord: _putRecord2.default,
        putRecords: _putRecords2.default,
        putAllRecords: _putAllRecords2.default,
        deleteRecords: _deleteRecords2.default,
        deleteAllRecords: _deleteAllRecords2.default,
        deleteAllRecordsByQuery: _deleteAllRecordsByQuery2.default,
        upsertRecord: _upsertRecord2.default,
        upsertRecords: _upsertRecords2.default,
        downloadFile: _downloadFile2.default,
        uploadFile: _uploadFile2.default,
        getFormFields: _getFormFields2.default,
        getFormLayout: _getFormLayout2.default,
        postDeployAppSettings: _postDeployAppSettings2.default,
        getAppDeployStatus: _getAppDeployStatus2.default,
        getCustomization: _getCustomization2.default,
        updateCustomization: _updateCustomization2.default,

        setBasicAuth: _setBasicAuth2.default,
        setUserAuth: _setUserAuth2.default,
        setApiTokenAuth: _setApiTokenAuth2.default,
        setDomain: _setDomain2.default,
        setGuestSpaceId: _setGuestSpaceId2.default,
        clearBasicAuth: _clearBasicAuth2.default,
        clearUserAuth: _clearUserAuth2.default,
        clearApiTokenAuth: _clearApiTokenAuth2.default,
        clearDomain: _clearDomain2.default,
        clearGuestSpaceId: _clearGuestSpaceId2.default
    },
    ui: {}
};

window.kintoneUtility = kintoneUtility;
exports.default = kintoneUtility;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: getRecord
 *  @param {object} params
 *  @param {number} params.app
 *  @param {number} params.id
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!(params && params.id)) {
        return (0, _createError2.default)(_errorMessages2.default.required.id);
    }

    var param = {
        app: params.app,
        id: params.id
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/record', 'GET', param, isGuest);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _es6Promise = __webpack_require__(7);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: useXMLHttp
 *  @param {string} api
 *  @param {string} method
 *  @param {object} param
 *  @param {boolean} isGuest
 *
 *  @return  {object} result
 */
/*eslint no-underscore-dangle: 0*/
exports.default = function (api, method, param, isGuest) {
    var _makeRequestURL = function _makeRequestURL() {
        var _method = encodeURIComponent(method);
        var hostname = kintoneUtility.rest.domain ? kintoneUtility.rest.domain : location.hostname;
        if (!hostname) {
            return false;
        }
        if (kintoneUtility.rest.guestSpaceId) {
            var urlParts = api.split('/');
            return 'https://' + hostname + '/k/guest/' + kintoneUtility.rest.guestSpaceId + '/' + (urlParts[2] + '/' + urlParts[3] + '.json?_method=' + _method);
        } else if (!isGuest) {
            return 'https://' + hostname + api + '.json?_method=' + _method;
        } else if (window && window.kintone && isGuest) {
            return kintone.api.url(api, isGuest);
        }
    };

    var _setOverrideHeader = function _setOverrideHeader(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', method);
    };

    var _setBasicAuthHeader = function _setBasicAuthHeader(xhr) {
        if (kintoneUtility.rest.basicAuthBase64) {
            xhr.setRequestHeader('Authorization', 'Basic ' + kintoneUtility.rest.basicAuthBase64);
        }
    };

    var _setUserAuthHeader = function _setUserAuthHeader(xhr) {
        if (kintoneUtility.rest.userAuthBase64) {
            xhr.setRequestHeader('X-Cybozu-Authorization', kintoneUtility.rest.userAuthBase64);
            return true;
        }
        return false;
    };

    var _setApiTokenAuthHeader = function _setApiTokenAuthHeader(xhr) {
        if (kintoneUtility.rest.apiToken) {
            xhr.setRequestHeader('X-Cybozu-API-Token', kintoneUtility.rest.apiToken);
            return true;
        }
        return false;
    };

    var _setRequestToken = function _setRequestToken() {
        if (window && window.kintone) {
            param['__REQUEST_TOKEN__'] = kintone.getRequestToken();
        }
    };

    var _setHeaders = function _setHeaders(xhr) {
        if (!(api.indexOf('file') > -1) || method !== 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        _setOverrideHeader(xhr);
        _setBasicAuthHeader(xhr);
        var isUserAuth = _setUserAuthHeader(xhr);
        var isApiTokenAuth = _setApiTokenAuthHeader(xhr);
        if (!isUserAuth && !isApiTokenAuth) {
            return true;
        }
        return false;
    };

    var _send = function _send(xhr, resolve, reject) {
        xhr.onload = function (r) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(JSON.stringify(param));
    };

    var _getFile = function _getFile(xhr, resolve, reject) {
        xhr.responseType = 'blob';
        xhr.onload = function (r) {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.send(JSON.stringify(param));
    };

    var _postFile = function _postFile(xhr, resolve, reject) {
        var formData = new FormData();
        if (param['__REQUEST_TOKEN__']) {
            formData.append('__REQUEST_TOKEN__', param['__REQUEST_TOKEN__']);
        }
        formData.append('file', param.blob, param.fileName);
        xhr.onload = function (r) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(formData);
    };

    return new _es6Promise.Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        var url = _makeRequestURL();
        if (!url) {
            reject(_errorMessages2.default.useSetDomain);
        } else {
            xhr.open('POST', url, true);
            var isNeededCSRFToken = _setHeaders(xhr);
            if (isNeededCSRFToken) {
                _setRequestToken();
            }
            if (!(api.indexOf('file') > -1)) {
                //record
                _send(xhr, resolve, reject);
            } else if (method === 'GET') {
                //file
                _getFile(xhr, resolve, reject);
            } else {
                _postFile(xhr, resolve, reject);
            }
        }
    });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _postRecords = __webpack_require__(11);

var _postRecords2 = _interopRequireDefault(_postRecords);

var _sliceArray = __webpack_require__(6);

var _sliceArray2 = _interopRequireDefault(_sliceArray);

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: postAllRecords
 *   Can register over 2000 records, but can't do rollback.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!Array.isArray(params.records)) {
        return (0, _createError2.default)(_errorMessages2.default.shouldBeArray.records);
    } else if (params.records && params.records.length < 1) {
        return (0, _createError2.default)(_errorMessages2.default.emptyArray.records);
    }

    var results = [];

    var postAll = function postAll(beginNum) {
        var begin = beginNum || 0;
        var isGuest = Boolean(params.isGuest);
        var param = {
            app: params.app,
            records: (0, _sliceArray2.default)(params.records, begin),
            isGuest: isGuest
        };

        return (0, _postRecords2.default)(param).then(function (response) {
            results = results.concat(response.results);
            begin += _limit2.default.bulk;
            if (params.records.length <= begin) {
                return {
                    results: results
                };
            }
            return postAll(begin);
        });
    };

    return postAll();
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _putRecords = __webpack_require__(13);

var _putRecords2 = _interopRequireDefault(_putRecords);

var _sliceArray = __webpack_require__(6);

var _sliceArray2 = _interopRequireDefault(_sliceArray);

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: putAllRecords
 *   Can update over 2000 records, but can't do rollback.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!Array.isArray(params.records)) {
        return (0, _createError2.default)(_errorMessages2.default.shouldBeArray.records);
    } else if (params.records && params.records.length < 1) {
        return (0, _createError2.default)(_errorMessages2.default.emptyArray.records);
    }

    var results = [];

    var putAll = function putAll(beginNum) {
        var begin = beginNum || 0;
        var isGuest = Boolean(params.isGuest);
        var param = {
            app: params.app,
            records: (0, _sliceArray2.default)(params.records, begin),
            isGuest: isGuest
        };

        return (0, _putRecords2.default)(param).then(function (response) {
            results = results.concat(response.results);
            begin += _limit2.default.bulk;
            if (params.records.length <= begin) {
                return {
                    results: results
                };
            }
            return putAll(begin);
        });
    };

    return putAll();
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getAllRecordsByQuery = __webpack_require__(5);

var _getAllRecordsByQuery2 = _interopRequireDefault(_getAllRecordsByQuery);

var _deleteAllRecords = __webpack_require__(15);

var _deleteAllRecords2 = _interopRequireDefault(_deleteAllRecords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: deleteAllRecordsByQuery
 *   Can delete over 2000 records, but can't do rollback.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} params.query
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    params.fields = ['$id'];
    return (0, _getAllRecordsByQuery2.default)(params).then(function (resp) {
        var ids = [];
        var records = resp.records;
        if (!records || !records.length) {
            return {};
        }
        for (var i = 0; i < records.length; i++) {
            ids.push(records[i].$id.value);
        }
        var param = {
            app: params.app,
            ids: ids,
            isGuest: params.isGuest
        };
        return (0, _deleteAllRecords2.default)(param).then(function (response) {
            return response;
        });
    });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _getRecords = __webpack_require__(9);

var _getRecords2 = _interopRequireDefault(_getRecords);

var _postRecord = __webpack_require__(10);

var _postRecord2 = _interopRequireDefault(_postRecord);

var _putRecord = __webpack_require__(12);

var _putRecord2 = _interopRequireDefault(_putRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: upsertRecord
 *  @param {object} params
 *  @param {number} params.app
 *  @param {object} params.updateKey
 *  @param {string} params.updateKey.field
 *  @param {string} params.updateKey.value
 *  @param {object} params.record
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!params.updateKey || !params.updateKey.field || !params.updateKey.value && params.updateKey.value !== '') {
        return (0, _createError2.default)(_errorMessages2.default.required.updateKey);
    }

    params.query = params.updateKey.field + ' = "' + params.updateKey.value + '"';
    return (0, _getRecords2.default)(params).then(function (resp) {
        if (params.updateKey.value === '' || resp.records.length < 1) {
            //post
            params.record[params.updateKey.field] = {
                value: params.updateKey.value
            };
            return (0, _postRecord2.default)(params);
        } else if (resp.records.length === 1) {
            //put
            return (0, _putRecord2.default)(params);
        }
        //not unique
        return (0, _createError2.default)(_errorMessages2.default.notUniqueField);
    });
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _makeBulkParam = __webpack_require__(4);

var _makeBulkParam2 = _interopRequireDefault(_makeBulkParam);

var _getAllRecordsByQuery = __webpack_require__(5);

var _getAllRecordsByQuery2 = _interopRequireDefault(_getAllRecordsByQuery);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

var _limit = __webpack_require__(3);

var _limit2 = _interopRequireDefault(_limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: upsertRecords
 *  Can't upsert over 1500 records.
 *   If request is failed, no record is inserted and updated.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    } else if (!Array.isArray(params.records)) {
        return (0, _createError2.default)(_errorMessages2.default.shouldBeArray.records);
    } else if (params.records && params.records.length > _limit2.default.upsertRecords) {
        return (0, _createError2.default)(_errorMessages2.default.overLength.recordsLessThan1500);
    } else if (params.records && params.records.length < 1) {
        return (0, _createError2.default)(_errorMessages2.default.emptyArray.records);
    }

    var doesExistSameFieldValue = function doesExistSameFieldValue(allRecords, comparedRecord) {
        if (comparedRecord.updateKey.value === '') {
            //updateKey.value is '' => post
            return false;
        }
        for (var i = 0; i < allRecords.length; i++) {
            if (allRecords[i][comparedRecord.updateKey.field].value === comparedRecord.updateKey.value) {
                //exist => put
                return true;
            }
        }
        //doesn't exist => post
        return false;
    };

    var sendUpsertBulkRequest = function sendUpsertBulkRequest(postRecords, putRecords) {
        var isGuest = Boolean(params.isGuest);
        var postBulkParam = (0, _makeBulkParam2.default)({
            app: params.app,
            records: postRecords,
            method: 'POST',
            isGuest: isGuest
        });
        var putBulkParam = (0, _makeBulkParam2.default)({
            app: params.app,
            records: putRecords,
            method: 'PUT',
            isGuest: isGuest
        });
        var param = {
            requests: postBulkParam.requests.concat(putBulkParam.requests)
        };

        return (0, _sendRequest2.default)('/k/v1/bulkRequest', 'POST', param, isGuest);
    };

    return (0, _getAllRecordsByQuery2.default)(params).then(function (resp) {
        var allRecords = resp.records;
        var records = params.records;
        var putRecords = [];
        var postRecords = [];
        for (var i = 0; i < records.length; i++) {
            if (doesExistSameFieldValue(allRecords, records[i])) {
                putRecords.push(records[i]);
            } else {
                var record = records[i].record;
                record[records[i].updateKey.field] = {
                    value: records[i].updateKey.value
                };
                postRecords.push(record);
            }
        }

        return sendUpsertBulkRequest(postRecords, putRecords);
    });
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: setBasicAuth
 *  @param {string} userName
 *  @param {string} password
 */
exports.default = function (userName, password) {
    if (!userName || !password) {
        throw _errorMessages2.default.emptyUserNameOrPass;
    }
    kintoneUtility.rest.basicAuthBase64 = typeof Buffer !== 'undefined' ? new Buffer(userName + ':' + password).toString('base64') : btoa(userName + ':' + password);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16).Buffer))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: setUserAuth
 *  @param {string} loginName
 *  @param {string} password
 */
exports.default = function (loginName, password) {
    if (!loginName || !password) {
        throw _errorMessages2.default.emptyLoginNameOrPass;
    }
    kintoneUtility.rest.userAuthBase64 = typeof Buffer !== 'undefined' ? new Buffer(loginName + ':' + password).toString('base64') : btoa(loginName + ':' + password);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16).Buffer))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: setApiTokenAuth
 *  @param {string} apiToken
 */
exports.default = function (apiToken) {
    if (!apiToken) {
        throw _errorMessages2.default.emptyApiToken;
    }
    kintoneUtility.rest.apiToken = apiToken;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: setDomain
 *  @param {string} domain
 */
exports.default = function (domain) {
    if (!domain) {
        throw _errorMessages2.default.emptyDomain;
    }
    kintoneUtility.rest.domain = domain;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: setGuestSpaceId
 *  @param {number} guestSpaceId
 */
exports.default = function (guestSpaceId) {
    if (!guestSpaceId) {
        throw _errorMessages2.default.emptyGuestSpaceId;
    }
    kintoneUtility.rest.guestSpaceId = guestSpaceId;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/** Function: clearBasicAuth
 */
exports.default = function () {
  kintoneUtility.rest.basicAuthBase64 = undefined;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/** Function: clearUserAuth
 */
exports.default = function () {
  kintoneUtility.rest.userAuthBase64 = undefined;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/** Function: clearApiTokenAuth
 */
exports.default = function () {
  kintoneUtility.rest.apiToken = undefined;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/** Function: clearDomain
 */
exports.default = function () {
  kintoneUtility.rest.domain = undefined;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/** Function: clearGuestSpaceId
 */
exports.default = function () {
  kintoneUtility.rest.guestSpaceId = undefined;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: downloadFile
 *  @param {object} params
 *  @param {string} params.fileKey
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.fileKey)) {
        return (0, _createError2.default)(_errorMessages2.default.required.fileKey);
    }

    var param = {
        fileKey: params.fileKey
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/file', 'GET', param, isGuest);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: uploadFile
 *  @param {object} params
 *  @param {string} params.fileName
 *  @param {object} params.blob
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.blob && params.fileName)) {
        return (0, _createError2.default)(_errorMessages2.default.required.fileNameOrBlob);
    }

    var param = {
        fileName: params.fileName,
        blob: params.blob
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/file', 'POST', param, isGuest);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: getFormFields
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} params.lang
 *  @param {boolean} params.isGuest
 *  @param {boolean} params.isPreview
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    }

    var isPreview = params.hasOwnProperty('isPreview') ? Boolean(params.isPreview) : false;
    var api = isPreview ? '/k/v1/preview/app/form/fields' : '/k/v1/app/form/fields';
    var param = {
        app: params.app
    };
    if (params.hasOwnProperty('lang')) {
        param.lang = params.lang;
    }
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)(api, 'GET', param, isGuest);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: getFormLayout
 *  @param {object} params
 *  @param {number} params.app
 *  @param {boolean} params.isGuest
 *  @param {boolean} params.isPreview
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    }

    var isPreview = params.hasOwnProperty('isPreview') ? Boolean(params.isPreview) : false;
    var api = isPreview ? '/k/v1/preview/app/form/layout' : '/k/v1/app/form/layout';
    var param = {
        app: params.app
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)(api, 'GET', param, isGuest);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: postDeployAppSettings
 *  @param {object} params
 *  @param {object[]} params.apps
 *  @param {number} params.apps[].app
 *  @param {number?} params.apps[].revision
 *  @param {boolean?} params.revert
 *  @param {boolean?} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.apps)) {
        return (0, _createError2.default)(_errorMessages2.default.required.apps);
    }

    var param = {
        apps: params.apps
    };
    if (params.hasOwnProperty('revert')) {
        param.revert = Boolean(params.revert);
    }
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/preview/app/deploy', 'POST', param, isGuest);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: getAppDeployStatus
 *  @param {object} params
 *  @param {object[]} params.apps
 *  @param {number} params.apps[].app
 *  @param {boolean?} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.apps)) {
        return (0, _createError2.default)(_errorMessages2.default.required.apps);
    }

    var param = {
        apps: params.apps
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/preview/app/deploy', 'GET', param, isGuest);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: getCustomization
 *  @param {object} params
 *  @param {number} params.app
 *  @param {boolean} params.isGuest
 *  @param {boolean} params.isPreview
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    }

    var isPreview = params.hasOwnProperty('isPreview') ? Boolean(params.isPreview) : false;
    var url = isPreview ? '/k/v1/preview/app/customize' : '/k/v1/app/customize';
    var param = {
        app: params.app
    };
    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)(url, 'GET', param, isGuest);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createError = __webpack_require__(1);

var _createError2 = _interopRequireDefault(_createError);

var _errorMessages = __webpack_require__(0);

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _sendRequest = __webpack_require__(2);

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Function: updateCustomization
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string?} params.scope
 *  @param {object?} params.desktop
 *  @param {object[]?} params.desktop.js
 *  @param {string} params.desktop.js[].type
 *  @param {string?} params.desktop.js[].url
 *  @param {object?} params.desktop.js[].file
 *  @param {string} params.desktop.js[].file.fileKey
 *  @param {object[]?} params.desktop.css
 *  @param {string} params.desktop.css[].type
 *  @param {string?} params.desktop.css[].url
 *  @param {object?} params.desktop.css[].file
 *  @param {string} params.desktop.css[].file.fileKey
 *  @param {object[]?} params.mobile.js
 *  @param {string} params.mobile.js[].type
 *  @param {string?} params.mobile.js[].url
 *  @param {object?} params.mobile.js[].file
 *  @param {string} params.mobile.js[].file.fileKey
 *  @param {number?} params.revision
 *  @param {boolean?} params.isGuest
 *
 *  @return {object} result
 */
exports.default = function (params) {
    if (!(params && params.app)) {
        return (0, _createError2.default)(_errorMessages2.default.required.app);
    }

    var param = {
        app: params.app
    };
    if (params.hasOwnProperty('scope')) {
        param.scope = params.scope;
    }
    if (params.hasOwnProperty('desktop')) {
        param.desktop = params.desktop;
    }
    if (params.hasOwnProperty('mobile')) {
        param.mobile = params.mobile;
    }
    if (params.hasOwnProperty('revision')) {
        param.revision = Number(params.revision);
    }

    var isGuest = Boolean(params.isGuest);

    return (0, _sendRequest2.default)('/k/v1/preview/app/customize', 'PUT', param, isGuest);
};

/***/ })
/******/ ]);