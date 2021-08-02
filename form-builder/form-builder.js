"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formBuilderLayout = _interopRequireDefault(require("../form-builder-layout"));

var _componentsContext = _interopRequireDefault(require("../components-context"));

var _helpers = _interopRequireDefault(require("../helpers"));

var _reactRedux = require("react-redux");

var _builderStore = _interopRequireDefault(require("../builder-store"));

var _form = _interopRequireDefault(require("@data-driven-forms/react-form-renderer/form"));

var _rendererContext = _interopRequireDefault(require("@data-driven-forms/react-form-renderer/renderer-context"));

var _excluded = ["builderMapper", "componentProperties", "pickerMapper", "propertiesMapper", "cloneWhileDragging", "schema", "schemaTemplate", "mode", "debug", "children", "componentMapper", "openEditor"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ContainerEnd = function ContainerEnd(_ref) {
  var id = _ref.id;
  return /*#__PURE__*/_react["default"].createElement("div", null, id);
};

ContainerEnd.propTypes = {
  id: _propTypes["default"].string
};

var FormBuilder = function FormBuilder(_ref2) {
  var builderMapper = _ref2.builderMapper,
      componentProperties = _ref2.componentProperties,
      pickerMapper = _ref2.pickerMapper,
      propertiesMapper = _ref2.propertiesMapper,
      cloneWhileDragging = _ref2.cloneWhileDragging,
      schema = _ref2.schema,
      schemaTemplate = _ref2.schemaTemplate,
      mode = _ref2.mode,
      debug = _ref2.debug,
      children = _ref2.children,
      componentMapper = _ref2.componentMapper,
      openEditor = _ref2.openEditor,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var initialFields = Object.keys(componentProperties).reduce(function (acc, curr) {
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, "initial-".concat(curr), {
      preview: true,
      id: "initial-".concat(curr),
      component: curr,
      clone: cloneWhileDragging,
      isContainer: componentProperties[curr].isContainer
    }));
  }, {});
  return /*#__PURE__*/_react["default"].createElement(_componentsContext["default"].Provider, {
    value: {
      builderMapper: _objectSpread(_objectSpread({}, builderMapper), {}, {
        'container-end': ContainerEnd
      }),
      componentProperties: componentProperties,
      pickerMapper: pickerMapper,
      propertiesMapper: propertiesMapper,
      debug: debug,
      componentMapper: componentMapper,
      openEditor: openEditor
    }
  }, /*#__PURE__*/_react["default"].createElement(_form["default"], {
    onSubmit: function onSubmit() {}
  }, function () {
    return /*#__PURE__*/_react["default"].createElement(_rendererContext["default"].Provider, {
      value: {
        formOptions: {
          internalRegisterField: function internalRegisterField() {
            return null;
          },
          renderForm: function renderForm() {
            return null;
          },
          internalUnRegisterField: function internalUnRegisterField() {
            return null;
          }
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: _builderStore["default"]
    }, /*#__PURE__*/_react["default"].createElement(_formBuilderLayout["default"], (0, _extends2["default"])({
      initialFields: _helpers["default"].createInitialData(initialFields, schema, mode === 'subset', schemaTemplate),
      mode: mode
    }, props), children)));
  }));
};

FormBuilder.propTypes = {
  mode: _propTypes["default"].oneOf(['default', 'subset']),
  debug: _propTypes["default"].bool,
  builderMapper: _propTypes["default"].object.isRequired,
  componentProperties: _propTypes["default"].shape({
    attributes: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      component: _propTypes["default"].string.isRequired,
      label: _propTypes["default"].string.isRequired,
      propertyName: _propTypes["default"].string.isRequired
    }))
  }).isRequired,
  pickerMapper: _propTypes["default"].object.isRequired,
  propertiesMapper: _propTypes["default"].object.isRequired,
  cloneWhileDragging: _propTypes["default"].bool,
  schema: _propTypes["default"].object,
  schemaTemplate: _propTypes["default"].object,
  componentMapper: _propTypes["default"].object.isRequired,
  openEditor: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
FormBuilder.defaultProps = {
  mode: 'default',
  debug: false
};
var _default = FormBuilder;
exports["default"] = _default;