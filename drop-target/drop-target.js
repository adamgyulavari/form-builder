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

var _field = _interopRequireDefault(require("../field"));

var _componentsContext = _interopRequireDefault(require("../components-context"));

var _reactRedux = require("react-redux");

var _helpers = require("../helpers");

var _layoutContext = require("../layout-context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DropTarget = function DropTarget() {
  var _useContext = (0, _react.useContext)(_componentsContext["default"]),
      _useContext$builderMa = _useContext.builderMapper,
      FormContainer = _useContext$builderMa.FormContainer,
      EmptyTarget = _useContext$builderMa.EmptyTarget;

  var _useContext2 = (0, _react.useContext)(_layoutContext.DropTargetContext),
      disableDrag = _useContext2.disableDrag;

  var dropTargets = (0, _reactRedux.useSelector)(function (_ref) {
    var dropTargets = _ref.dropTargets;
    return dropTargets;
  });
  var dropTargetId = (0, _reactRedux.useSelector)(function (_ref2) {
    var dropTargets = _ref2.dropTargets;
    return dropTargets[_helpers.FORM_LAYOUT].id;
  });
  var fields = dropTargets[_helpers.FORM_LAYOUT].fieldsIds;
  return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: dropTargetId
  }, function (provided, snapshot) {
    return /*#__PURE__*/_react["default"].createElement(FormContainer, {
      isDraggingOver: snapshot.isDraggingOver
    }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      ref: provided.innerRef
    }, provided.droppableProps, {
      style: {
        height: '100%'
      }
    }), fields.length === 0 && /*#__PURE__*/_react["default"].createElement(EmptyTarget, null), fields.map(function (fieldId, index) {
      return /*#__PURE__*/_react["default"].createElement(_field["default"], {
        disableDrag: disableDrag,
        key: fieldId,
        fieldId: fieldId,
        index: index
      });
    }), provided.placeholder));
  });
};

DropTarget.propTypes = {
  isDropDisabled: _propTypes["default"].bool,
  shouldClone: _propTypes["default"].bool,
  disableDrag: _propTypes["default"].bool,
  disableDelete: _propTypes["default"].bool
};
var _default = DropTarget;
exports["default"] = _default;