import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["FieldActions", "FieldLayout", "DragHandle"],
    _excluded2 = ["clone", "isContainer", "validate"],
    _excluded3 = ["hideField", "initialized", "preview", "restricted"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useContext, memo, Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import ComponentsContext from '../components-context';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash/isEqual';
import { builderComponentTypes } from '../constants';
var Field = /*#__PURE__*/memo(function (_ref) {
  var fieldId = _ref.fieldId,
      index = _ref.index,
      shouldClone = _ref.shouldClone,
      disableDrag = _ref.disableDrag,
      draggingContainer = _ref.draggingContainer;

  var _useContext = useContext(ComponentsContext),
      _useContext$builderMa = _useContext.builderMapper,
      FieldActions = _useContext$builderMa.FieldActions,
      FieldLayout = _useContext$builderMa.FieldLayout,
      DragHandle = _useContext$builderMa.DragHandle,
      rest = _objectWithoutProperties(_useContext$builderMa, _excluded),
      componentMapper = _useContext.componentMapper;

  var _useSelector = useSelector(function (_ref2) {
    var fields = _ref2.fields;
    return fields[fieldId];
  }),
      clone = _useSelector.clone,
      isContainer = _useSelector.isContainer,
      validate = _useSelector.validate,
      field = _objectWithoutProperties(_useSelector, _excluded2);

  var selectedComponent = useSelector(function (_ref3) {
    var selectedComponent = _ref3.selectedComponent;
    return selectedComponent;
  });
  var dispatch = useDispatch();
  var FieldComponent = rest[field.component] || rest[builderComponentTypes.BUILDER_FIELD];
  var hasPropertyError = field.propertyValidation && Object.entries(field.propertyValidation).find(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        value = _ref5[1];

    return value;
  });

  if (field.component === 'container-end') {
    return /*#__PURE__*/React.createElement(Draggable, {
      isDragDisabled: true,
      draggableId: field.id,
      index: index
    }, function (provided) {
      return /*#__PURE__*/React.createElement("div", _extends({
        style: field.id.match(new RegExp("^".concat(draggingContainer, "-end"))) ? {
          visibility: 'hidden',
          height: 0,
          padding: 0,
          border: 0,
          margin: 0
        } : {},
        ref: provided.innerRef
      }, provided.draggableProps));
    });
  }

  var hideField = field.hideField,
      initialized = field.initialized,
      preview = field.preview,
      restricted = field.restricted,
      cleanField = _objectWithoutProperties(field, _excluded3);

  return /*#__PURE__*/React.createElement(Draggable, {
    isDragDisabled: disableDrag,
    draggableId: field.id,
    index: index
  }, function (provided, snapshot) {
    var innerProps = {
      snapshot: snapshot,
      hasPropertyError: !!hasPropertyError,
      hideField: hideField,
      initialized: initialized,
      preview: preview,
      restricted: restricted
    };
    return /*#__PURE__*/React.createElement("div", _extends({
      style: field.container !== undefined && field.container === draggingContainer ? {
        visibility: 'hidden',
        height: 0,
        padding: 0,
        border: 0,
        margin: 0
      } : {},
      ref: provided.innerRef
    }, provided.draggableProps, {
      onClick: function onClick() {
        return dispatch({
          type: 'setSelectedComponent',
          payload: field.id
        });
      }
    }), /*#__PURE__*/React.createElement(FieldLayout, {
      disableDrag: disableDrag,
      dragging: snapshot.isDragging,
      selected: selectedComponent === field.id,
      isContainer: isContainer,
      inContainer: field.container
    }, field.preview ? /*#__PURE__*/React.createElement("div", null, field.content) : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(FieldComponent, _extends({}, cleanField, {
      innerProps: innerProps,
      Component: componentMapper[field.component]
    })), !shouldClone && /*#__PURE__*/React.createElement(DragHandle, {
      disableDrag: disableDrag,
      hasPropertyError: !!hasPropertyError,
      dragHandleProps: _objectSpread({}, provided.dragHandleProps)
    }))));
  });
});
Field.propTypes = {
  index: PropTypes.number.isRequired,
  shouldClone: PropTypes.bool,
  disableDrag: PropTypes.bool,
  selectedComponent: PropTypes.string,
  draggingContainer: PropTypes.string,
  fieldId: PropTypes.string.isRequired
};

var MemoizedField = function MemoizedField(props) {
  var _useSelector2 = useSelector(function (_ref6) {
    var selectedComponent = _ref6.selectedComponent,
        draggingContainer = _ref6.draggingContainer;
    return {
      selectedComponent: selectedComponent,
      draggingContainer: draggingContainer
    };
  }, isEqual),
      selectedComponent = _useSelector2.selectedComponent,
      draggingContainer = _useSelector2.draggingContainer;

  return /*#__PURE__*/React.createElement(Field, _extends({}, props, {
    selectedComponent: selectedComponent,
    draggingContainer: draggingContainer
  }));
};

export default MemoizedField;