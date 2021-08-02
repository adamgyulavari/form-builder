"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Switch = require("@patternfly/react-core/dist/js/components/Switch/Switch.js");

var _Button = require("@patternfly/react-core/dist/js/components/Button/Button.js");

var _FormGroup = require("@patternfly/react-core/dist/js/components/Form/FormGroup.js");

var _TextArea = require("@patternfly/react-core/dist/js/components/TextArea/TextArea.js");

var _TextInput = require("@patternfly/react-core/dist/js/components/TextInput/TextInput.js");

var _trashIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/js/icons/trash-icon"));

var _plusIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/js/icons/plus-icon"));

var _trashRestoreIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/js/icons/trash-restore-icon"));

var _select = require("@data-driven-forms/pf4-component-mapper/select");

var _excluded = ["propertyValidation", "children"],
    _excluded2 = ["label", "value", "fieldId", "innerProps"],
    _excluded3 = ["value", "fieldId", "innerProps"],
    _excluded4 = ["label", "options", "fieldId", "innerProps"],
    _excluded5 = ["value", "fieldId", "innerProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormGroupWrapper = function FormGroupWrapper(_ref) {
  var message = _ref.propertyValidation.message,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_FormGroup.FormGroup, (0, _extends2["default"])({
    helperTextInvalid: message,
    validated: message ? 'error' : 'default'
  }, props), children);
};

FormGroupWrapper.propTypes = {
  propertyValidation: _propTypes["default"].shape({
    message: _propTypes["default"].string
  }),
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)])
};
FormGroupWrapper.defaultProps = {
  propertyValidation: {}
};

var Input = function Input(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      fieldId = _ref2.fieldId,
      propertyValidation = _ref2.innerProps.propertyValidation,
      rest = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(FormGroupWrapper, {
    label: label,
    fieldId: fieldId,
    propertyValidation: propertyValidation
  }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, (0, _extends2["default"])({
    id: fieldId,
    value: (0, _typeof2["default"])(value) === undefined ? '' : value.toString()
  }, rest))));
};

Input.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string]).isRequired,
  value: _propTypes["default"].any,
  fieldId: _propTypes["default"].string.isRequired,
  innerProps: _propTypes["default"].shape({
    propertyValidation: _propTypes["default"].shape({
      message: _propTypes["default"].string
    })
  }).isRequired
};
Input.defaultProps = {
  onChange: function onChange() {},
  value: ''
};

var PropertySwitch = function PropertySwitch(_ref3) {
  var value = _ref3.value,
      fieldId = _ref3.fieldId,
      propertyValidation = _ref3.innerProps.propertyValidation,
      rest = (0, _objectWithoutProperties2["default"])(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement(FormGroupWrapper, {
    fieldId: fieldId,
    propertyValidation: propertyValidation
  }, /*#__PURE__*/_react["default"].createElement(_Switch.Switch, (0, _extends2["default"])({
    isChecked: Boolean(value),
    id: fieldId
  }, rest)));
};

PropertySwitch.propTypes = {
  label: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].any,
  fieldId: _propTypes["default"].string.isRequired,
  innerProps: _propTypes["default"].shape({
    propertyValidation: _propTypes["default"].shape({
      message: _propTypes["default"].string
    })
  }).isRequired
};
PropertySwitch.defaultProps = {
  value: false
};

var PropertySelect = function PropertySelect(_ref4) {
  var label = _ref4.label,
      options = _ref4.options,
      fieldId = _ref4.fieldId,
      propertyValidation = _ref4.innerProps.propertyValidation,
      rest = (0, _objectWithoutProperties2["default"])(_ref4, _excluded4);
  return /*#__PURE__*/_react["default"].createElement(FormGroupWrapper, {
    label: label,
    fieldId: fieldId,
    propertyValidation: propertyValidation
  }, /*#__PURE__*/_react["default"].createElement(_select.InternalSelect, (0, _extends2["default"])({
    id: fieldId,
    options: options.map(function (option) {
      return {
        value: option,
        label: option
      };
    })
  }, rest)));
};

PropertySelect.propTypes = {
  label: _propTypes["default"].string.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  fieldId: _propTypes["default"].string.isRequired,
  innerProps: _propTypes["default"].shape({
    propertyValidation: _propTypes["default"].shape({
      message: _propTypes["default"].string
    })
  }).isRequired
};
PropertySelect.defaultProps = {
  onChange: function onChange() {}
};

