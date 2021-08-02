import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["value", "fieldId", "onChange", "innerProps", "isDisabled", "helperText"],
    _excluded2 = ["value", "fieldId", "onChange", "innerProps", "isDisabled", "helperText", "options"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint react/no-array-index-key: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/esm/TextField";
import FormLabel from "@material-ui/core/esm/FormLabel";
import FormControl from "@material-ui/core/esm/FormControl";
import FormGroup from "@material-ui/core/esm/FormGroup";
import FormControlLabel from "@material-ui/core/esm/FormControlLabel";
import FormHelperText from "@material-ui/core/esm/FormHelperText";
import Switch from "@material-ui/core/esm/Switch";
import MenuItem from "@material-ui/core/esm/MenuItem";
import IconButton from "@material-ui/core/esm/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import AddIcon from '@material-ui/icons/Add';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

var Input = function Input(_ref) {
  var value = _ref.value,
      fieldId = _ref.fieldId,
      _onChange = _ref.onChange,
      _ref$innerProps$prope = _ref.innerProps.propertyValidation,
      propertyValidation = _ref$innerProps$prope === void 0 ? {} : _ref$innerProps$prope,
      isDisabled = _ref.isDisabled,
      helperText = _ref.helperText,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(TextField, _extends({
    id: fieldId,
    value: _typeof(value) === undefined ? '' : value.toString(),
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    disabled: isDisabled,
    helperText: propertyValidation.message || helperText,
    error: Boolean(propertyValidation.message)
  }, rest));
};

Input.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string]).isRequired,
  helperText: PropTypes.node,
  value: PropTypes.any,
  fieldId: PropTypes.string.isRequired,
  innerProps: PropTypes.shape({
    propertyValidation: PropTypes.shape({
      message: PropTypes.string
    })
  }).isRequired,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
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
  return /*#__PURE__*/React.createElement(FormControl, {
    required: true,
    error: Boolean(propertyValidation.message),
    component: "fieldset"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    row: true
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    id: fieldId,
    disabled: isDisabled,
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: Boolean(value),
      onChange: function onChange(_e, value) {
        return _onChange2(value);
      },
      value: value
    }),
    label: label
  }), /*#__PURE__*/React.createElement(FormHelperText, null, propertyValidation.message || helperText)));
};

PropertySwitch.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  fieldId: PropTypes.string.isRequired,
  innerProps: PropTypes.shape({
    propertyValidation: PropTypes.shape({
      message: PropTypes.string
    })
  }).isRequired,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  helperText: PropTypes.node
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
      rest = _objectWithoutProperties(_ref3, _excluded2);

  return /*#__PURE__*/React.createElement(TextField, _extends({
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
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option,
      value: option
    }, option);
  }));
};

PropertySelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string]).isRequired,
  helperText: PropTypes.node,
  value: PropTypes.any,
  fieldId: PropTypes.string.isRequired,
  innerProps: PropTypes.shape({
    propertyValidation: PropTypes.shape({
      message: PropTypes.string
    })
  }).isRequired,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string)
};
PropertySelect.defaultProps = {
  onChange: function onChange() {},
  options: []
};
var useStyles = makeStyles(function () {
  return {
    remove: {
      '&:hover': {
        color: red[500]
      }
    },
    restore: {
      '&:hover': {
        color: blue[500]
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
      return index === itemIndex ? _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, optionKey, option)) : item;
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

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(FormLabel, null, label), !restricted && /*#__PURE__*/React.createElement(IconButton, {
    onClick: function onClick() {
      return onChange([].concat(_toConsumableArray(value), [{
        value: '',
        label: ''
      }]));
    },
    "aria-label": "add option"
  }, /*#__PURE__*/React.createElement(AddIcon, null))), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, value.map(function (_ref5, index, allOptions) {
    var label = _ref5.label,
        value = _ref5.value,
        restoreable = _ref5.restoreable,
        deleted = _ref5.deleted;
    return /*#__PURE__*/React.createElement("tr", {
      key: index
    }, /*#__PURE__*/React.createElement("td", {
      className: classes.cell
    }, /*#__PURE__*/React.createElement(TextField, {
      value: label || '',
      onChange: function onChange(e) {
        return handleOptionChange(e.target.value, index, 'label');
      },
      disabled: deleted,
      placeholder: "Label",
      "aria-label": "option-label-".concat(index)
    })), /*#__PURE__*/React.createElement("td", {
      className: classes.cell
    }, /*#__PURE__*/React.createElement(TextField, {
      onKeyPress: function onKeyPress(_ref6) {
        var key = _ref6.key;

        if (key === 'Enter' && index === allOptions.length - 1) {
          onChange([].concat(_toConsumableArray(allOptions), [{
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
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(IconButton, {
      onClick: function onClick() {
        return handleRemove(index, restoreable);
      },
      variant: "plain",
      "aria-label": "delete option"
    }, deleted ? /*#__PURE__*/React.createElement(RestoreFromTrashIcon, {
      className: classes.restore
    }) : /*#__PURE__*/React.createElement(DeleteIcon, {
      className: classes.remove
    }))));
  }))));
};

PropertyOptions.propTypes = {
  value: PropTypes.array,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  innerProps: PropTypes.shape({
    restricted: PropTypes.bool
  }).isRequired
};

var Textarea = function Textarea(props) {
  return /*#__PURE__*/React.createElement(Input, _extends({}, props, {
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
export default propertiesMapper;