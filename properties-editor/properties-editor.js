"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _validatorTypes = _interopRequireDefault(require("@data-driven-forms/react-form-renderer/validator-types"));

var _reactFinalForm = require("react-final-form");

var _componentsContext = _interopRequireDefault(require("../components-context"));

var _validatorsProperties = _interopRequireDefault(require("../validators-properties"));

var _memoizedProperty = _interopRequireDefault(require("./memoized-property"));

var _memoziedValidator = _interopRequireDefault(require("./memozied-validator"));

var _reactRedux = require("react-redux");

var _builderStore = require("../builder-store");

var _convertInitialValue = _interopRequireDefault(require("./convert-initial-value"));

var _helpers = require("../helpers");

var _excluded = ["type", "original"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var validatorOptions = Object.keys(_validatorTypes["default"]).filter(function (key) {
  return _validatorTypes["default"][key] !== _validatorTypes["default"].REQUIRED;
}).map(function (key) {
  return {
    value: _validatorTypes["default"][key],
    label: _validatorTypes["default"][key]
  };
});

var checkRequiredDisabled = function checkRequiredDisabled(field) {
  return !!(field.restricted && !!field.validate && !!field.validate.find(function (_ref) {
    var type = _ref.type,
        original = _ref.original;
    return original && type === _validatorTypes["default"].REQUIRED;
  }));
};

var PropertiesEditor = function PropertiesEditor() {
  var form = (0, _reactFinalForm.useForm)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var selectedComponent = (0, _reactRedux.useSelector)(function (_ref2) {
    var selectedComponent = _ref2.selectedComponent;
    return selectedComponent;
  }, _reactRedux.shallowEqual);

  var _useSelector = (0, _reactRedux.useSelector)(function (_ref3) {
    var selectedComponent = _ref3.selectedComponent,
        fields = _ref3.fields,
        dropTargets = _ref3.dropTargets;
    return {
      field: fields[selectedComponent],
      dropTargets: dropTargets
    };
  }, _reactRedux.shallowEqual),
      field = _useSelector.field,
      dropTargets = _useSelector.dropTargets;

  var _useContext = (0, _react.useContext)(_componentsContext["default"]),
      _useContext$builderMa = _useContext.builderMapper,
      PropertiesEditor = _useContext$builderMa.PropertiesEditor,
      PropertyGroup = _useContext$builderMa.PropertyGroup,
      componentProperties = _useContext.componentProperties,
      propertiesMapper = _useContext.propertiesMapper,
      debug = _useContext.debug,
      openEditor = _useContext.openEditor;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      requiredDisabled = _useState2[0],
      setRequiredDisabled = _useState2[1];

  (0, _react.useEffect)(function () {
    if (selectedComponent) {
      setRequiredDisabled(function () {
        return checkRequiredDisabled(field);
      });
    }
  }, [selectedComponent, field]);
  (0, _react.useEffect)(function () {
    if (!selectedComponent && openEditor && dropTargets[_helpers.FORM_LAYOUT].fieldsIds[0]) {
      dispatch({
        type: _builderStore.SET_SELECTED_COMPONENT,
        payload: dropTargets[_helpers.FORM_LAYOUT].fieldsIds[0]
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
      type: _builderStore.SET_FIELD_PROPERTY,
      payload: {
        value: (0, _convertInitialValue["default"])(value, field.dataType),
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
      type: _builderStore.SET_FIELD_VALIDATOR,
      payload: _objectSpread(_objectSpread({}, value), {}, {
        fieldId: field.id,
        index: index,
        action: action
      })
    });
  };

  var requiredIndex = validate.reduce(function (acc, curr, index) {
    return curr.type === _validatorTypes["default"].REQUIRED ? index : acc;
  }, 0);
  var hasPropertyError = field.propertyValidation && Object.entries(field.propertyValidation).find(function (_ref4) {
    var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
        value = _ref5[1];

    return value;
  });
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(PropertiesEditor, {
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
        type: _builderStore.SET_SELECTED_COMPONENT
      });
    },
    handleDelete: !field.restricted ? function () {
      return dispatch({
        type: _builderStore.REMOVE_COMPONENT,
        payload: field.id
      });
    } : undefined,
    disableInitialValue: disableInitialValue,
    disableValidators: disableValidators,
    propertiesChildren: /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_memoizedProperty["default"], {
      Component: NameComponent,
      property: {
        propertyName: 'name'
      },
      autoFocus: !field.initialized,
      isDisabled: field.restricted,
      handlePropertyChange: handlePropertyChange,
      label: "Name"
    }), !disableInitialValue && /*#__PURE__*/_react["default"].createElement(_memoizedProperty["default"], {
      label: "Initial value",
      type: "text",
      Component: InitialValueComponent,
      handlePropertyChange: handlePropertyChange,
      property: {
        propertyName: 'initialValue'
      }
    }), properties.map(function (property) {
      var Component = propertiesMapper[property.component];
      return /*#__PURE__*/_react["default"].createElement(_memoizedProperty["default"], {
        selectedComponent: field.id,
        key: property.propertyName,
        Component: Component,
        property: property,
        handlePropertyChange: handlePropertyChange
      });
    })),
    validationChildren: disableValidators ? null : /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(PropertyGroup, {
      title: "required validator"
    }, /*#__PURE__*/_react["default"].createElement(IsRequiredComponent, {
      value: field.isRequired,
      label: "Required",
      fieldId: "required-validator",
      isDisabled: requiredDisabled,
      innerProps: {},
      onChange: function onChange(value) {
        return handleValidatorChange({
          type: _validatorTypes["default"].REQUIRED
        }, value ? 'add' : 'remove', requiredIndex);
      }
    }), field.isRequired && /*#__PURE__*/_react["default"].createElement(MessageComponent, {
      label: "Message",
      fieldId: "required-message",
      innerProps: {},
      value: validate.find(function (_ref6) {
        var type = _ref6.type;
        return type === _validatorTypes["default"].REQUIRED;
      }).message || '',
      onChange: function onChange(value) {
        return handleValidatorChange({
          message: value
        }, 'modify', requiredIndex);
      }
    })), validate.map(function (_ref7, index) {
      var type = _ref7.type,
          original = _ref7.original,
          rest = (0, _objectWithoutProperties2["default"])(_ref7, _excluded);
      return type !== _validatorTypes["default"].REQUIRED ? /*#__PURE__*/_react["default"].createElement(PropertyGroup, {
        title: type.split('-').join(' '),
        handleDelete: !original ? function () {
          return handleValidatorChange({}, 'remove', index);
        } : undefined,
        key: "".concat(type, "-").concat(index)
      }, _validatorsProperties["default"][type].map(function (property, propertyIndex) {
        return /*#__PURE__*/_react["default"].createElement(_memoziedValidator["default"], {
          key: propertyIndex,
          handleValidatorChange: handleValidatorChange,
          validator: rest,
          property: property,
          original: original,
          index: index
        });
      })) : null;
    }))
  }), debug && /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify(field, null, 2)));
};

var _default = PropertiesEditor;
exports["default"] = _default;