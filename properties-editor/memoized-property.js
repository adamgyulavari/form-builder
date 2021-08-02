"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _excluded = ["label", "value", "options"],
    _excluded2 = ["Component", "property", "selectedComponent", "handlePropertyChange", "restricted", "propertyValidation"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PropertyComponent = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var Component = _ref.Component,
      _ref$property = _ref.property,
      label = _ref$property.label,
      value = _ref$property.value,
      options = _ref$property.options,
      property = (0, _objectWithoutProperties2["default"])(_ref$property, _excluded),
      selectedComponent = _ref.selectedComponent,
      handlePropertyChange = _ref.handlePropertyChange,
      restricted = _ref.restricted,
      propertyValidation = _ref.propertyValidation,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded2);
  var innerProps = {
    property: property,
    restricted: restricted,
    propertyValidation: propertyValidation,
    selectedComponent: selectedComponent
  };
  return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
    label: label,
    value: value,
    options: options
  }, props, {
    innerProps: innerProps,
    fieldId: property.propertyName,
    onChange: function onChange(value) {
      return handlePropertyChange(value, property.propertyName);
    }
  }));
}, function (prevProps, nextProps) {
  return prevProps.value === nextProps.value && prevProps.restricted === nextProps.restricted && prevProps.selectedComponent === nextProps.selectedComponent && (0, _reactRedux.shallowEqual)(prevProps.propertyValidation, nextProps.propertyValidation);
});
PropertyComponent.propTypes = {
  Component: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func, _propTypes["default"].element]).isRequired,
  field: _propTypes["default"].shape({
    restricted: _propTypes["default"].bool
  }),
  handlePropertyChange: _propTypes["default"].func.isRequired,
  property: _propTypes["default"].shape({
    propertyName: _propTypes["default"].string.isRequired,
    label: _propTypes["default"].string,
    value: _propTypes["default"].any,
    options: _propTypes["default"].array
  }).isRequired,
  restricted: _propTypes["default"].bool,
  propertyValidation: _propTypes["default"].shape({
    propertyValidation: _propTypes["default"].object
  }),
  selectedComponent: _propTypes["default"].string
};

var MemoizedProperty = function MemoizedProperty(props) {
  var _useSelector = (0, _reactRedux.useSelector)(function (_ref2) {
    var fields = _ref2.fields,
        selectedComponent = _ref2.selectedComponent;
    var field = fields[selectedComponent];
    return {
      value: field[props.property.propertyName],
      restricted: field.restricted,
      propertyValidation: field.propertyValidation && field.propertyValidation[props.property.propertyName]
    };
  }, _reactRedux.shallowEqual),
      value = _useSelector.value,
      restricted = _useSelector.restricted,
      propertyValidation = _useSelector.propertyValidation;

  return /*#__PURE__*/_react["default"].createElement(PropertyComponent, (0, _extends2["default"])({}, props, {
    value: value,
    restricted: restricted,
    propertyValidation: propertyValidation
  }));
};

MemoizedProperty.propTypes = {
  property: _propTypes["default"].shape({
    propertyName: _propTypes["default"].string.isRequired
  }).isRequired
};
var _default = MemoizedProperty;
exports["default"] = _default;