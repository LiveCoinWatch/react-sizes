'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getWindowSizes = function getWindowSizes(_ref) {
  var _ref$fallbackWidth = _ref.fallbackWidth,
      fallbackWidth = _ref$fallbackWidth === undefined ? null : _ref$fallbackWidth,
      _ref$fallbackHeight = _ref.fallbackHeight,
      fallbackHeight = _ref$fallbackHeight === undefined ? null : _ref$fallbackHeight,
      _ref$forceFallback = _ref.forceFallback,
      forceFallback = _ref$forceFallback === undefined ? false : _ref$forceFallback;

  var canUseDOM = typeof window !== 'undefined';

  return {
    width: canUseDOM && !forceFallback ? window.innerWidth : fallbackWidth,
    height: canUseDOM && !forceFallback ? window.innerHeight : fallbackHeight,
    canUseDOM: canUseDOM
  };
};

exports.default = getWindowSizes;