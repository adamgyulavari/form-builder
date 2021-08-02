"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _RestoreFromTrash = _interopRequireDefault(require("@material-ui/icons/RestoreFromTrash"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _excluded = ["value", "fieldId", "onChange", "innerProps", "isDisabled", "helperText"],
    _excluded2 = ["value", "fieldId", "onChange", "innerProps", "isDisabled", "helperText", "options"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Input = function Input(_ref) {
  var value = _ref.value,
      fieldId = _ref.fieldId,
      _onChange = _ref.onChange,
      _ref$innerProps$prope = _ref.innerProps.propertyValidation,
      propertyValidation = _ref$innerProps$prope === void 0 ? {} : _ref$innerProps$prope,
      isDisabled = _ref.isDisabled,
      helperText = _ref.helperText,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
    id: fieldId,
    value: (0, _typeof2["default"])(value) === undefined ? '' : value.toString(),
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    disabled: isDisabled,
    helperText: propertyValidation.message || helperText,
    error: Boolean(propertyValidation.message)
  }, rest));
};

Input.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string]).isRequired,
  helperText: _propTypes["default"].node,
  value: _propTypes["default"].any,
  fieldId: _propTypes["default"].string.isRequired,
  innerProps: _propTypes["default"].shape({
    propertyValidation: _propTypes["default"].shape({
      message: _propTypes["default"].string
    })
  }).isRequired,
  onChange: _propTypes["default"].func,
  isDisabled: _propTypes["default"].bool
};
Input.defaultProps = {
  onChange: function onChange() {},
  value: ''
};

var PropertySwitch = function PropertySwitch(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      fieldId = _ref2.fieldId,
      _ref2$innerProps$prop = _ref2.innerProps.propertyValidation,
      propertyValidation = _ref2$innerProps$prop === void 0 ? {} : _ref2$innerProps$prop,
      helperText = _ref2.helperText,
      _onChange2 = _ref2.onChange,
      isDisabled = _ref2.isDisabled;
  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    required: true,
    error: Boolean(propertyValidation.message),
    component: "fieldset"
  }, /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], {
    row: true
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    id: fieldId,
    disabled: isDisabled,
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: Boolean(value),
      onChange: function onChange(_e, value) {
        return _onChange2(value);
      },
      value: value
    }),
    label: label
  }), /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], null, propertyValidation.message || helperText)));
};

PropertySwitch.propTypes = {
  label: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].any,
  fieldId: _propTypes["default"].string.isRequired,
  innerProps: _propTypes["default"].shape({
    propertyValidation: _propTypes["default"].shape({
      message: _propTypes["default"].string
    })
  }).isRequired,
  onChange: _propTypes["default"].func,
  isDisabled: _propTypes["default"].bool,
  helperText: _propTypes["default"].node
};
PropertySwitch.defaultProps = {
  value: false
};

var PropertySelect = function PropertySelect(_ref3) {
  var value = _ref3.value,
      fieldId = _ref3.fieldId,
      _onChange3 = _ref3.onChange,
      _ref3$innerProps$prop = _ref3.innerProps.propertyValidation,
      propertyValidation = _ref3$innerProps$prop === void 0 ? {} : _ref3$innerProps$prop,
      isDisabled = _ref3.isDisabled,
      helperText = _ref3.helperText,
      options = _ref3.options,
      rest = (0, _objectWithoutProperties2["default"])(_ref3, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({
    select: true,
    id: fieldId,
    value: value ? value : '',
    onChange: function onChange(e) {
      return _onChange3(e.target.value);
    },
    disabled: isDisabled,
    helperText: propertyValidation.message || helperText,
    error: Boolean(propertyValidation.message)
  }, rest), options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: option,
      value: option
    }, option);
  }));
};

PropertySelect.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string]).isRequired,
  helperText: _propTypes["default"].node,
  value: _propTypes["default"].any,
  fieldId: _propTypes["default"].string.isRequired,
  innerProps: _propTypes["default"].shape({
    propertyValidation: _propTypes["default"].shape({
      message: _propTypes["default"].string
    })
  }).isRequired,
  onChange: _propTypes["default"].func,
  isDisabled: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].string)
};
PropertySelect.defaultProps = {
  onChange: function onChange() {},
  options: []
};
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    remove: {
      '&:hover': {
        color: _red["default"][500]
      }
    },
    restore: {
      '&:hover': {
        color: _blue["default"][500]
      }
    },
    cell: {
      '&:not(:last-child)': {
        'padding-right': 8
      }
    }
  };
});

var PropertyOptions = function PropertyOptions(_ref4) {
  var _ref4$value = _ref4.value,
      value = _ref4$value === void 0 ? [] : _ref4$value,
      label = _ref4.label,
      onChange = _ref4.onChange,
      restricted = _ref4.innerProps.restricted;
  var classes = useStyles();

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
  }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], null, label), !restricted && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      return onChange([].concat((0, _toConsumableArray2["default"])(value), [{
        value: '',
        label: ''
      }]));
    },
    "aria-label": "add option"
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, value.map(function (_ref5, index, allOptions) {
    var label = _ref5.label,
        value = _ref5.value,
        restoreable = _ref5.restoreable,
        deleted = _ref5.deleted;
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: classes.cell
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      value: label || '',
      onChange: function onChange(e) {
        return handleOptionChange(e.target.value, index, 'label');
      },
      disabled: deleted,
      placeholder: "Label",
      "aria-label": "option-label-".concat(index)
    })), /*#__PURE__*/_react["default"].createElement("td", {
      className: classes.cell
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      onKeyPress: function onKeyPress(_ref6) {
        var key = _ref6.key;

        if (key === 'Enter' && index === allOptions.length - 1) {
          onChange([].concat((0, _toConsumableArray2["default"])(allOptions), [{
            value: '',
            label: ''
          }]));
        }
      },
      value: value || '',
      onChange: function onChange(e) {
        return handleOptionChange(e.target.value, index, 'value');
      },
      disabled: deleted,
      placeholder: "Value",
      "aria-label": "option-value-".concat(index)
    })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      onClick: function onClick() {
        return handleRemove(index, restoreable);
      },
      variant: "plain",
      "aria-label": "delete option"
    }, deleted ? /*#__PURE__*/_react["default"].createElement(_RestoreFromTrash["default"], {
      className: classes.restore
    }) : /*#__PURE__*/_react["default"].createElement(_Delete["default"], {
      className: classes.remove
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

var Textarea = function Textarea(props) {
  return /*#__PURE__*/_react["default"].createElement(Input, (0, _extends2["default"])({}, props, {
    multiline: true
  }));
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