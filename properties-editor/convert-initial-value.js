"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _dataTypes = _interopRequireDefault(require("@data-driven-forms/react-form-renderer/data-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var castToBoolean = function castToBoolean(value) {
  if (typeof value === 'boolean') {
    return value;
  }

  return value === 'true';
};

var convertType = function convertType(dataType, value) {
  var _dataTypes$INTEGER$da;

  return (_dataTypes$INTEGER$da = {}, (0, _defineProperty2["default"])(_dataTypes$INTEGER$da, _dataTypes["default"].INTEGER, !isNaN(Number(value)) && parseInt(value)), (0, _defineProperty2["default"])(_dataTypes$INTEGER$da, _dataTypes["default"].FLOAT, !isNaN(Number(value)) && parseFloat(value)), (0, _defineProperty2["default"])(_dataTypes$INTEGER$da, _dataTypes["default"].NUMBER, Number(value)), (0, _defineProperty2["default"])(_dataTypes$INTEGER$da, _dataTypes["default"].BOOLEAN, castToBoolean(value)), _dataTypes$INTEGER$da)[dataType] || value;
};

var convertInitialValue = function convertInitialValue(initialValue, dataType) {
  if (initialValue === undefined || !dataType) {
    return initialValue;
  }

  if (Array.isArray(initialValue)) {
    return initialValue.map(function (value) {
      return (0, _typeof2["default"])(value) === 'object' ? _objectSpread(_objectSpread({}, value), {}, {
        value: Object.prototype.hasOwnProperty.call(value, 'value') ? convertType(dataType, value.value) : value
      }) : convertType(dataType, value);
    });
  }

  return convertType(dataType, initialValue);
};

var _default = convertInitialValue;
exports["default"] = _default;