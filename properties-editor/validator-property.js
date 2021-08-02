"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentsContext = _interopRequireDefault(require("../components-context"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var restrictionHandler = {
  min: function min(value, defaultValue) {
    return isNaN(value) ? defaultValue : value < defaultValue ? defaultValue : value;
  },
  max: function max(value, defaultValue) {
    return isNaN(value) ? defaultValue : value > defaultValue ? defaultValue : value;
  }
};

var validatorChangeValue = function validatorChangeValue(property, value) {
  var result = property.type === 'number' ? Number(value) : value;

  if (property.restriction) {
    result = restrictionHandler[property.restriction.inputAttribute](value, property.original[property.restriction.validatorAttribute]);
  }

  return (0, _defineProperty2["default"])({}, property.propertyName, result);
};

var ValidatorProperty = function ValidatorProperty(_ref2) {
  var property = _ref2.property,
      _onChange2 = _ref2.onChange,
      value = _ref2.value,
      index = _ref2.index,
      restricted = _ref2.restricted;

  var _useContext = (0, _react.useContext)(_componentsContext["default"]),
      propertiesMapper = _useContext.propertiesMapper;

  var Component = propertiesMapper[property.component];

  var _ref3 = property.restriction && property.original ? (0, _defineProperty2["default"])({
    isDisabled: property.restriction.lock
  }, property.restriction.inputAttribute, property.original[property.restriction.validatorAttribute]) : {},
      isDisabled = _ref3.isDisabled,
      restrictionProperty = _ref3.restrictionProperty;

  var innerProps = {
    property: restrictionProperty,
    restricted: restricted
  };
  return /*#__PURE__*/_react["default"].createElement(Component, {
    value: value,
    type: property.type,
    isDisabled: isDisabled,
    onBlur: function onBlur() {
      return property.propertyName !== 'message' && restricted && _onChange2(validatorChangeValue(property, value), 'modify', index);
    },
    fieldId: "".concat(property.propertyName, "-").concat(index),
    onChange: function onChange(value) {
      return _onChange2((0, _defineProperty2["default"])({}, property.propertyName, property.type === 'number' ? Number(value) : value), 'modify', index);
    },
    label: property.label,
    innerProps: innerProps
  });
};

ValidatorProperty.propTypes = {
  restricted: _propTypes["default"].bool,
  property: _propTypes["default"].shape({
    original: _propTypes["default"].object,
    propertyName: _propTypes["default"].string.isRequired,
    component: _propTypes["default"].string.isRequired,
    type: _propTypes["default"].string,
    label: _propTypes["default"].string.isRequired,
    restriction: _propTypes["default"].shape({
      inputAttribute: _propTypes["default"].string,
      validatorAttribute: _propTypes["default"].string,
      lock: _propTypes["default"].bool
    })
  }),
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].any,
  index: _propTypes["default"].number.isRequired
};
var _default = ValidatorProperty;
exports["default"] = _default;