import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _builderMapper;

var _excluded = ["innerProps", "Component", "propertyName", "fieldId", "propertyValidation", "hasPropertyError"],
    _excluded2 = ["children", "isDraggingOver"],
    _excluded3 = ["className", "children", "title", "handleDelete"];
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/esm/Card";
import CardContent from "@material-ui/core/esm/CardContent";
import MenuItem from "@material-ui/core/esm/MenuItem";
import TextFieldMUI from "@material-ui/core/esm/TextField";
import Tabs from "@material-ui/core/esm/Tabs";
import Tab from "@material-ui/core/esm/Tab";
import CardHeader from "@material-ui/core/esm/CardHeader";
import Typography from "@material-ui/core/esm/Typography";
import Divider from "@material-ui/core/esm/Divider";
import Box from "@material-ui/core/esm/Box";
import Badge from "@material-ui/core/esm/Badge";
import IconButton from "@material-ui/core/esm/IconButton";
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import ErrorIcon from '@material-ui/icons/Error';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import { builderComponentTypes } from '../constants';
var snapshotPropType = PropTypes.shape({
  isDragging: PropTypes.bool
}).isRequired;
var childrenPropType = PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]);
var useStyles = makeStyles(function (theme) {
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
      background: grey[300],
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
      fill: red[500]
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
        background: grey[200],
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
      backgroundColor: blue[100]
    }
  };
});

var prepareLabel = function prepareLabel(component, isDragging) {
  var _componentTypes$CHECK;

  return (_componentTypes$CHECK = {}, _defineProperty(_componentTypes$CHECK, componentTypes.CHECKBOX, 'Please, provide label'), _defineProperty(_componentTypes$CHECK, componentTypes.PLAIN_TEXT, 'Please provide a label to plain text component'), _defineProperty(_componentTypes$CHECK, componentTypes.DUAL_LIST_SELECT, 'Please pick label and options'), _defineProperty(_componentTypes$CHECK, componentTypes.RADIO, 'Please pick label and options'), _componentTypes$CHECK)[component] || (isDragging ? component : '');
};

var prepareOptions = function prepareOptions(component) {
  var _componentTypes$SELEC;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (_componentTypes$SELEC = {}, _defineProperty(_componentTypes$SELEC, componentTypes.SELECT, {
    options: options.filter(function (_ref) {
      var deleted = _ref.deleted;
      return !deleted;
    })
  }), _defineProperty(_componentTypes$SELEC, componentTypes.DUAL_LIST_SELECT, {
    options: options
  }), _defineProperty(_componentTypes$SELEC, componentTypes.RADIO, {
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
      props = _objectWithoutProperties(_ref2, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.componentWrapper, classes.componentWrapperOverlay, _defineProperty({}, classes.componentWrapperHidden, hideField))
  }, /*#__PURE__*/React.createElement(VisibilityOffIcon, {
    className: clsx(classes.hiddenIconIndicator, _defineProperty({}, classes.showHiddenIndicator, hideField))
  }), /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    label: props.label || prepareLabel(props.component, snapshot.isDragging)
  }, prepareOptions(props.component, props.options))));
};

ComponentWrapper.propTypes = {
  Component: PropTypes.elementType,
  component: PropTypes.string,
  innerProps: PropTypes.shape({
    snapshot: snapshotPropType,
    hideField: PropTypes.bool
  }).isRequired,
  label: PropTypes.string,
  preview: PropTypes.bool,
  id: PropTypes.string,
  initialized: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string
  })),
  propertyName: PropTypes.string,
  fieldId: PropTypes.string,
  propertyValidation: PropTypes.any,
  hasPropertyError: PropTypes.bool
};

var FieldLayout = function FieldLayout(_ref3) {
  var _clsx3;

  var children = _ref3.children,
      disableDrag = _ref3.disableDrag,
      dragging = _ref3.dragging,
      selected = _ref3.selected;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.fieldLayout, (_clsx3 = {}, _defineProperty(_clsx3, classes.fieldLayoutDragging, dragging), _defineProperty(_clsx3, classes.fieldLayoutSelected, selected), _defineProperty(_clsx3, 'drag-disabled', disableDrag), _clsx3))
  }, /*#__PURE__*/React.createElement(Card, {
    square: true,
    className: classes.fieldCard
  }, children));
};

FieldLayout.propTypes = {
  children: childrenPropType,
  disableDrag: PropTypes.bool,
  dragging: PropTypes.bool,
  selected: PropTypes.bool
};

var BuilderColumn = function BuilderColumn(_ref4) {
  var children = _ref4.children,
      isDraggingOver = _ref4.isDraggingOver,
      props = _objectWithoutProperties(_ref4, _excluded2);

  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classes.builderColumn
  }), children);
};

