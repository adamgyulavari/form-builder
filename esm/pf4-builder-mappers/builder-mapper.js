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
import { Button } from "@patternfly/react-core/dist/esm/components/Button/Button.js";
import { Card } from "@patternfly/react-core/dist/esm/components/Card/Card.js";
import { CardBody } from "@patternfly/react-core/dist/esm/components/Card/CardBody.js";
import { CardHeader } from "@patternfly/react-core/dist/esm/components/Card/CardHeader.js";
import { Form } from "@patternfly/react-core/dist/esm/components/Form/Form.js";
import { FormGroup } from "@patternfly/react-core/dist/esm/components/Form/FormGroup.js";
import { Title } from "@patternfly/react-core/dist/esm/components/Title/Title.js";
import { Tab } from "@patternfly/react-core/dist/esm/components/Tabs/Tab.js";
import { Tabs } from "@patternfly/react-core/dist/esm/components/Tabs/Tabs.js";
import TrashIcon from "@patternfly/react-icons/dist/esm/icons/trash-icon";
import TimesIcon from "@patternfly/react-icons/dist/esm/icons/times-icon";
import GripVerticalIcon from "@patternfly/react-icons/dist/esm/icons/grip-vertical-icon";
import EyeSlashIcon from "@patternfly/react-icons/dist/esm/icons/eye-slash-icon";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";
import clsx from 'clsx';
import { InternalSelect } from '@data-driven-forms/pf4-component-mapper/select';
import { builderComponentTypes } from '../constants';

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

  return /*#__PURE__*/React.createElement("div", {
    className: clsx('pf4-component-wrapper', {
      hidden: hideField
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf4-hidefield-overlay"
  }, /*#__PURE__*/React.createElement(EyeSlashIcon, {
    size: "xl",
    className: "hide-indicator"
  }), /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    label: props.label || prepareLabel(props.component, snapshot.isDragging)
  }, prepareOptions(props.component, props.options)))));
};

var snapshotPropType = PropTypes.shape({
  isDragging: PropTypes.bool
}).isRequired;
var childrenPropType = PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]);
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
  var children = _ref3.children,
      disableDrag = _ref3.disableDrag,
      selected = _ref3.selected;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx('pf4-field-layout', {
      'drag-disabled': disableDrag,
      selected: selected
    })
  }, children));
};

FieldLayout.propTypes = {
  children: childrenPropType,
  disableDrag: PropTypes.bool,
  selected: PropTypes.bool
};

var BuilderColumn = function BuilderColumn(_ref4) {
  var children = _ref4.children,
      isDraggingOver = _ref4.isDraggingOver,
      props = _objectWithoutProperties(_ref4, _excluded2);

  return /*#__PURE__*/React.createElement(Card, _extends({}, props, {
    className: 'pf4-builder-column'
  }), /*#__PURE__*/React.createElement(CardBody, {
    className: "pf-c-form"
  }, children));
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

  var Select = InternalSelect;
  useEffect(function () {
    if (activeTab === 1 && disableValidators) {
      setActiveTab(0);
    }
  }, [disableValidators]);
  return /*#__PURE__*/React.createElement("div", {
    className: "pf4-properties-editor-container"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "pf4-properties-editor-header"
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h2",
    size: "2xl",
    className: "pf4-properties-editor-title"
  }, "Properties editor", handleDelete && /*#__PURE__*/React.createElement(Button, {
    className: "editor-header-button",
    variant: "plain",
    onClick: handleDelete,
    isDisabled: !handleDelete,
    "aria-label": "delete field"
  }, /*#__PURE__*/React.createElement(TrashIcon, null)), /*#__PURE__*/React.createElement(Button, {
    className: "editor-header-button",
    variant: "plain",
    "aria-label": "close properties editor",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(TimesIcon, null))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, {
    className: "pf4-tabs-container"
  }, /*#__PURE__*/React.createElement(Tabs, {
    className: "pf4-tabs",
    isFilled: true,
    activeKey: activeTab,
    onSelect: function onSelect(_e, tabIndex) {
      return setActiveTab(tabIndex);
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    tabIndex: "-1",
    eventKey: 0,
    title: /*#__PURE__*/React.createElement("span", null, "Properties ", hasPropertyError && /*#__PURE__*/React.createElement(ExclamationCircleIcon, {
      className: "pf4-property-error-icon"
    }))
  }), !disableValidators && /*#__PURE__*/React.createElement(Tab, {
    tabIndex: "-1",
    eventKey: 1,
    title: "Validation",
    disabled: disableValidators
  })))), /*#__PURE__*/React.createElement("div", {
    hidden: activeTab !== 0
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(Form, null, propertiesChildren)))), /*#__PURE__*/React.createElement("div", {
    hidden: activeTab !== 1
  }, /*#__PURE__*/React.createElement(Card, {
    className: "pf4-validators-property-group"
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(FormGroup, {
    label: "Add validator",
    fieldId: "new-validator"
  }, /*#__PURE__*/React.createElement(Select, {
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

  return /*#__PURE__*/React.createElement(Card, {
    className: "pf4-validators-property-group"
  }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h3",
    size: "1xl",
    className: "pf4-validators-validator-title"
  }, title, handleDelete && /*#__PURE__*/React.createElement(Button, {
    variant: "plain",
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(TrashIcon, null)))), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(Form, _extends({
    className: clsx(className, 'pf4')
  }, props), children)));
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

  if (disableDrag && !hasPropertyError) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", _extends({}, dragHandleProps, {
    className: "pf4-drag-handle"
  }), hasPropertyError && /*#__PURE__*/React.createElement(ExclamationCircleIcon, {
    className: "pf4-property-error-icon icon-spacer-bottom"
  }), !disableDrag && /*#__PURE__*/React.createElement(GripVerticalIcon, {
    className: "pf4-drag-handle-icon"
  }));
};

DragHandle.propTypes = {
  dragHandleProps: PropTypes.shape({
    'data-rbd-drag-handle-draggable-id': PropTypes.string,
    'data-rbd-drag-handle-context-id': PropTypes.string,
    'aria-labelledby': PropTypes.string,
    tabIndex: PropTypes.number,
    draggable: PropTypes.bool,
    onDragStart: PropTypes.func
  }),
  disableDrag: PropTypes.bool,
  hasPropertyError: PropTypes.bool
};

var FormContainer = function FormContainer(_ref8) {
  var children = _ref8.children,
      className = _ref8.className;
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(className, 'pf-c-form', 'pf4-builder-form-container')
  }, children);
};

FormContainer.propTypes = {
  children: childrenPropType,
  className: PropTypes.string
};

var EmptyTarget = function EmptyTarget() {
  return /*#__PURE__*/React.createElement("h1", null, "Pick components from the component picker");
};

var builderMapper = (_builderMapper = {
  FieldLayout: FieldLayout,
  PropertiesEditor: PropertiesEditor,
  FormContainer: FormContainer
}, _defineProperty(_builderMapper, builderComponentTypes.BUILDER_FIELD, ComponentWrapper), _defineProperty(_builderMapper, "BuilderColumn", BuilderColumn), _defineProperty(_builderMapper, "PropertyGroup", PropertyGroup), _defineProperty(_builderMapper, "DragHandle", DragHandle), _defineProperty(_builderMapper, "EmptyTarget", EmptyTarget), _builderMapper);
export default builderMapper;