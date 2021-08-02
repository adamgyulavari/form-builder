import React, { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import DropTarget from '../drop-target';
import PropertiesEditor from '../properties-editor';
import ComponentPicker from '../component-picker';
import { INITIALIZE, UNINITIALIZE } from '../builder-store';
import { validateOutput, COMPONENTS_LIST, FORM_LAYOUT } from '../helpers';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { DropTargetContext, ComponentPickerContext } from '../layout-context';
import createSchema from '../helpers/create-export-schema';
var throttleValidator = throttle(validateOutput, 250);

var Layout = function Layout(_ref) {
  var getSchema = _ref.getSchema,
      state = _ref.state,
      render = _ref.render,
      children = _ref.children;
  var layoutProps = {
    getSchema: getSchema,
    isValid: throttleValidator(state.fields),
    ComponentPicker: ComponentPicker,
    DropTarget: DropTarget,
    PropertiesEditor: PropertiesEditor
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
  var dispatch = useDispatch();
  var state = useSelector(function (state) {
    return state;
  }, shallowEqual);
  useEffect(function () {
    dispatch({
      type: INITIALIZE,
      payload: initialFields
    });
    return function () {
      return dispatch({
        type: UNINITIALIZE
      });
    };
  }, []);

  var getSchema = function getSchema() {
    return createSchema(state.dropTargets[FORM_LAYOUT].fieldsIds, state.fields);
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
    return /*#__PURE__*/React.createElement("div", null, "Loading");
  }

  return /*#__PURE__*/React.createElement(DragDropContext, {
    onDragEnd: onDragEnd,
    onDragStart: onDragStart
  }, /*#__PURE__*/React.createElement(DropTargetContext.Provider, {
    value: {
      disableDrag: disableDrag
    }
  }, /*#__PURE__*/React.createElement(ComponentPickerContext.Provider, {
    value: {
      fields: dropTargets[COMPONENTS_LIST].fieldsIds.map(function (taskId) {
        return fields[taskId];
      }),
      disableAdd: disableAdd
    }
  }, /*#__PURE__*/React.createElement(Layout, {
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
  initialFields: PropTypes.object,
  disableDrag: PropTypes.bool,
  mode: PropTypes.string.isRequired,
  children: PropTypes.node,
  render: PropTypes.func,
  disableAdd: PropTypes.bool
};
export default FormBuilderLayout;