import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var propertyStrings = {
  isRequired: 'required',
  isDisabled: 'disabled',
  isReadOnly: 'read only',
  hideField: 'hidden'
};

var initialValueCheckMessage = function initialValueCheckMessage(_ref) {
  var isDisabled = _ref.isDisabled,
      isReadOnly = _ref.isReadOnly,
      hideField = _ref.hideField;
  return "Initial value must be set if field is required and at the same time ".concat(Object.entries({
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    hideField: hideField
  }).filter(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        value = _ref3[1];

    return value;
  }).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 1),
        key = _ref5[0];

    return propertyStrings[key];
  }).join(' or '), ".");
};

var initialValueCheck = function initialValueCheck(_ref6) {
  var initialValue = _ref6.initialValue,
      isRequired = _ref6.isRequired,
      isDisabled = _ref6.isDisabled,
      isReadOnly = _ref6.isReadOnly,
      hideField = _ref6.hideField;
  return !initialValue && isRequired && (isDisabled || isReadOnly || hideField) ? {
    initialValue: {
      message: initialValueCheckMessage({
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        hideField: hideField
      }),
      code: 'errors.initialValue',
      codeDependencies: {
        isRequired: isRequired,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        hideField: hideField
      }
    }
  } : {
    initialValue: undefined
  };
};

var propertyValidationMapper = {
  isDisabled: initialValueCheck,
  isReadOnly: initialValueCheck,
  hideField: initialValueCheck,
  initialValue: initialValueCheck
};

var propertiesValidation = function propertiesValidation(type) {
  var validation = propertyValidationMapper[type];
  return validation ? validation : function () {
    return {};
  };
};

export default propertiesValidation;