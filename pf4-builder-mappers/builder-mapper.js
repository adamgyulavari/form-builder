"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentTypes = _interopRequireDefault(require("@data-driven-forms/react-form-renderer/component-types"));

var _Button = require("@patternfly/react-core/dist/js/components/Button/Button.js");

var _Card = require("@patternfly/react-core/dist/js/components/Card/Card.js");

var _CardBody = require("@patternfly/react-core/dist/js/components/Card/CardBody.js");

var _CardHeader = require("@patternfly/react-core/dist/js/components/Card/CardHeader.js");

var _Form = require("@patternfly/react-core/dist/js/components/Form/Form.js");

var _FormGroup = require("@patternfly/react-core/dist/js/components/Form/FormGroup.js");

var _Title = require("@patternfly/react-core/dist/js/components/Title/Title.js");

var _Tab = require("@patternfly/react-core/dist/js/components/Tabs/Tab.js");

var _Tabs = require("@patternfly/react-core/dist/js/components/Tabs/Tabs.js");

var _trashIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/js/icons/trash-icon"));

var _timesIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/js/icons/times-icon"));

var _gripVerticalIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/js/icons/grip-vertical-icon"));

var _eyeSlashIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/js/icons/eye-slash-icon"));

var _exclamationCircleIcon = _interopRequireDefault(require("@patternfly/react-icons/dist/js/icons/exclamation-circle-icon"));

var _clsx = _interopRequireDefault(require("clsx"));

var _select = require("@data-driven-forms/pf4-component-mapper/select");

var _constants = require("../constants");

var _builderMapper;

var _excluded = ["innerProps", "Component", "propertyName", "fieldId", "propertyValidation", "hasPropertyError"],
    _excluded2 = ["children", "isDraggingOver"],
    _excluded3 = ["className", "children", "title", "handleDelete"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var prepareLabel = function prepareLabel(component, isDragging) {
  var _componentTypes$CHECK;

  return (_componentTypes$CHECK = {}, (0, _defineProperty2["default"])(_componentTypes$CHECK, _componentTypes["default"].CHECKBOX, 'Please, provide label'), (0, _defineProperty2["default"])(_componentTypes$CHECK, _componentTypes["default"].PLAIN_TEXT, 'Please provide a label to plain text component'), (0, _defineProperty2["default"])(_componentTypes$CHECK, _componentTypes["default"].DUAL_LIST_SELECT, 'Please pick label and options'), (0, _defineProperty2["default"])(_componentTypes$CHECK, _componentTypes["default"].RADIO, 'Please pick label and options'), _componentTypes$CHECK)[component] || (isDragging ? component : '');
};

var prepareOptions = function prepareOptions(component) {
  var _componentTypes$SELEC;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (_componentTypes$SELEC = {}, (0, _defineProperty2["default"])(_componentTypes$SELEC, _componentTypes["default"].SELECT, {
    options: options.filter(function (_ref) {
      var deleted = _ref.deleted;
      return !deleted;
    })
  }), (0, _defineProperty2["default"])(_componentTypes$SELEC, _componentTypes["default"].DUAL_LIST_SELECT, {
    options: options
  }), (0, _defineProperty2["default"])(_componentTypes$SELEC, _componentTypes["default"].RADIO, {
    options: options
  }), _componentTypes$SELEC)[component] || {};
};

var ComponentWrapper = function ComponentWrapper(_ref2) {
  var _ref2$innerProps = _ref2.innerProps,
      hideField = _ref2$innerProps.hideField,
      snapshot = _ref2$innerProps.snapshot,
      Component = _ref2.Component,
      propertyName = _ref2.propertyName,
      fieldId = _ref2.fieldId,
      propertyValidation = _ref2.propertyValidation,
      hasPropertyError = _ref2.hasPropertyError,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('pf4-component-wrapper', {
      hidden: hideField
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pf4-hidefield-overlay"
  }, /*#__PURE__*/_react["default"].createElement(_eyeSlashIcon["default"], {
    size: "xl",
    className: "hide-indicator"
  }), /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, props, {
    label: props.label || prepareLabel(props.component, snapshot.isDragging)
  }, prepareOptions(props.component, props.options)))));
};

var snapshotPropType = _propTypes["default"].shape({
  isDragging: _propTypes["default"].bool
}).isRequired;

