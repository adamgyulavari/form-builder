"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  builderLayout: {
    display: 'flex',
    flexGrow: 1
  }
});

var BuilderTemplate = function BuilderTemplate(_ref) {
  var ComponentPicker = _ref.ComponentPicker,
      PropertiesEditor = _ref.PropertiesEditor,
      DropTarget = _ref.DropTarget,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, children, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.builderLayout
  }, /*#__PURE__*/_react["default"].createElement(ComponentPicker, null), /*#__PURE__*/_react["default"].createElement(DropTarget, {
    key: "drop-target"
  }), /*#__PURE__*/_react["default"].createElement(PropertiesEditor, null)));
};

BuilderTemplate.propTypes = {
  ComponentPicker: _propTypes["default"].func.isRequired,
  PropertiesEditor: _propTypes["default"].func.isRequired,
  DropTarget: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].element)])
};
var _default = BuilderTemplate;
exports["default"] = _default;