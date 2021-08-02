"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentsContext = _interopRequireDefault(require("../components-context"));

var _constants = require("../constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PickerField = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var field = _ref.field,
      index = _ref.index;

  var _useContext = (0, _react.useContext)(_componentsContext["default"]),
      pickerMapper = _useContext.pickerMapper,
      builderMapper = _useContext.builderMapper,
      componentMapper = _useContext.componentMapper;

  var Component = pickerMapper[field.component] || pickerMapper[_constants.builderComponentTypes.PICKER_FIELD];
  var Clone = builderMapper[field.component] || builderMapper[_constants.builderComponentTypes.BUILDER_FIELD];
  return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Draggable, {
    draggableId: field.id,
    index: index
  }, function (provided, snapshot) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps), snapshot.isDragging && field.clone ? /*#__PURE__*/_react["default"].createElement(Clone, {
      input: {
        name: 'template-clone'
      },
      meta: {},
      name: "template-clone",
      innerProps: {
        snapshot: snapshot,
        isClone: true
      },
      component: field.component,
      Component: componentMapper[field.component]
    }) : /*#__PURE__*/_react["default"].createElement(Component, {
      innerProps: {
        snapshot: snapshot,
        isClone: true
      },
      component: field.component
    })), snapshot.isDragging && /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, snapshot, {
      component: field.component
    })));
  });
}, function (prevProps, nextProps) {
  return prevProps.index === nextProps.index;
});
PickerField.propTypes = {
  index: _propTypes["default"].number.isRequired,
  field: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    component: _propTypes["default"].string.isRequired,
    clone: _propTypes["default"].bool
  }).isRequired
};
var _default = PickerField;
exports["default"] = _default;