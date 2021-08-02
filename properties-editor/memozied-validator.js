"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _validatorProperty = _interopRequireDefault(require("./validator-property"));

var _reactRedux = require("react-redux");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ValidatorComponent = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var handleValidatorChange = _ref.handleValidatorChange,
      property = _ref.property,
      original = _ref.original,
      validator = _ref.validator,
      restricted = _ref.restricted,
      index = _ref.index;
  return /*#__PURE__*/_react["default"].createElement(_validatorProperty["default"], {
    onChange: handleValidatorChange,
    property: _objectSpread(_objectSpread({}, property), {}, {
      original: original
    }),
    restricted: restricted,
    value: validator[property.propertyName],
    index: index
  });
}, function (prevProps, nextProps) {
  var key = nextProps.property.propertyName;
  return prevProps.validator[key] === nextProps.validator[key];
});
ValidatorComponent.propTypes = {
  handleValidatorChange: _propTypes["default"].func.isRequired,
  property: _propTypes["default"].shape({
    propertyName: _propTypes["default"].string.isRequired
  }).isRequired,
  original: _propTypes["default"].object,
  validator: _propTypes["default"].object,
  index: _propTypes["default"].number.isRequired,
  restricted: _propTypes["default"].bool
};

var MemoizedValidator = function MemoizedValidator(props) {
  var restricted = (0, _reactRedux.useSelector)(function (_ref2) {
    var fields = _ref2.fields,
        selectedComponent = _ref2.selectedComponent;
    return fields[selectedComponent].restricted;
  }, _reactRedux.shallowEqual);
  return /*#__PURE__*/_react["default"].createElement(ValidatorComponent, (0, _extends2["default"])({}, props, {
    restricted: restricted
  }));
};

var _default = MemoizedValidator;
exports["default"] = _default;