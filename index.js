(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AngularticsOptimizelyConfig;
function AngularticsOptimizelyConfig($analyticsProvider, $window) {
  $analyticsProvider.settings.pageTracking.trackRelativePath = true;
  $window.optimizely = $window.optimizely || [];

  var trackEvent = function trackEvent() {
    for (var _len = arguments.length, what = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      what[_key - 1] = arguments[_key];
    }

    var type = arguments.length <= 0 || arguments[0] === undefined ? 'trackEvent' : arguments[0];

    what.unshift(type);
    $window.optimizely.push(what);
  };

  $analyticsProvider.registerPageTrack(function (path, $location) {
    trackEvent($analyticsProvider.settings.optimizely.properties.pageName || path);
  });

  $analyticsProvider.registerEventTrack(function (eventType, properties) {
    trackEvent(eventType);
  });
}

},{}],2:[function(require,module,exports){
'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularticsOptimizely = require('./angulartics-optimizely');

var _angularticsOptimizely2 = _interopRequireDefault(_angularticsOptimizely);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('angulartics.optimizely', ['angulartics']).config(_angularticsOptimizely2.default);

},{"./angulartics-optimizely":1,"angular":"angular"}]},{},[2])


//# sourceMappingURL=index.js.map
