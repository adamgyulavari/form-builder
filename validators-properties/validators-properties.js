"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _validatorTypes = _interopRequireDefault(require("@data-driven-forms/react-form-renderer/validator-types"));

var _validatorTypes$MAX_L;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var messageType = {
  label: 'Message',
  component: 'input',
  propertyName: 'message'
};
var thresholdType = {
  propertyName: 'threshold',
  label: 'Threshold',
  component: 'input',
  type: 'number'
};
var includeThresholdType = {
  propertyName: 'includeThreshold',
  label: 'Include threshold',
  component: 'switch'
};
var patternType = {
  label: 'Pattern',
  component: 'input',
  propertyName: 'pattern'
};
var urlOptions = ['emptyProtocol', 'protocolIdentifier', 'basicAuth', 'local', 'ipv4', 'ipv6', 'host', 'port', 'path', 'search', 'hash'];
var urlTypes = urlOptions.map(function (option) {
  return {
    propertyName: option,
    label: option.split(/(?=[A-Z])/).join(' ').replace(/^./, option[0].toUpperCase()),
    component: 'switch'
  };
});

var _default = (_validatorTypes$MAX_L = {}, (0, _defineProperty2["default"])(_validatorTypes$MAX_L, _validatorTypes["default"].MAX_LENGTH, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Max length',
  restriction: {
    inputAttribute: 'max',
    validatorAttribute: thresholdType.propertyName
  }
}), messageType]), (0, _defineProperty2["default"])(_validatorTypes$MAX_L, _validatorTypes["default"].MIN_LENGTH, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Min length',
  restriction: {
    inputAttribute: 'min',
    validatorAttribute: thresholdType.propertyName
  }
}), messageType]), (0, _defineProperty2["default"])(_validatorTypes$MAX_L, _validatorTypes["default"].EXACT_LENGTH, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Exact length'
}), messageType]), (0, _defineProperty2["default"])(_validatorTypes$MAX_L, _validatorTypes["default"].MAX_NUMBER_VALUE, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Maximum value',
  propertyName: 'value',
  restriction: {
    inputAttribute: 'max',
    validatorAttribute: 'value'
  }
}), _objectSpread(_objectSpread({}, includeThresholdType), {}, {
  label: 'Include value'
}), messageType]), (0, _defineProperty2["default"])(_validatorTypes$MAX_L, _validatorTypes["default"].MIN_NUMBER_VALUE, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Minimum value',
  propertyName: 'value',
  restriction: {
    inputAttribute: 'min',
    validatorAttribute: 'value'
  }
}), _objectSpread(_objectSpread({}, includeThresholdType), {}, {
  label: 'Include value'
}), messageType]), (0, _defineProperty2["default"])(_validatorTypes$MAX_L, _validatorTypes["default"].MIN_ITEMS, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Minimum number of items'
}), messageType]), (0, _defineProperty2["default"])(_validatorTypes$MAX_L, _validatorTypes["default"].PATTERN, [_objectSpread(_objectSpread({}, patternType), {}, {
  restriction: {
    lock: true
  }
}), messageType]), (0, _defineProperty2["default"])(_validatorTypes$MAX_L, _validatorTypes["default"].URL, [messageType].concat((0, _toConsumableArray2["default"])(urlTypes))), _validatorTypes$MAX_L);

exports["default"] = _default;