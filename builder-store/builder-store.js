"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _builderReducer = _interopRequireDefault(require("./builder-reducer"));

var builderStore = (0, _redux.createStore)(_builderReducer["default"], {
  initialized: false
});
var _default = builderStore;
exports["default"] = _default;