"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentsContext = _interopRequireDefault(require("../components-context"));

var _reactRedux = require("react-redux");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _constants = require("../constants");

var _excluded = ["FieldActions", "FieldLayout", "DragHandle"],
    _excluded2 = ["clone", "isContainer", "validate"],
    _excluded3 = ["hideField", "initialized", "preview", "restricted"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Field = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var fieldId = _ref.fieldId,
      index = _ref.index,
      shouldClone = _ref.shouldClone,
      disableDrag = _ref.disableDrag,
      draggingContainer = _ref.draggingContainer;

  var _useContext = (0, _react.useContext)(_componentsContext["default"]),
      _useContext$builderMa = _useContext.builderMapper,
      FieldActions = _useContext$builderMa.FieldActions,
      FieldLayout = _useContext$builderMa.FieldLayout,
      DragHandle = _useContext$builderMa.DragHandle,
      rest = (0, _objectWithoutProperties2["default"])(_useContext$builderMa, _excluded),
      componentMapper = _useContext.componentMapper;

  var _useSelector = (0, _reactRedux.useSelector)(function (_ref2) {
    var fields = _ref2.fields;
    return fields[fieldId];
  }),
      clone = _useSelector.clone,
      isContainer = _useSelector.isContainer,
      validate = _useSelector.validate,
      field = (0, _objectWithoutProperties2["default"])(_useSelector, _excluded2);

  var selectedComponent = (0, _reactRedux.useSelector)(function (_ref3) {
    var selectedComponent = _ref3.selectedComponent;
    return selectedComponent;
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var FieldComponent = rest[field.component] || rest[_constants.builderComponentTypes.BUILDER_FIELD];
  var hasPropertyError = field.propertyValidation && Object.entries(field.propertyValidation).find(function (_ref4) {
    var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
        value = _ref5[1];

    return value;
  });

  if (field.component === 'container-end') {
    return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Draggable, {
      isDragDisabled: true,
      draggableId: field.id,
      index: index
    }, function (provided) {
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        style: field.id.match(new RegExp("^".concat(draggingContainer, "-end"))) ? {
          visibility: 'hidden',
          height: 0,
          padding: 0,
          border: 0,
          margin: 0
        } : {},
        ref: provided.innerRef
      }, provided.draggableProps));
    });
  }

  var hideField = field.hideField,
      initialized = field.initialized,
      preview = field.preview,
      restricted = field.restricted,
      cleanField = (0, _objectWithoutProperties2["default"])(field, _excluded3);
  return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Draggable, {
    isDragDisabled: disableDrag,
    draggableId: field.id,
    index: index
  }, function (provided, snapshot) {
    var innerProps = {
      snapshot: snapshot,
      hasPropertyError: !!hasPropertyError,
      hideField: hideField,
      initialized: initialized,
      preview: preview,
      restricted: restricted
    };
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      style: field.container !== undefined && field.container === draggingContainer ? {
        visibility: 'hidden',
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      } : {},
      ref: provided.innerRef
    }, provided.draggableProps, {
      onClick: function onClick() {
        return dispatch({
          type: 'setSelectedComponent',
          payload: field.id
        });
      }
    }), /*#__PURE__*/_react["default"].createElement(FieldLayout, {
      disableDrag: disableDrag,
      dragging: snapshot.isDragging,
      selected: selectedComponent === field.id,
      isContainer: isContainer,
      inContainer: field.container
    }, field.preview ? /*#__PURE__*/_react["default"].createElement("div", null, field.content) : /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(FieldComponent, (0, _extends2["default"])({}, cleanField, {
      innerProps: innerProps,
      Component: componentMapper[field.component]
    })), !shouldClone && /*#__PURE__*/_react["default"].createElement(DragHandle, {
      disableDrag: disableDrag,
      hasPropertyError: !!hasPropertyError,
      dragHandleProps: _objectSpread({}, provided.dragHandleProps)
    }))));
  });
});
Field.propTypes = {
  index: _propTypes["default"].number.isRequired,
  shouldClone: _propTypes["default"].bool,
  disableDrag: _propTypes["default"].bool,
  selectedComponent: _propTypes["default"].string,
  draggingContainer: _propTypes["default"].string,
  fieldId: _propTypes["default"].string.isRequired
};

var MemoizedField = function MemoizedField(props) {
  var _useSelector2 = (0, _reactRedux.useSelector)(function (_ref6) {
    var selectedComponent = _ref6.selectedComponent,
        draggingContainer = _ref6.draggingContainer;
    return {
      selectedComponent: selectedComponent,
      draggingContainer: draggingContainer
    };
  }, _isEqual["default"]),
      selectedComponent = _useSelector2.selectedComponent,
      draggingContainer = _useSelector2.draggingContainer;

  return /*#__PURE__*/_react["default"].createElement(Field, (0, _extends2["default"])({}, props, {
    selectedComponent: selectedComponent,
    draggingContainer: draggingContainer
  }));
};

var _default = MemoizedField;
exports["default"] = _default;