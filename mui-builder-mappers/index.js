"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "builderMapper", {
  enumerable: true,
  get: function get() {
    return _builderMapper["default"];
  }
});
Object.defineProperty(exports, "pickerMapper", {
  enumerable: true,
  get: function get() {
    return _pickerMapper["default"];
  }
});
Object.defineProperty(exports, "propertiesMapper", {
  enumerable: true,
  get: function get() {
    return _propertiesMapper["default"];
  }
});
Object.defineProperty(exports, "BuilderTemplate", {
  enumerable: true,
  get: function get() {
    return _builderTemplate["default"];
  }
});
exports.fieldProperties = void 0;

var _fieldProperties = _interopRequireWildcard(require("./field-properties"));

exports.fieldProperties = _fieldProperties;

var _builderMapper = _interopRequireDefault(require("./builder-mapper"));

var _pickerMapper = _interopRequireDefault(require("./picker-mapper"));

var _propertiesMapper = _interopRequireDefault(require("./properties-mapper"));

var _builderTemplate = _interopRequireDefault(require("./builder-template"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }