import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ComponentsContext from '../components-context';
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

  return _defineProperty({}, property.propertyName, result);
};

var ValidatorProperty = function ValidatorProperty(_ref2) {
  var property = _ref2.property,
      _onChange2 = _ref2.onChange,
      value = _ref2.value,
      index = _ref2.index,
      restricted = _ref2.restricted;

  var _useContext = useContext(ComponentsContext),
      propertiesMapper = _useContext.propertiesMapper;

  var Component = propertiesMapper[property.component];

  var _ref3 = property.restriction && property.original ? _defineProperty({
    isDisabled: property.restriction.lock
  }, property.restriction.inputAttribute, property.original[property.restriction.validatorAttribute]) : {},
      isDisabled = _ref3.isDisabled,
      restrictionProperty = _ref3.restrictionProperty;

  var innerProps = {
    property: restrictionProperty,
    restricted: restricted
  };
  return /*#__PURE__*/React.createElement(Component, {
    value: value,
    type: property.type,
    isDisabled: isDisabled,
    onBlur: function onBlur() {
      return property.propertyName !== 'message' && restricted && _onChange2(validatorChangeValue(property, value), 'modify', index);
    },
    fieldId: "".concat(property.propertyName, "-").concat(index),
    onChange: function onChange(value) {
      return _onChange2(_defineProperty({}, property.propertyName, property.type === 'number' ? Number(value) : value), 'modify', index);
    },
    label: property.label,
    innerProps: innerProps
  });
};

ValidatorProperty.propTypes = {
  restricted: PropTypes.bool,
  property: PropTypes.shape({
    original: PropTypes.object,
    propertyName: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    restriction: PropTypes.shape({
      inputAttribute: PropTypes.string,
      validatorAttribute: PropTypes.string,
      lock: PropTypes.bool
    })
  }),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  index: PropTypes.number.isRequired
};
export default ValidatorProperty;