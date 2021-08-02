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

var _clsx5 = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _DragIndicator = _interopRequireDefault(require("@material-ui/icons/DragIndicator"));

var _VisibilityOff = _interopRequireDefault(require("@material-ui/icons/VisibilityOff"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _constants = require("../constants");

var _builderMapper;

var _excluded = ["innerProps", "Component", "propertyName", "fieldId", "propertyValidation", "hasPropertyError"],
    _excluded2 = ["children", "isDraggingOver"],
    _excluded3 = ["className", "children", "title", "handleDelete"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var snapshotPropType = _propTypes["default"].shape({
  isDragging: _propTypes["default"].bool
}).isRequired;

var childrenPropType = _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]);

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    form: {
      display: 'grid',
      'grid-gap': 16
    },
    formContainer: {
      'flex-grow': 1,
      padding: 16,
      backgroundColor: 'transparent',
      transitionProperty: 'background-color',
      transitionDuration: theme.transitions.duration.standard,
      transitionTimingFunction: theme.transitions.easing.easeInOut
    },
    propertiesContainer: {
      'padding-left': 8,
      'flex-grow': 1,
      'max-width': '30%',
      width: '30%',
      minHeight: '100vh'
    },
    componentWrapper: {
      position: 'relative',
      display: 'flex',
      flexGrow: 1,
      padding: 8
    },
    tabs: {
      marginBottom: 8
    },
    badge: {
      width: '100%'
    },
    handle: {
      background: _grey["default"][300],
      textAlign: 'right',
      padding: 2,
      lineHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      '&:hover svg:last-child': {
        fill: theme.palette.primary.main
      }
    },
    warning: {
      fill: _red["default"][500]
    },
    fieldLayout: {
      paddingBottom: 8,
      cursor: 'pointer',
      position: 'relative',
      '&:after': {
        display: 'block',
        content: '""',
        position: 'absolute',
        bottom: 8,
        top: 0,
        left: 0,
        right: 0,
        borderBottomStyle: 'solid',
        borderBottomWidth: 3,
        borderBottomColor: theme.palette.primary.main,
        transform: 'scaleX(0)',
        transitionProperty: 'transform',
        transitionDuration: theme.transitions.duration.standard,
        transitionTimingFunction: theme.transitions.easing.easeInOut
      }
    },
    fieldLayoutDragging: {
      '& .mui-builder-drag-handle-icon': {
        fill: theme.palette.primary.main
      }
    },
    fieldLayoutSelected: {
      '&:after': {
        pointerEvents: 'none',
        transform: 'scaleX(1)'
      }
    },
    fieldContent: {
      padding: 0,
      paddingBottom: 0
    },
    fieldCard: {
      overflow: 'unset',
      paddingBottom: 0,
      display: 'flex'
    },
    builderColumn: {
      margin: 16
    },
    componentWrapperOverlay: {
      '&:after': {
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
        content: '""',
        position: 'absolute',
        transitionProperty: 'all',
        transitionDuration: theme.transitions.duration.standard,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        opacity: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    },
    componentWrapperHidden: {
      pointerEvents: 'none',
      '&:after': {
        background: _grey["default"][200],
        opacity: 0.8
      }
    },
    hiddenIconIndicator: {
      zIndex: 1,
      position: 'absolute',
      left: '50%',
      fontSize: '3rem',
      top: 'calc(50% - 3rem / 2)',
      opacity: 0,
      transitionProperty: 'opacity',
      transitionDuration: theme.transitions.duration.standard,
      transitionTimingFunction: theme.transitions.easing.easeInOut
    },
    showHiddenIndicator: {
      opacity: 1
    },
    emptyTarget: {
      height: '100%'
    },
    formContainerOver: {
      backgroundColor: _blue["default"][100]
    }
  };
});

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
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx5["default"])(classes.componentWrapper, classes.componentWrapperOverlay, (0, _defineProperty2["default"])({}, classes.componentWrapperHidden, hideField))
  }, /*#__PURE__*/_react["default"].createElement(_VisibilityOff["default"], {
    className: (0, _clsx5["default"])(classes.hiddenIconIndicator, (0, _defineProperty2["default"])({}, classes.showHiddenIndicator, hideField))
  }), /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, props, {
    label: props.label || prepareLabel(props.component, snapshot.isDragging)
  }, prepareOptions(props.component, props.options))));
};

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
  var _clsx3;

  var children = _ref3.children,
      disableDrag = _ref3.disableDrag,
      dragging = _ref3.dragging,
      selected = _ref3.selected;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx5["default"])(classes.fieldLayout, (_clsx3 = {}, (0, _defineProperty2["default"])(_clsx3, classes.fieldLayoutDragging, dragging), (0, _defineProperty2["default"])(_clsx3, classes.fieldLayoutSelected, selected), (0, _defineProperty2["default"])(_clsx3, 'drag-disabled', disableDrag), _clsx3))
  }, /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    square: true,
    className: classes.fieldCard
  }, children));
};

