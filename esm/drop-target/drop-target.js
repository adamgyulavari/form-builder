import _extends from "@babel/runtime/helpers/extends";
import React, { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Field from '../field';
import ComponentsContext from '../components-context';
import { useSelector } from 'react-redux';
import { FORM_LAYOUT } from '../helpers';
import { DropTargetContext } from '../layout-context';

var DropTarget = function DropTarget() {
  var _useContext = useContext(ComponentsContext),
      _useContext$builderMa = _useContext.builderMapper,
      FormContainer = _useContext$builderMa.FormContainer,
      EmptyTarget = _useContext$builderMa.EmptyTarget;

  var _useContext2 = useContext(DropTargetContext),
      disableDrag = _useContext2.disableDrag;

  var dropTargets = useSelector(function (_ref) {
    var dropTargets = _ref.dropTargets;
    return dropTargets;
  });
  var dropTargetId = useSelector(function (_ref2) {
    var dropTargets = _ref2.dropTargets;
    return dropTargets[FORM_LAYOUT].id;
  });
  var fields = dropTargets[FORM_LAYOUT].fieldsIds;
  return /*#__PURE__*/React.createElement(Droppable, {
    droppableId: dropTargetId
  }, function (provided, snapshot) {
    return /*#__PURE__*/React.createElement(FormContainer, {
      isDraggingOver: snapshot.isDraggingOver
    }, /*#__PURE__*/React.createElement("div", _extends({
      ref: provided.innerRef
    }, provided.droppableProps, {
      style: {
        height: '100%'
      }
    }), fields.length === 0 && /*#__PURE__*/React.createElement(EmptyTarget, null), fields.map(function (fieldId, index) {
      return /*#__PURE__*/React.createElement(Field, {
        disableDrag: disableDrag,
        key: fieldId,
        fieldId: fieldId,
        index: index
      });
    }), provided.placeholder));
  });
};

DropTarget.propTypes = {
  isDropDisabled: PropTypes.bool,
  shouldClone: PropTypes.bool,
  disableDrag: PropTypes.bool,
  disableDelete: PropTypes.bool
};
export default DropTarget;