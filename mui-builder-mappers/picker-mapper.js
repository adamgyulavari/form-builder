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

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextFields = _interopRequireDefault(require("@material-ui/icons/TextFields"));

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _FormatListBulleted = _interopRequireDefault(require("@material-ui/icons/FormatListBulleted"));

var _Today = _interopRequireDefault(require("@material-ui/icons/Today"));

var _ChromeReaderMode = _interopRequireDefault(require("@material-ui/icons/ChromeReaderMode"));

var _RadioButtonChecked = _interopRequireDefault(require("@material-ui/icons/RadioButtonChecked"));

var _ToggleOff = _interopRequireDefault(require("@material-ui/icons/ToggleOff"));

var _LowPriority = _interopRequireDefault(require("@material-ui/icons/LowPriority"));

var _Tune = _interopRequireDefault(require("@material-ui/icons/Tune"));

var _styles = require("@material-ui/core/styles");

var _constants = require("../constants");

var _labels, _icons;

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      '& > *': {
        'margin-bottom': 8
      }
    },
    label: {
      justifyContent: 'end'
    },
    buttonRoot: {
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(135deg, #41108E 0%, rgba(165, 37, 193, 1) 44.76%, #FC9957 100%)',
      backgroundRepeat: 'no-repeat'
    }
  };
});
var labels = (_labels = {}, (0, _defineProperty2["default"])(_labels, _componentTypes["default"].TEXT_FIELD, 'Text field'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].CHECKBOX, 'Checkbox'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].SELECT, 'Select'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].DATE_PICKER, 'Date picker'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].PLAIN_TEXT, 'Plain text'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].RADIO, 'Radio'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].SWITCH, 'Switch'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].TEXTAREA, 'Textarea'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].SUB_FORM, 'Sub form'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].DUAL_LIST_SELECT, 'Dual list select'), (0, _defineProperty2["default"])(_labels, _componentTypes["default"].SLIDER, 'Slider'), _labels);
var icons = (_icons = {}, (0, _defineProperty2["default"])(_icons, _componentTypes["default"].TEXT_FIELD, /*#__PURE__*/_react["default"].createElement(_TextFields["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].CHECKBOX, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].SELECT, /*#__PURE__*/_react["default"].createElement(_FormatListBulleted["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].DATE_PICKER, /*#__PURE__*/_react["default"].createElement(_Today["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].DUAL_LIST_SELECT, /*#__PURE__*/_react["default"].createElement(_LowPriority["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].PLAIN_TEXT, /*#__PURE__*/_react["default"].createElement(_ChromeReaderMode["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].RADIO, /*#__PURE__*/_react["default"].createElement(_RadioButtonChecked["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].SWITCH, /*#__PURE__*/_react["default"].createElement(_ToggleOff["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].TEXTAREA, /*#__PURE__*/_react["default"].createElement(_TextFields["default"], null)), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].SUB_FORM, null), (0, _defineProperty2["default"])(_icons, _componentTypes["default"].SLIDER, /*#__PURE__*/_react["default"].createElement(_Tune["default"], null)), _icons);

var PickerRoot = function PickerRoot(_ref) {
  var component = _ref.component;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    startIcon: icons[component],
    tabIndex: -1,
    classes: {
      label: classes.label,
      root: classes.buttonRoot
    },
    color: "primary",
    fullWidth: true
  }, labels[component] || component));
};

PickerRoot.propTypes = {
  component: _propTypes["default"].string.isRequired
};
var pickerMapper = (0, _defineProperty2["default"])({}, _constants.builderComponentTypes.PICKER_FIELD, PickerRoot);
var _default = pickerMapper;
exports["default"] = _default;