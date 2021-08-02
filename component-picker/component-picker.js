"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _componentsContext = _interopRequireDefault(require("../components-context"));

var _pickerField = _interopRequireDefault(require("../picker-field"));

var _helpers = require("../helpers");

var _reactRedux = require("react-redux");

var _layoutContext = require("../layout-context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ComponentPicker = function ComponentPicker() {
  var _useContext = (0, _react.useContext)(_componentsContext["default"]),
      BuilderColumn = _useContext.builderMapper.BuilderColumn;

  var _useContext2 = (0, _react.useContext)(_layoutContext.ComponentPickerContext),
      fields = _useContext2.fields,
      disableAdd = _useContext2.disableAdd;

  var dropTargetId = (0, _reactRedux.useSelector)(function (_ref) {
    var dropTargets = _ref.dropTargets;
    return dropTargets[_helpers.COMPONENTS_LIST].id;
  });

  if (disableAdd) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: dropTargetId,
    isDropDisabled: true
  }, function (provided, snapshot) {
    return /*#__PURE__*/_react["default"].createElement(BuilderColumn, {
      isDraggingOver: snapshot.isDraggingOver
    }, /*#__PURE__*/_react["default"].createElement("div", {
      ref: provided.innerRef
    }, fields.map(function (field, index) {
      return /*#__PURE__*/_react["default"].createElement(_pickerField["default"], {
        key: field.id,
        field: field,
        index: index
      });
    }), provided.placeholder));
  });
};

var _default = ComponentPicker;
exports["default"] = _default;