var childrenPropType = _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]);

ComponentWrapper.propTypes = {
  Component: _propTypes["default"].elementType,
  component: _propTypes["default"].string,
  innerProps: _propTypes["default"].shape({
    snapshot: snapshotPropType,
    hideField: _propTypes["default"].bool
  }).isRequired,
  label: _propTypes["default"].string,
  preview: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  initialized: _propTypes["default"].bool,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].any,
    label: _propTypes["default"].string
  })),
  propertyName: _propTypes["default"].string,
  fieldId: _propTypes["default"].string,
  propertyValidation: _propTypes["default"].any,
  hasPropertyError: _propTypes["default"].bool
};

var FieldLayout = function FieldLayout(_ref3) {
  var children = _ref3.children,
      disableDrag = _ref3.disableDrag,
      selected = _ref3.selected;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('pf4-field-layout', {
      'drag-disabled': disableDrag,
      selected: selected
    })
  }, children));
};

FieldLayout.propTypes = {
  children: childrenPropType,
  disableDrag: _propTypes["default"].bool,
  selected: _propTypes["default"].bool
};

var BuilderColumn = function BuilderColumn(_ref4) {
  var children = _ref4.children,
      isDraggingOver = _ref4.isDraggingOver,
      props = (0, _objectWithoutProperties2["default"])(_ref4, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, (0, _extends2["default"])({}, props, {
    className: 'pf4-builder-column'
  }), /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, {
    className: "pf-c-form"
  }, children));
};

BuilderColumn.propTypes = {
  className: _propTypes["default"].string,
  children: childrenPropType,
  isDraggingOver: _propTypes["default"].bool
};

var PropertiesEditor = function PropertiesEditor(_ref5) {
  var propertiesChildren = _ref5.propertiesChildren,
      validationChildren = _ref5.validationChildren,
      addValidator = _ref5.addValidator,
      avaiableValidators = _ref5.avaiableValidators,
      handleClose = _ref5.handleClose,
      handleDelete = _ref5.handleDelete,
      hasPropertyError = _ref5.hasPropertyError,
      disableValidators = _ref5.disableValidators;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var Select = _select.InternalSelect;
  (0, _react.useEffect)(function () {
    if (activeTab === 1 && disableValidators) {
      setActiveTab(0);
    }
  }, [disableValidators]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "pf4-properties-editor-container"
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "pf4-properties-editor-header"
  }, /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, null, /*#__PURE__*/_react["default"].createElement(_Title.Title, {
    headingLevel: "h2",
    size: "2xl",
    className: "pf4-properties-editor-title"
  }, "Properties editor", handleDelete && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "editor-header-button",
    variant: "plain",
    onClick: handleDelete,
    isDisabled: !handleDelete,
    "aria-label": "delete field"
  }, /*#__PURE__*/_react["default"].createElement(_trashIcon["default"], null)), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "editor-header-button",
    variant: "plain",
    "aria-label": "close properties editor",
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_timesIcon["default"], null))))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, {
    className: "pf4-tabs-container"
  }, /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, {
    className: "pf4-tabs",
    isFilled: true,
    activeKey: activeTab,
    onSelect: function onSelect(_e, tabIndex) {
      return setActiveTab(tabIndex);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tab.Tab, {
    tabIndex: "-1",
    eventKey: 0,
    title: /*#__PURE__*/_react["default"].createElement("span", null, "Properties ", hasPropertyError && /*#__PURE__*/_react["default"].createElement(_exclamationCircleIcon["default"], {
      className: "pf4-property-error-icon"
    }))
  }), !disableValidators && /*#__PURE__*/_react["default"].createElement(_Tab.Tab, {
    tabIndex: "-1",
    eventKey: 1,
    title: "Validation",
    disabled: disableValidators
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    hidden: activeTab !== 0
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, null, /*#__PURE__*/_react["default"].createElement(_Form.Form, null, propertiesChildren)))), /*#__PURE__*/_react["default"].createElement("div", {
    hidden: activeTab !== 1
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "pf4-validators-property-group"
  }, /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, null, /*#__PURE__*/_react["default"].createElement(_Form.Form, null, /*#__PURE__*/_react["default"].createElement(_FormGroup.FormGroup, {
    label: "Add validator",
    fieldId: "new-validator"
  }, /*#__PURE__*/_react["default"].createElement(Select, {
    id: "new-validator",
    placeholder: "Choose new validator",
    onChange: function onChange(value) {
      return addValidator(value);
    },
    options: avaiableValidators
  }))))), validationChildren));
};