FieldLayout.propTypes = {
  children: childrenPropType,
  disableDrag: _propTypes["default"].bool,
  dragging: _propTypes["default"].bool,
  selected: _propTypes["default"].bool
};

var BuilderColumn = function BuilderColumn(_ref4) {
  var children = _ref4.children,
      isDraggingOver = _ref4.isDraggingOver,
      props = (0, _objectWithoutProperties2["default"])(_ref4, _excluded2);
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, props, {
    className: classes.builderColumn
  }), children);
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

  var classes = useStyles();
  (0, _react.useEffect)(function () {
    if (activeTab === 1 && disableValidators) {
      setActiveTab(0);
    }
  }, [disableValidators]);
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    className: classes.propertiesContainer
  }, /*#__PURE__*/_react["default"].createElement(_CardContent["default"], null, /*#__PURE__*/_react["default"].createElement(_CardHeader["default"], {
    title: "Properties editor",
    action: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, handleDelete && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      onClick: handleDelete,
      "aria-label": "delete field"
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], {
      className: classes.warning
    })), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      "aria-label": "close properties editor",
      onClick: handleClose
    }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))
  }, "Properties editor"), /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
    indicatorColor: "primary",
    className: classes.tabs,
    variant: "fullWidth",
    value: activeTab,
    onChange: function onChange(_e, tabIndex) {
      return setActiveTab(tabIndex);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
      color: "default",
      badgeContent: hasPropertyError && /*#__PURE__*/_react["default"].createElement(_Error["default"], {
        className: classes.warning
      })
    }, "Properties")
  }), !disableValidators && /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Validation"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    hidden: activeTab !== 0
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: classes.form
  }, propertiesChildren)), /*#__PURE__*/_react["default"].createElement("div", {
    hidden: activeTab !== 1
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    select: true,
    id: "new-validator",
    onChange: function onChange(e) {
      return addValidator(e.target.value);
    },
    label: "Add validator",
    placeholder: "Choose new validator",
    fullWidth: true,
    value: ""
  }, avaiableValidators.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: option.value,
      value: option.value
    }, option.label);
  })), /*#__PURE__*/_react["default"].createElement("form", {
    className: classes.form
  }, validationChildren))));
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
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    gutterBottom: true
  }, title, handleDelete && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    variant: "plain",
    onClick: handleDelete
  }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], {
    className: classes.warning
  }))), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: classes.form
  }, props), children));
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
  var classes = useStyles();

  if (disableDrag && !hasPropertyError) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, dragHandleProps, {
    className: classes.handle
  }), hasPropertyError && /*#__PURE__*/_react["default"].createElement(_Error["default"], {
    className: classes.warning
  }), !disableDrag && /*#__PURE__*/_react["default"].createElement(_DragIndicator["default"], {
    className: "mui-builder-drag-handle-icon"
  }));
};

DragHandle.propTypes = {
  dragHandleProps: _propTypes["default"].shape({
    'data-rbd-drag-handle-draggable-id': _propTypes["default"].string.isRequired,
    'data-rbd-drag-handle-context-id': _propTypes["default"].string.isRequired,
    'aria-labelledby': _propTypes["default"].string,
    tabIndex: _propTypes["default"].number,
    draggable: _propTypes["default"].bool,
    onDragStart: _propTypes["default"].func.isRequired
  }),
  disableDrag: _propTypes["default"].bool,
  hasPropertyError: _propTypes["default"].bool
};

var FormContainer = function FormContainer(_ref8) {
  var children = _ref8.children,
      isDraggingOver = _ref8.isDraggingOver;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx5["default"])(classes.formContainer, (0, _defineProperty2["default"])({}, classes.formContainerOver, isDraggingOver))
  }, children);
};

var EmptyTarget = function EmptyTarget() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    className: classes.emptyTarget,
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], {
    fontSize: "large"
  }));
};

FormContainer.propTypes = {
  children: childrenPropType,
  className: _propTypes["default"].string,
  isDraggingOver: _propTypes["default"].bool
};
var builderMapper = (_builderMapper = {
  FieldLayout: FieldLayout,
  PropertiesEditor: PropertiesEditor,
  FormContainer: FormContainer
}, (0, _defineProperty2["default"])(_builderMapper, _constants.builderComponentTypes.BUILDER_FIELD, ComponentWrapper), (0, _defineProperty2["default"])(_builderMapper, "BuilderColumn", BuilderColumn), (0, _defineProperty2["default"])(_builderMapper, "PropertyGroup", PropertyGroup), (0, _defineProperty2["default"])(_builderMapper, "DragHandle", DragHandle), (0, _defineProperty2["default"])(_builderMapper, "EmptyTarget", EmptyTarget), _builderMapper);
var _default = builderMapper;
exports["default"] = _default;