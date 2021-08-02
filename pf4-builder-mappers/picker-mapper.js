"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentTypes = _interopRequireDefault(require("@data-driven-forms/react-form-renderer/component-types"));

var _Button = require("@patternfly/react-core/dist/js/components/Button/Button.js");

require("./pf4-mapper-style.css");

var _constants = require("../constants");

var _labels;

var labels = (_labels = {}, (0, _defineProperty2["default"])(_labels, _componentTypes["default"].TEXT_FIELD, 'Text field'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].CHECKBOX, 'Checkbox'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].SELECT, 'Select'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].DATE_PICKER, 'Date picker'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].PLAIN_TEXT, 'Plain text'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].RADIO, 'Radio'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].SWITCH, 'Switch'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].TEXTAREA, 'Textarea'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].SUB_FORM, 'Sub form'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].DUAL_LIST_SELECT, 'Dual list select'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].SLIDER, 'Slider'), _labels);

var PickerRoot = function PickerRoot(_ref) {
  var component = _ref.component;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "pf4-picker-root"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    tabIndex: -1,
    variant: "primary",
    color: "primary"
  }, labels[component] || component));
};

PickerRoot.propTypes = {
  component: _propTypes["default"].string.isRequired
};
var pickerMapper = (0, _defineProperty2["default"])({}, _constants.builderComponentTypes.PICKER_FIELD, PickerRoot);
var _default = pickerMapper;
exports["default"] = _default;