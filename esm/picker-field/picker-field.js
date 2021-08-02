import _extends from "@babel/runtime/helpers/extends";
import React, { useContext, Fragment, memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import ComponentsContext from '../components-context';
import { builderComponentTypes } from '../constants';
var PickerField = /*#__PURE__*/memo(function (_ref) {
  var field = _ref.field,
      index = _ref.index;

  var _useContext = useContext(ComponentsContext),
      pickerMapper = _useContext.pickerMapper,
      builderMapper = _useContext.builderMapper,
      componentMapper = _useContext.componentMapper;

  var Component = pickerMapper[field.component] || pickerMapper[builderComponentTypes.PICKER_FIELD];
  var Clone = builderMapper[field.component] || builderMapper[builderComponentTypes.BUILDER_FIELD];
  return /*#__PURE__*/React.createElement(Draggable, {
    draggableId: field.id,
    index: index
  }, function (provided, snapshot) {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps), snapshot.isDragging && field.clone ? /*#__PURE__*/React.createElement(Clone, {
      input: {
        name: 'template-clone'
      },
      meta: {},
      name: "template-clone",
      innerProps: {
        snapshot: snapshot,
        isClone: true
      },
      component: field.component,
      Component: componentMapper[field.component]
    }) : /*#__PURE__*/React.createElement(Component, {
      innerProps: {
        snapshot: snapshot,
        isClone: true
      },
      component: field.component
    })), snapshot.isDragging && /*#__PURE__*/React.createElement(Component, _extends({}, snapshot, {
      component: field.component
    })));
  });
}, function (prevProps, nextProps) {
  return prevProps.index === nextProps.index;
});
PickerField.propTypes = {
  index: PropTypes.number.isRequired,
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired,
    clone: PropTypes.bool
  }).isRequired
};
export default PickerField;