PropertiesEditor.propTypes = {
  propertiesChildren: childrenPropType,
  validationChildren: childrenPropType,
  avaiableValidators: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].string
  })).isRequired,
  addValidator: _propTypes["default"].func.isRequired,
  fieldName: _propTypes["default"].string,
  handleClose: _propTypes["default"].func.isRequired,
  handleDelete: _propTypes["default"].func,
  hasPropertyError: _propTypes["default"].array,
  disableValidators: _propTypes["default"].bool
};

var PropertyGroup = function PropertyGroup(_ref6) {
  var className = _ref6.className,
      children = _ref6.children,
      title = _ref6.title,
      handleDelete = _ref6.handleDelete,
      props = (0, _objectWithoutProperties2["default"])(_ref6, _excluded3);
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "pf4-validators-property-group"
  }, /*#__PURE__*/_react["default"].createElement(_CardHeader.CardHeader, null, /*#__PURE__*/_react["default"].createElement(_Title.Title, {
    headingLevel: "h3",
    size: "1xl",
    className: "pf4-validators-validator-title"
  }, title, handleDelete && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "plain",
    onClick: handleDelete
  }, /*#__PURE__*/_react["default"].createElement(_trashIcon["default"], null)))), /*#__PURE__*/_react["default"].createElement(_CardBody.CardBody, null, /*#__PURE__*/_react["default"].createElement(_Form.Form, (0, _extends2["default"])({
    className: (0, _clsx["default"])(className, 'pf4')
  }, props), children)));
};

PropertyGroup.propTypes = {
  className: _propTypes["default"].string,
  children: childrenPropType,
  title: _propTypes["default"].string.isRequired,
  handleDelete: _propTypes["default"].func
};

var DragHandle = function DragHandle(_ref7) {
  var dragHandleProps = _ref7.dragHandleProps,
      hasPropertyError = _ref7.hasPropertyError,
      disableDrag = _ref7.disableDrag;

  if (disableDrag && !hasPropertyError) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, dragHandleProps, {
    className: "pf4-drag-handle"
  }), hasPropertyError && /*#__PURE__*/_react["default"].createElement(_exclamationCircleIcon["default"], {
    className: "pf4-property-error-icon icon-spacer-bottom"
  }), !disableDrag && /*#__PURE__*/_react["default"].createElement(_gripVerticalIcon["default"], {
    className: "pf4-drag-handle-icon"
  }));
};

DragHandle.propTypes = {
  dragHandleProps: _propTypes["default"].shape({
    'data-rbd-drag-handle-draggable-id': _propTypes["default"].string,
    'data-rbd-drag-handle-context-id': _propTypes["default"].string,
    'aria-labelledby': _propTypes["default"].string,
    tabIndex: _propTypes["default"].number,
    draggable: _propTypes["default"].bool,
    onDragStart: _propTypes["default"].func
  }),
  disableDrag: _propTypes["default"].bool,
  hasPropertyError: _propTypes["default"].bool
};

var FormContainer = function FormContainer(_ref8) {
  var children = _ref8.children,
      className = _ref8.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(className, 'pf-c-form', 'pf4-builder-form-container')
  }, children);
};

FormContainer.propTypes = {
  children: childrenPropType,
  className: _propTypes["default"].string
};

var EmptyTarget = function EmptyTarget() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Pick components from the component picker");
};

var builderMapper = (_builderMapper = {
  FieldLayout: FieldLayout,
  PropertiesEditor: PropertiesEditor,
  FormContainer: FormContainer
}, (0, _defineProperty2["default"])(_builderMapper, _constants.builderComponentTypes.BUILDER_FIELD, ComponentWrapper), (0, _defineProperty2["default"])(_builderMapper, "BuilderColumn", BuilderColumn), (0, _defineProperty2["default"])(_builderMapper, "PropertyGroup", PropertyGroup), (0, _defineProperty2["default"])(_builderMapper, "DragHandle", DragHandle), (0, _defineProperty2["default"])(_builderMapper, "EmptyTarget", EmptyTarget), _builderMapper);
var _default = builderMapper;
exports["default"] = _default;