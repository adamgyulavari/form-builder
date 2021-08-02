import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import dataTypes from "@data-driven-forms/react-form-renderer/data-types";

var castToBoolean = function castToBoolean(value) {
  if (typeof value === 'boolean') {
    return value;
  }

  return value === 'true';
};

var convertType = function convertType(dataType, value) {
  var _dataTypes$INTEGER$da;

  return (_dataTypes$INTEGER$da = {}, _defineProperty(_dataTypes$INTEGER$da, dataTypes.INTEGER, !isNaN(Number(value)) && parseInt(value)), _defineProperty(_dataTypes$INTEGER$da, dataTypes.FLOAT, !isNaN(Number(value)) && parseFloat(value)), _defineProperty(_dataTypes$INTEGER$da, dataTypes.NUMBER, Number(value)), _defineProperty(_dataTypes$INTEGER$da, dataTypes.BOOLEAN, castToBoolean(value)), _dataTypes$INTEGER$da)[dataType] || value;
};

var convertInitialValue = function convertInitialValue(initialValue, dataType) {
  if (initialValue === undefined || !dataType) {
    return initialValue;
  }

  if (Array.isArray(initialValue)) {
    return initialValue.map(function (value) {
      return _typeof(value) === 'object' ? _objectSpread(_objectSpread({}, value), {}, {
        value: Object.prototype.hasOwnProperty.call(value, 'value') ? convertType(dataType, value.value) : value
      }) : convertType(dataType, value);
    });
  }

  return convertType(dataType, initialValue);
};

export default convertInitialValue;