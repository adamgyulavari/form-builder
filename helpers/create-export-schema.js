"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.validateOutput = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _excluded = ["restoreable"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ARTIFICIAL_KEYS = ['preview', 'clone', 'initialized', 'id', 'isContainer', 'children', 'container', 'restricted', 'propertyValidation'];

var sanitizeField = function sanitizeField(field) {
  var result = _objectSpread({}, field);

  ARTIFICIAL_KEYS.forEach(function (key) {
    delete result[key];
  });

  if (result.options) {
    result.options = result.options.filter(function (_ref) {
      var deleted = _ref.deleted;
      return !deleted;
    }).map(function (_ref2) {
      var restoreable = _ref2.restoreable,
          option = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
      return option;
    });
  }

  return result;
};

var validateOutput = function validateOutput(fields) {
  var valid = Object.keys(fields).find(function (key) {
    return fields[key].propertyValidation && Object.keys(fields[key].propertyValidation).length > 0 && Object.entries(fields[key].propertyValidation).find(function (_ref3) {
      var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
          value = _ref4[1];

      return value;
    });
  });
  return !valid;
};

exports.validateOutput = validateOutput;

var createSchema = function createSchema() {
  var fieldsIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fields = arguments.length > 1 ? arguments[1] : undefined;
  return {
    fields: fieldsIds.map(function (key) {
      return sanitizeField(fields[key]);
    })
  };
};

var _default = createSchema;
exports["default"] = _default;