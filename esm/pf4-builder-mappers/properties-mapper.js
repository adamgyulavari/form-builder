import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["propertyValidation", "children"],
    _excluded2 = ["label", "value", "fieldId", "innerProps"],
    _excluded3 = ["value", "fieldId", "innerProps"],
    _excluded4 = ["label", "options", "fieldId", "innerProps"],
    _excluded5 = ["value", "fieldId", "innerProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint react/no-array-index-key: "off" */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch } from "@patternfly/react-core/dist/esm/components/Switch/Switch.js";
import { Button } from "@patternfly/react-core/dist/esm/components/Button/Button.js";
import { FormGroup } from "@patternfly/react-core/dist/esm/components/Form/FormGroup.js";
import { TextArea } from "@patternfly/react-core/dist/esm/components/TextArea/TextArea.js";
import { TextInput } from "@patternfly/react-core/dist/esm/components/TextInput/TextInput.js";
import TrashIcon from "@patternfly/react-icons/dist/esm/icons/trash-icon";
import PlusIcon from "@patternfly/react-icons/dist/esm/icons/plus-icon";
import TrashRestoreIcon from "@patternfly/react-icons/dist/esm/icons/trash-restore-icon";
import { InternalSelect } from '@data-driven-forms/pf4-component-mapper/select';

var FormGroupWrapper = function FormGroupWrapper(_ref) {
  var message = _ref.propertyValidation.message,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(FormGroup, _extends({
    helperTextInvalid: message,
    validated: message ? 'error' : 'default'
  }, props), children);
};

FormGroupWrapper.propTypes = {
  propertyValidation: PropTypes.shape({
    message: PropTypes.string
  }),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
FormGroupWrapper.defaultProps = {
  propertyValidation: {}
};

var Input = function Input(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      fieldId = _ref2.fieldId,
      propertyValidation = _ref2.innerProps.propertyValidation,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(FormGroupWrapper, {
    label: label,
    fieldId: fieldId,
    propertyValidation: propertyValidation
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    id: fieldId,
    value: _typeof(value) === undefined ? '' : value.toString()
  }, rest))));
};

Input.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string]).isRequired,
  value: PropTypes.any,
  fieldId: PropTypes.string.isRequired,
  innerProps: PropTypes.shape({
    propertyValidation: PropTypes.shape({
      message: PropTypes.string
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
      rest = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement(FormGroupWrapper, {
    fieldId: fieldId,
    propertyValidation: propertyValidation
  }, /*#__PURE__*/React.createElement(Switch, _extends({
    isChecked: Boolean(value),
    id: fieldId
  }, rest)));
};

PropertySwitch.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  fieldId: PropTypes.string.isRequired,
  innerProps: PropTypes.shape({
    propertyValidation: PropTypes.shape({
      message: PropTypes.string
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
      rest = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement(FormGroupWrapper, {
    label: label,
    fieldId: fieldId,
    propertyValidation: propertyValidation
  }, /*#__PURE__*/React.createElement(InternalSelect, _extends({
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
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldId: PropTypes.string.isRequired,
  innerProps: PropTypes.shape({
    propertyValidation: PropTypes.shape({
      message: PropTypes.string
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
  }, /*#__PURE__*/React.createElement("span", null, label), !restricted && /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onChange([].concat(_toConsumableArray(value), [{
        value: '',
        label: ''
      }]));
    },
    variant: "plain",
    "aria-label": "add option"
  }, /*#__PURE__*/React.createElement(PlusIcon, null))), /*#__PURE__*/React.createElement("table", {
    className: "pf4-options-property-editor-table"
  }, /*#__PURE__*/React.createElement("tbody", null, value.map(function (_ref6, index, allOptions) {
    var label = _ref6.label,
        value = _ref6.value,
        restoreable = _ref6.restoreable,
        deleted = _ref6.deleted;
    return /*#__PURE__*/React.createElement("tr", {
      key: index
    }, /*#__PURE__*/React.createElement("td", {
      className: "pf4-options-propery-editor-cell"
    }, /*#__PURE__*/React.createElement(TextInput, {
      "aria-label": "option-label-".concat(index),
      isDisabled: deleted,
      placeholder: "Label",
      onChange: function onChange(value) {
        return handleOptionChange(value, index, 'label');
      },
      value: label || '',
      type: "text"
    })), /*#__PURE__*/React.createElement("td", {
      className: "pf4-options-propery-editor-cell"
    }, /*#__PURE__*/React.createElement(TextInput, {
      "aria-label": "option-value-".concat(index),
      onKeyPress: function onKeyPress(_ref7) {
        var key = _ref7.key;

        if (key === 'Enter' && index === allOptions.length - 1) {
          onChange([].concat(_toConsumableArray(allOptions), [{
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
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return handleRemove(index, restoreable);
      },
      variant: "plain",
      "aria-label": "delete option"
    }, deleted ? /*#__PURE__*/React.createElement(TrashRestoreIcon, {
      className: "pf4-success-color"
    }) : /*#__PURE__*/React.createElement(TrashIcon, {
      className: "pf4-danger-color"
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

var Textarea = function Textarea(_ref8) {
  var value = _ref8.value,
      fieldId = _ref8.fieldId,
      propertyValidation = _ref8.innerProps.propertyValidation,
      rest = _objectWithoutProperties(_ref8, _excluded5);

  return /*#__PURE__*/React.createElement(FormGroupWrapper, {
    fieldId: fieldId,
    propertyValidation: propertyValidation
  }, /*#__PURE__*/React.createElement(TextArea, _extends({
    id: fieldId,
    value: _typeof(value) === undefined ? '' : value
  }, rest)));
};

Textarea.propTypes = {
  value: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  innerProps: PropTypes.shape({
    propertyValidation: PropTypes.shape({
      message: PropTypes.string
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
export default propertiesMapper;