BuilderColumn.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  isDraggingOver: PropTypes.bool
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

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var classes = useStyles();
  useEffect(function () {
    if (activeTab === 1 && disableValidators) {
      setActiveTab(0);
    }
  }, [disableValidators]);
  return /*#__PURE__*/React.createElement(Card, {
    className: classes.propertiesContainer
  }, /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Properties editor",
    action: /*#__PURE__*/React.createElement(React.Fragment, null, handleDelete && /*#__PURE__*/React.createElement(IconButton, {
      onClick: handleDelete,
      "aria-label": "delete field"
    }, /*#__PURE__*/React.createElement(DeleteIcon, {
      className: classes.warning
    })), /*#__PURE__*/React.createElement(IconButton, {
      "aria-label": "close properties editor",
      onClick: handleClose
    }, /*#__PURE__*/React.createElement(CloseIcon, null)))
  }, "Properties editor"), /*#__PURE__*/React.createElement(Tabs, {
    indicatorColor: "primary",
    className: classes.tabs,
    variant: "fullWidth",
    value: activeTab,
    onChange: function onChange(_e, tabIndex) {
      return setActiveTab(tabIndex);
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    label: /*#__PURE__*/React.createElement(Badge, {
      color: "default",
      badgeContent: hasPropertyError && /*#__PURE__*/React.createElement(ErrorIcon, {
        className: classes.warning
      })
    }, "Properties")
  }), !disableValidators && /*#__PURE__*/React.createElement(Tab, {
    label: "Validation"
  })), /*#__PURE__*/React.createElement("div", {
    hidden: activeTab !== 0
  }, /*#__PURE__*/React.createElement("form", {
    className: classes.form
  }, propertiesChildren)), /*#__PURE__*/React.createElement("div", {
    hidden: activeTab !== 1
  }, /*#__PURE__*/React.createElement(TextFieldMUI, {
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
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option.value,
      value: option.value
    }, option.label);
  })), /*#__PURE__*/React.createElement("form", {
    className: classes.form
  }, validationChildren))));
};

PropertiesEditor.propTypes = {
  propertiesChildren: childrenPropType,
  validationChildren: childrenPropType,
  avaiableValidators: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  addValidator: PropTypes.func.isRequired,
  fieldName: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  hasPropertyError: PropTypes.array,
  disableValidators: PropTypes.bool
};

var PropertyGroup = function PropertyGroup(_ref6) {
  var className = _ref6.className,
      children = _ref6.children,
      title = _ref6.title,
      handleDelete = _ref6.handleDelete,
      props = _objectWithoutProperties(_ref6, _excluded3);

  var classes = useStyles();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    gutterBottom: true
  }, title, handleDelete && /*#__PURE__*/React.createElement(IconButton, {
    variant: "plain",
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(DeleteIcon, {
    className: classes.warning
  }))), /*#__PURE__*/React.createElement("div", _extends({
    className: classes.form
  }, props), children));
};

PropertyGroup.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func
};

var DragHandle = function DragHandle(_ref7) {
  var dragHandleProps = _ref7.dragHandleProps,
      hasPropertyError = _ref7.hasPropertyError,
      disableDrag = _ref7.disableDrag;
  var classes = useStyles();

  if (disableDrag && !hasPropertyError) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", _extends({}, dragHandleProps, {
    className: classes.handle
  }), hasPropertyError && /*#__PURE__*/React.createElement(ErrorIcon, {
    className: classes.warning
  }), !disableDrag && /*#__PURE__*/React.createElement(DragIndicatorIcon, {
    className: "mui-builder-drag-handle-icon"
  }));
};

DragHandle.propTypes = {
  dragHandleProps: PropTypes.shape({
    'data-rbd-drag-handle-draggable-id': PropTypes.string.isRequired,
    'data-rbd-drag-handle-context-id': PropTypes.string.isRequired,
    'aria-labelledby': PropTypes.string,
    tabIndex: PropTypes.number,
    draggable: PropTypes.bool,
    onDragStart: PropTypes.func.isRequired
  }),
  disableDrag: PropTypes.bool,
  hasPropertyError: PropTypes.bool
};

var FormContainer = function FormContainer(_ref8) {
  var children = _ref8.children,
      isDraggingOver = _ref8.isDraggingOver;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.formContainer, _defineProperty({}, classes.formContainerOver, isDraggingOver))
  }, children);
};

var EmptyTarget = function EmptyTarget() {
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(Box, {
    className: classes.emptyTarget,
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(ArrowBackIcon, {
    fontSize: "large"
  }));
};

FormContainer.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  isDraggingOver: PropTypes.bool
};
var builderMapper = (_builderMapper = {
  FieldLayout: FieldLayout,
  PropertiesEditor: PropertiesEditor,
  FormContainer: FormContainer
}, _defineProperty(_builderMapper, builderComponentTypes.BUILDER_FIELD, ComponentWrapper), _defineProperty(_builderMapper, "BuilderColumn", BuilderColumn), _defineProperty(_builderMapper, "PropertyGroup", PropertyGroup), _defineProperty(_builderMapper, "DragHandle", DragHandle), _defineProperty(_builderMapper, "EmptyTarget", EmptyTarget), _builderMapper);
export default builderMapper;