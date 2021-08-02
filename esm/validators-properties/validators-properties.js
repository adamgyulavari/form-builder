import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _validatorTypes$MAX_L;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import validatorTypes from "@data-driven-forms/react-form-renderer/validator-types";
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
export default (_validatorTypes$MAX_L = {}, _defineProperty(_validatorTypes$MAX_L, validatorTypes.MAX_LENGTH, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Max length',
  restriction: {
    inputAttribute: 'max',
    validatorAttribute: thresholdType.propertyName
  }
}), messageType]), _defineProperty(_validatorTypes$MAX_L, validatorTypes.MIN_LENGTH, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Min length',
  restriction: {
    inputAttribute: 'min',
    validatorAttribute: thresholdType.propertyName
  }
}), messageType]), _defineProperty(_validatorTypes$MAX_L, validatorTypes.EXACT_LENGTH, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Exact length'
}), messageType]), _defineProperty(_validatorTypes$MAX_L, validatorTypes.MAX_NUMBER_VALUE, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Maximum value',
  propertyName: 'value',
  restriction: {
    inputAttribute: 'max',
    validatorAttribute: 'value'
  }
}), _objectSpread(_objectSpread({}, includeThresholdType), {}, {
  label: 'Include value'
}), messageType]), _defineProperty(_validatorTypes$MAX_L, validatorTypes.MIN_NUMBER_VALUE, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Minimum value',
  propertyName: 'value',
  restriction: {
    inputAttribute: 'min',
    validatorAttribute: 'value'
  }
}), _objectSpread(_objectSpread({}, includeThresholdType), {}, {
  label: 'Include value'
}), messageType]), _defineProperty(_validatorTypes$MAX_L, validatorTypes.MIN_ITEMS, [_objectSpread(_objectSpread({}, thresholdType), {}, {
  label: 'Minimum number of items'
}), messageType]), _defineProperty(_validatorTypes$MAX_L, validatorTypes.PATTERN, [_objectSpread(_objectSpread({}, patternType), {}, {
  restriction: {
    lock: true
  }
}), messageType]), _defineProperty(_validatorTypes$MAX_L, validatorTypes.URL, [messageType].concat(_toConsumableArray(urlTypes))), _validatorTypes$MAX_L);