var PropertyOptions = function PropertyOptions(_ref5) {
  var _ref5$value = _ref5.value,
      value = _ref5$value === void 0 ? [] : _ref5$value,
      label = _ref5.label,
      onChange = _ref5.onChange,
      restricted = _ref5.innerProps.restricted;

  var handleOptionChange = function handleOptionChange(option, index, optionKey) {
    return onChange(value.map(function (item, itemIndex) {
      return index === itemIndex ? _objectSpread(_objectSpread({}, item), {}, (0, _defineProperty2["default"])({}, optionKey, option)) : item;
    }));
  };

  var handleRemove = function handleRemove(index, restoreable) {
    var options;

    if (restoreable) {
      options = value.map(function (item, itemIndex) {
        return itemIndex === index ? _objectSpread(_objectSpread({}, item), {}, {
          deleted: !item.deleted
        }) : item;
      });
    } else {
      options = value.filter(function (_item, itemIndex) {
        return itemIndex !== index;
      });
    }

    return onChange(options.length > 0 ? options : undefined);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, label), !restricted && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return onChange([].concat((0, _toConsumableArray2["default"])(value), [{
        value: '',
        label: ''
      }]));
    },
    variant: "plain",
    "aria-label": "add option"
  }, /*#__PURE__*/_react["default"].createElement(_plusIcon["default"], null))), /*#__PURE__*/_react["default"].createElement("table", {
    className: "pf4-options-property-editor-table"
  }, /*#__PURE__*/_react["default"].createElement("tbody", null, value.map(function (_ref6, index, allOptions) {
    var label = _ref6.label,
        value = _ref6.value,
        restoreable = _ref6.restoreable,
        deleted = _ref6.deleted;
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "pf4-options-propery-editor-cell"
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      "aria-label": "option-label-".concat(index),
      isDisabled: deleted,
      placeholder: "Label",
      onChange: function onChange(value) {
        return handleOptionChange(value, index, 'label');
      },
      value: label || '',
      type: "text"
    })), /*#__PURE__*/_react["default"].createElement("td", {
      className: "pf4-options-propery-editor-cell"
    }, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
      "aria-label": "option-value-".concat(index),
      onKeyPress: function onKeyPress(_ref7) {
        var key = _ref7.key;

        if (key === 'Enter' && index === allOptions.length - 1) {
          onChange([].concat((0, _toConsumableArray2["default"])(allOptions), [{
            value: '',
            label: ''
          }]));
        }
      },
      placeholder: "Value",
      isDisabled: deleted || restricted,
      onChange: function onChange(value) {
        return handleOptionChange(value, index, 'value');
      },
      value: value || '',
      type: "text"
    })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      onClick: function onClick() {
        return handleRemove(index, restoreable);
      },
      variant: "plain",
      "aria-label": "delete option"
    }, deleted ? /*#__PURE__*/_react["default"].createElement(_trashRestoreIcon["default"], {
      className: "pf4-success-color"
    }) : /*#__PURE__*/_react["default"].createElement(_trashIcon["default"], {
      className: "pf4-danger-color"
    }))));
  }))));
};

PropertyOptions.propTypes = {
  value: _propTypes["default"].array,
  label: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  innerProps: _propTypes["default"].shape({
    restricted: _propTypes["default"].bool
  }).isRequired
};

var Textarea = function Textarea(_ref8) {
  var value = _ref8.value,
      fieldId = _ref8.fieldId,
      propertyValidation = _ref8.innerProps.propertyValidation,
      rest = (0, _objectWithoutProperties2["default"])(_ref8, _excluded5);
  return /*#__PURE__*/_react["default"].createElement(FormGroupWrapper, {
    fieldId: fieldId,
    propertyValidation: propertyValidation
  }, /*#__PURE__*/_react["default"].createElement(_TextArea.TextArea, (0, _extends2["default"])({
    id: fieldId,
    value: (0, _typeof2["default"])(value) === undefined ? '' : value
  }, rest)));
};

Textarea.propTypes = {
  value: _propTypes["default"].string,
  fieldId: _propTypes["default"].string.isRequired,
  innerProps: _propTypes["default"].shape({
    propertyValidation: _propTypes["default"].shape({
      message: _propTypes["default"].string
    })
  }).isRequired
};
Textarea.defaultProps = {
  onChange: function onChange() {},
  value: ''
};
var propertiesMapper = {
  input: Input,
  "switch": PropertySwitch,
  select: PropertySelect,
  options: PropertyOptions,
  textarea: Textarea
};
var _default = propertiesMapper;
exports["default"] = _default;