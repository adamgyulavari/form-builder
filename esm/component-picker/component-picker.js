import React, { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ComponentsContext from '../components-context';
import PickerField from '../picker-field';
import { COMPONENTS_LIST } from '../helpers';
import { useSelector } from 'react-redux';
import { ComponentPickerContext } from '../layout-context';

var ComponentPicker = function ComponentPicker() {
  var _useContext = useContext(ComponentsContext),
      BuilderColumn = _useContext.builderMapper.BuilderColumn;

  var _useContext2 = useContext(ComponentPickerContext),
      fields = _useContext2.fields,
      disableAdd = _useContext2.disableAdd;

  var dropTargetId = useSelector(function (_ref) {
    var dropTargets = _ref.dropTargets;
    return dropTargets[COMPONENTS_LIST].id;
  });

  if (disableAdd) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Droppable, {
    droppableId: dropTargetId,
    isDropDisabled: true
  }, function (provided, snapshot) {
    return /*#__PURE__*/React.createElement(BuilderColumn, {
      isDraggingOver: snapshot.isDraggingOver
    }, /*#__PURE__*/React.createElement("div", {
      ref: provided.innerRef
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement(PickerField, {
        key: field.id,
        field: field,
        index: index
      });
    }), provided.placeholder));
  });
};

export default ComponentPicker;