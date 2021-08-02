import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ValidatorProperty from './validator-property';
import { useSelector, shallowEqual } from 'react-redux';
var ValidatorComponent = /*#__PURE__*/memo(function (_ref) {
  var handleValidatorChange = _ref.handleValidatorChange,
      property = _ref.property,
      original = _ref.original,
      validator = _ref.validator,
      restricted = _ref.restricted,
      index = _ref.index;
  return /*#__PURE__*/React.createElement(ValidatorProperty, {
    onChange: handleValidatorChange,
    property: _objectSpread(_objectSpread({}, property), {}, {
      original: original
    }),
    restricted: restricted,
    value: validator[property.propertyName],
    index: index
  });
}, function (prevProps, nextProps) {
  var key = nextProps.property.propertyName;
  return prevProps.validator[key] === nextProps.validator[key];
});
ValidatorComponent.propTypes = {
  handleValidatorChange: PropTypes.func.isRequired,
  property: PropTypes.shape({
    propertyName: PropTypes.string.isRequired
  }).isRequired,
  original: PropTypes.object,
  validator: PropTypes.object,
  index: PropTypes.number.isRequired,
  restricted: PropTypes.bool
};

var MemoizedValidator = function MemoizedValidator(props) {
  var restricted = useSelector(function (_ref2) {
    var fields = _ref2.fields,
        selectedComponent = _ref2.selectedComponent;
    return fields[selectedComponent].restricted;
  }, shallowEqual);
  return /*#__PURE__*/React.createElement(ValidatorComponent, _extends({}, props, {
    restricted: restricted
  }));
};

export default MemoizedValidator;