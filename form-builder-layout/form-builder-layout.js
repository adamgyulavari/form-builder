"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _dropTarget = _interopRequireDefault(require("../drop-target"));

var _propertiesEditor = _interopRequireDefault(require("../properties-editor"));

var _componentPicker = _interopRequireDefault(require("../component-picker"));

var _builderStore = require("../builder-store");

var _helpers = require("../helpers");

var _reactRedux = require("react-redux");

var _layoutContext = require("../layout-context");

var _createExportSchema = _interopRequireDefault(require("../helpers/create-export-schema"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var throttleValidator = (0, _throttle["default"])(_helpers.validateOutput, 250);

var Layout = function Layout(_ref) {
  var getSchema = _ref.getSchema,
      state = _ref.state,
      render = _ref.render,
      children = _ref.children;
  var layoutProps = {
    getSchema: getSchema,
    isValid: throttleValidator(state.fields),
    ComponentPicker: _componentPicker["default"],
    DropTarget: _dropTarget["default"],
    PropertiesEditor: _propertiesEditor["default"]
  };

  if (render) {
    return render(layoutProps);
  }

  if (children && children.length > 1) {
    throw new Error('Form builder requires only one child node. Please wrap your childnre in a Fragment');
  }

  if (children) {
    return children(layoutProps);
  }

  throw new Error('Form builder requires either render prop or children');
};

var FormBuilderLayout = function FormBuilderLayout(_ref2) {
  var initialFields = _ref2.initialFields,
      disableDrag = _ref2.disableDrag,
      mode = _ref2.mode,
      disableAdd = _ref2.disableAdd,
      children = _ref2.children,
      render = _ref2.render;
  var dispatch = (0, _reactRedux.useDispatch)();
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  }, _reactRedux.shallowEqual);
  (0, _react.useEffect)(function () {
    dispatch({
      type: _builderStore.INITIALIZE,
      payload: initialFields
    });
    return function () {
      return dispatch({
        type: _builderStore.UNINITIALIZE
      });
    };
  }, []);

  var getSchema = function getSchema() {
    return (0, _createExportSchema["default"])(state.dropTargets[_helpers.FORM_LAYOUT].fieldsIds, state.fields);
  };

  var onDragEnd = function onDragEnd(result) {
    return dispatch({
      type: 'setColumns',
      payload: result
    });
  };

  var onDragStart = function onDragStart(draggable) {
    return dispatch({
      type: 'dragStart',
      payload: draggable
    });
  };

  var dropTargets = state.dropTargets,
      fields = state.fields;

  if (!state.initialized) {
    return /*#__PURE__*/_react["default"].createElement("div", null, "Loading");
  }

  return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: onDragEnd,
    onDragStart: onDragStart
  }, /*#__PURE__*/_react["default"].createElement(_layoutContext.DropTargetContext.Provider, {
    value: {
      disableDrag: disableDrag
    }
  }, /*#__PURE__*/_react["default"].createElement(_layoutContext.ComponentPickerContext.Provider, {
    value: {
      fields: dropTargets[_helpers.COMPONENTS_LIST].fieldsIds.map(function (taskId) {
        return fields[taskId];
      }),
      disableAdd: disableAdd
    }
  }, /*#__PURE__*/_react["default"].createElement(Layout, {
    getSchema: getSchema,
    state: state,
    dropTargets: dropTargets,
    fields: fields,
    mode: mode,
    disableDrag: disableDrag,
    render: render
  }, children))));
};

FormBuilderLayout.propTypes = {
  initialFields: _propTypes["default"].object,
  disableDrag: _propTypes["default"].bool,
  mode: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node,
  render: _propTypes["default"].func,
  disableAdd: _propTypes["default"].bool
};
var _default = FormBuilderLayout;
exports["default"] = _default;