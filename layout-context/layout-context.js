"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ComponentPickerContext = exports.DropTargetContext = void 0;

var _react = require("react");

var DropTargetContext = /*#__PURE__*/(0, _react.createContext)({});
exports.DropTargetContext = DropTargetContext;
var ComponentPickerContext = /*#__PURE__*/(0, _react.createContext)({});
exports.ComponentPickerContext = ComponentPickerContext;
var _default = {
  DropTargetContext: DropTargetContext,
  ComponentPickerContext: ComponentPickerContext
};
exports["default"] = _default;