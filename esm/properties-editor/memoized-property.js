import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "value", "options"],
    _excluded2 = ["Component", "property", "selectedComponent", "handlePropertyChange", "restricted", "propertyValidation"];
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
var PropertyComponent = /*#__PURE__*/memo(function (_ref) {
  var Component = _ref.Component,
      _ref$property = _ref.property,
      label = _ref$property.label,
      value = _ref$property.value,
      options = _ref$property.options,
      property = _objectWithoutProperties(_ref$property, _excluded),
      selectedComponent = _ref.selectedComponent,
      handlePropertyChange = _ref.handlePropertyChange,
      restricted = _ref.restricted,
      propertyValidation = _ref.propertyValidation,
      props = _objectWithoutProperties(_ref, _excluded2);

  var innerProps = {
    property: property,
    restricted: restricted,
    propertyValidation: propertyValidation,
    selectedComponent: selectedComponent
  };
  return /*#__PURE__*/React.createElement(Component, _extends({
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
  return prevProps.value === nextProps.value && prevProps.restricted === nextProps.restricted && prevProps.selectedComponent === nextProps.selectedComponent && shallowEqual(prevProps.propertyValidation, nextProps.propertyValidation);
});
PropertyComponent.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.element]).isRequired,
  field: PropTypes.shape({
    restricted: PropTypes.bool
  }),
  handlePropertyChange: PropTypes.func.isRequired,
  property: PropTypes.shape({
    propertyName: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array
  }).isRequired,
  restricted: PropTypes.bool,
  propertyValidation: PropTypes.shape({
    propertyValidation: PropTypes.object
  }),
  selectedComponent: PropTypes.string
};

var MemoizedProperty = function MemoizedProperty(props) {
  var _useSelector = useSelector(function (_ref2) {
    var fields = _ref2.fields,
        selectedComponent = _ref2.selectedComponent;
    var field = fields[selectedComponent];
    return {
      value: field[props.property.propertyName],
      restricted: field.restricted,
      propertyValidation: field.propertyValidation && field.propertyValidation[props.property.propertyName]
    };
  }, shallowEqual),
      value = _useSelector.value,
      restricted = _useSelector.restricted,
      propertyValidation = _useSelector.propertyValidation;

  return /*#__PURE__*/React.createElement(PropertyComponent, _extends({}, props, {
    value: value,
    restricted: restricted,
    propertyValidation: propertyValidation
  }));
};

MemoizedProperty.propTypes = {
  property: PropTypes.shape({
    propertyName: PropTypes.string.isRequired
  }).isRequired
};
export default MemoizedProperty;