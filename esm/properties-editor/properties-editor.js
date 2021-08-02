import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["type", "original"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext, useState, useEffect, Fragment } from 'react';
import validatorTypes from "@data-driven-forms/react-form-renderer/validator-types";
import { useForm } from 'react-final-form';
import ComponentsContext from '../components-context';
import validatorsProperties from '../validators-properties';
import MemoizedProperty from './memoized-property';
import MemoizedValidator from './memozied-validator';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { SET_FIELD_VALIDATOR, SET_FIELD_PROPERTY, SET_SELECTED_COMPONENT, REMOVE_COMPONENT } from '../builder-store';
import convertInitialValue from './convert-initial-value';
import { FORM_LAYOUT } from '../helpers';
var validatorOptions = Object.keys(validatorTypes).filter(function (key) {
  return validatorTypes[key] !== validatorTypes.REQUIRED;
}).map(function (key) {
  return {
    value: validatorTypes[key],
    label: validatorTypes[key]
  };
});

var checkRequiredDisabled = function checkRequiredDisabled(field) {
  return !!(field.restricted && !!field.validate && !!field.validate.find(function (_ref) {
    var type = _ref.type,
        original = _ref.original;
    return original && type === validatorTypes.REQUIRED;
  }));
};

var PropertiesEditor = function PropertiesEditor() {
  var form = useForm();
  var dispatch = useDispatch();
  var selectedComponent = useSelector(function (_ref2) {
    var selectedComponent = _ref2.selectedComponent;
    return selectedComponent;
  }, shallowEqual);

  var _useSelector = useSelector(function (_ref3) {
    var selectedComponent = _ref3.selectedComponent,
        fields = _ref3.fields,
        dropTargets = _ref3.dropTargets;
    return {
      field: fields[selectedComponent],
      dropTargets: dropTargets
    };
  }, shallowEqual),
      field = _useSelector.field,
      dropTargets = _useSelector.dropTargets;

  var _useContext = useContext(ComponentsContext),
      _useContext$builderMa = _useContext.builderMapper,
      PropertiesEditor = _useContext$builderMa.PropertiesEditor,
      PropertyGroup = _useContext$builderMa.PropertyGroup,
      componentProperties = _useContext.componentProperties,
      propertiesMapper = _useContext.propertiesMapper,
      debug = _useContext.debug,
      openEditor = _useContext.openEditor;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      requiredDisabled = _useState2[0],
      setRequiredDisabled = _useState2[1];

  useEffect(function () {
    if (selectedComponent) {
      setRequiredDisabled(function () {
        return checkRequiredDisabled(field);
      });
    }
  }, [selectedComponent, field]);
  useEffect(function () {
    if (!selectedComponent && openEditor && dropTargets[FORM_LAYOUT].fieldsIds[0]) {
      dispatch({
        type: SET_SELECTED_COMPONENT,
        payload: dropTargets[FORM_LAYOUT].fieldsIds[0]
      });
    }
  }, []);

  if (!selectedComponent) {
    return null;
  }

  var registeredFields = form === null || form === void 0 ? void 0 : form.getRegisteredFields();
  var interactiveField = registeredFields.includes(field.name || field.id);
  var properties = componentProperties[field.component].attributes;
  var disableInitialValue = !interactiveField || componentProperties[field.component].disableInitialValue;
  var disableValidators = !interactiveField || componentProperties[field.component].disableValidators;
  var validate = field.validate || [];
  var NameComponent = propertiesMapper.input;
  var InitialValueComponent = propertiesMapper.input;
  var MessageComponent = propertiesMapper.input;
  var IsRequiredComponent = propertiesMapper["switch"];

  var handlePropertyChange = function handlePropertyChange(value, propertyName) {
    return dispatch({
      type: SET_FIELD_PROPERTY,
      payload: {
        value: convertInitialValue(value, field.dataType),
        propertyName: propertyName,
        fieldId: field.id
      }
    });
  };

  var handleValidatorChange = function handleValidatorChange() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var index = arguments.length > 2 ? arguments[2] : undefined;
    return dispatch({
      type: SET_FIELD_VALIDATOR,
      payload: _objectSpread(_objectSpread({}, value), {}, {
        fieldId: field.id,
        index: index,
        action: action
      })
    });
  };

  var requiredIndex = validate.reduce(function (acc, curr, index) {
    return curr.type === validatorTypes.REQUIRED ? index : acc;
  }, 0);
  var hasPropertyError = field.propertyValidation && Object.entries(field.propertyValidation).find(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        value = _ref5[1];

    return value;
  });
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(PropertiesEditor, {
    fieldName: field.name,
    hasPropertyError: hasPropertyError,
    avaiableValidators: disableValidators ? [] : validatorOptions,
    addValidator: function addValidator(type) {
      return handleValidatorChange({
        type: type
      }, 'add');
    },
    handleClose: function handleClose() {
      return dispatch({
        type: SET_SELECTED_COMPONENT
      });
    },
    handleDelete: !field.restricted ? function () {
      return dispatch({
        type: REMOVE_COMPONENT,
        payload: field.id
      });
    } : undefined,
    disableInitialValue: disableInitialValue,
    disableValidators: disableValidators,
    propertiesChildren: /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(MemoizedProperty, {
      Component: NameComponent,
      property: {
        propertyName: 'name'
      },
      autoFocus: !field.initialized,
      isDisabled: field.restricted,
      handlePropertyChange: handlePropertyChange,
      label: "Name"
    }), !disableInitialValue && /*#__PURE__*/React.createElement(MemoizedProperty, {
      label: "Initial value",
      type: "text",
      Component: InitialValueComponent,
      handlePropertyChange: handlePropertyChange,
      property: {
        propertyName: 'initialValue'
      }
    }), properties.map(function (property) {
      var Component = propertiesMapper[property.component];
      return /*#__PURE__*/React.createElement(MemoizedProperty, {
        selectedComponent: field.id,
        key: property.propertyName,
        Component: Component,
        property: property,
        handlePropertyChange: handlePropertyChange
      });
    })),
    validationChildren: disableValidators ? null : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(PropertyGroup, {
      title: "required validator"
    }, /*#__PURE__*/React.createElement(IsRequiredComponent, {
      value: field.isRequired,
      label: "Required",
      fieldId: "required-validator",
      isDisabled: requiredDisabled,
      innerProps: {},
      onChange: function onChange(value) {
        return handleValidatorChange({
          type: validatorTypes.REQUIRED
        }, value ? 'add' : 'remove', requiredIndex);
      }
    }), field.isRequired && /*#__PURE__*/React.createElement(MessageComponent, {
      label: "Message",
      fieldId: "required-message",
      innerProps: {},
      value: validate.find(function (_ref6) {
        var type = _ref6.type;
        return type === validatorTypes.REQUIRED;
      }).message || '',
      onChange: function onChange(value) {
        return handleValidatorChange({
          message: value
        }, 'modify', requiredIndex);
      }
    })), validate.map(function (_ref7, index) {
      var type = _ref7.type,
          original = _ref7.original,
          rest = _objectWithoutProperties(_ref7, _excluded);

      return type !== validatorTypes.REQUIRED ? /*#__PURE__*/React.createElement(PropertyGroup, {
        title: type.split('-').join(' '),
        handleDelete: !original ? function () {
          return handleValidatorChange({}, 'remove', index);
        } : undefined,
        key: "".concat(type, "-").concat(index)
      }, validatorsProperties[type].map(function (property, propertyIndex) {
        return /*#__PURE__*/React.createElement(MemoizedValidator, {
          key: propertyIndex,
          handleValidatorChange: handleValidatorChange,
          validator: rest,
          property: property,
          original: original,
          index: index
        });
      })) : null;
    }))
  }), debug && /*#__PURE__*/React.createElement("pre", null, JSON.stringify(field, null, 2)));
};

export default PropertiesEditor;