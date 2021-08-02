import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var _excluded = ["index", "action", "fieldId"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import validatorTypes from "@data-driven-forms/react-form-renderer/validator-types";
import propertiesValidation from '../properties-editor/initial-value-checker';
import { FORM_LAYOUT } from '../helpers';

var isInContainer = function isInContainer(index, containers) {
  return containers.find(function (c) {
    return index > c.boundaries[0] && index <= c.boundaries[1];
  });
};

var mutateColumns = function mutateColumns(result, state) {
  var destination = result.destination,
      source = result.source,
      draggableId = result.draggableId;
  var dropTargets = state.dropTargets,
      fields = state.fields,
      containers = state.containers;

  if (!destination) {
    return {};
  }

  if (destination.droppableId === source.droppableId && destination.index === source.index) {
    return {};
  }

  var start = dropTargets[source.droppableId];
  var finish = dropTargets[destination.droppableId];
  var template = fields[draggableId];
  var isMovingInColumn = start === finish;

  if (isMovingInColumn) {
    var noContainerNesting = template.isContainer && isInContainer(destination.index, containers);

    if (noContainerNesting) {
      return;
    }

    if (template.isContainer) {
      var newFieldsIds = _toConsumableArray(start.fieldsIds);

      newFieldsIds.splice(source.index, template.children.length + 2);
      newFieldsIds.splice.apply(newFieldsIds, [destination.index, 0, draggableId].concat(_toConsumableArray(template.children), ["".concat(draggableId, "-end")]));
      return {
        dropTargets: _objectSpread(_objectSpread({}, dropTargets), {}, _defineProperty({}, source.droppableId, _objectSpread(_objectSpread({}, start), {}, {
          fieldsIds: newFieldsIds
        })))
      };
    } else {
      var _newFieldsIds = _toConsumableArray(start.fieldsIds);

      var moveContainer = isInContainer(destination.index, containers);

      var _newFields = _objectSpread({}, fields);
      /**
       * Move into from root
       * filed was not in container before
       */


      if (moveContainer && !fields[draggableId].container) {
        _newFields[moveContainer.id].children = [].concat(_toConsumableArray(_newFields[moveContainer.id].children), [draggableId]);
        _newFields[draggableId].container = moveContainer.id;
      }
      /**
       * Move field outside of a container to root
       */


      if (fields[draggableId].container && !moveContainer) {
        _newFields[fields[draggableId].container].children = _newFields[fields[draggableId].container].children.filter(function (child) {
          return child !== draggableId;
        });
        delete _newFields[draggableId].container;
      }
      /**
       * Move field between containers
       */


      if (moveContainer && fields[draggableId].container && fields[draggableId].container !== moveContainer.id) {
        _newFields[moveContainer.id].children = [].concat(_toConsumableArray(_newFields[moveContainer.id].children), [draggableId]);
        _newFields[fields[draggableId].container].children = _newFields[fields[draggableId].container].children.filter(function (child) {
          return child !== draggableId;
        });
        _newFields[draggableId].container = moveContainer.id;
      }

      _newFieldsIds.splice(source.index, 1);

      _newFieldsIds.splice(destination.index, 0, draggableId);

      return {
        fields: _newFields,
        dropTargets: _objectSpread(_objectSpread({}, dropTargets), {}, _defineProperty({}, source.droppableId, _objectSpread(_objectSpread({}, start), {}, {
          fieldsIds: _newFieldsIds
        })))
      };
    }
  }
  /**
   * Copy to column
   */


  var newId = Date.now().toString();

  var finishFieldsIds = _toConsumableArray(finish.fieldsIds);

  var container = isInContainer(destination.index, containers);

  var newFields = _objectSpread(_objectSpread({}, fields), {}, _defineProperty({}, newId, _objectSpread(_objectSpread({}, fields[draggableId]), {}, {
    name: fields[draggableId].component,
    preview: false,
    id: newId,
    initialized: false,
    container: container && container.id,
    children: template.isContainer && []
  })));

  var newContainers = _toConsumableArray(containers);

  if (container) {
    newFields[container.id] = _objectSpread(_objectSpread({}, newFields[container.id]), {}, {
      children: [].concat(_toConsumableArray(newFields[container.id].children), [newId])
    });
    newContainers = newContainers.map(function (c) {
      return c.id === container.id ? _objectSpread(_objectSpread({}, c), {}, {
        boundaries: [c.boundaries[0], c.boundaries[1] + 1]
      }) : c;
    });
  }

  if (template.isContainer) {
    finishFieldsIds.splice(destination.index, 0, newId, "".concat(newId, "-end"));
    newFields["".concat(newId, "-end")] = {
      component: 'container-end',
      id: "".concat(newId, "-end")
    };
    newContainers.push({
      id: newId,
      boundaries: [destination.index, destination.index + 1]
    });
  } else {
    finishFieldsIds.splice(destination.index, 0, newId);
  }

  var newFinish = _objectSpread(_objectSpread({}, finish), {}, {
    fieldsIds: finishFieldsIds
  });

  return {
    dropTargets: _objectSpread(_objectSpread({}, dropTargets), {}, _defineProperty({}, newFinish.id, newFinish)),
    fields: newFields,
    selectedComponent: newId,
    containers: newContainers
  };
};

var removeComponent = function removeComponent(componentId, state) {
  var fields = state.fields;

  var field = _objectSpread({}, fields[componentId]);

  var containers = _toConsumableArray(state.containers);

  if (field.container) {
    /**
     * adjust container size if field was in container
     */
    containers = containers.map(function (c) {
      return c.id === field.container ? _objectSpread(_objectSpread({}, c), {}, {
        boundaries: [c.boundaries[0], c.boundaries[1] - 1]
      }) : c;
    });
  }

  delete fields[componentId];
  delete fields["".concat(componentId, "-end")];
  return {
    selectedComponent: undefined,
    dropTargets: _objectSpread(_objectSpread({}, state.dropTargets), {}, _defineProperty({}, FORM_LAYOUT, _objectSpread(_objectSpread({}, state.dropTargets[FORM_LAYOUT]), {}, {
      fieldsIds: state.dropTargets[FORM_LAYOUT].fieldsIds.filter(function (id) {
        return id !== componentId && id !== "".concat(componentId, "-end");
      })
    }))),
    fields: _objectSpread({}, state.fields),
    containers: containers
  };
};

var setFieldproperty = function setFieldproperty(field, payload) {
  var modifiedField = _objectSpread(_objectSpread({}, field), {}, _defineProperty({
    initialized: true
  }, payload.propertyName, payload.value));

  return _objectSpread(_objectSpread({}, modifiedField), {}, {
    propertyValidation: _objectSpread(_objectSpread({}, modifiedField.propertyValidation), propertiesValidation(payload.propertyName)(modifiedField))
  });
};

var dragStart = function dragStart(field, state) {
  if (field.draggableId.match(/^initial-/) || !state.fields[field.draggableId].isContainer) {
    return {};
  }

  return {
    draggingContainer: field.draggableId
  };
};

var changeValidator = function changeValidator(field, _ref) {
  var index = _ref.index,
      action = _ref.action,
      fieldId = _ref.fieldId,
      validator = _objectWithoutProperties(_ref, _excluded);

  var result = _objectSpread({}, field);

  var validate = result.validate || [];

  if (validator.type === validatorTypes.REQUIRED) {
    result.isRequired = action !== 'remove';
  }

  if (action === 'remove') {
    result.validate = [].concat(_toConsumableArray(validate.slice(0, index)), _toConsumableArray(validate.slice(index + 1)));
  }

  if (action === 'add') {
    result.validate = [].concat(_toConsumableArray(validate), [_objectSpread({}, validator)]);
  }

  if (action === 'modify') {
    result.validate = validate.map(function (item, itemIndex) {
      return itemIndex === index ? _objectSpread(_objectSpread({}, item), validator) : item;
    });
  }

  return result;
};

export var SET_COLUMNS = 'setColumns';
export var SET_SELECTED_COMPONENT = 'setSelectedComponent';
export var REMOVE_COMPONENT = 'removeComponent';
export var DRAG_START = 'dragStart';
export var SET_FIELD_PROPERTY = 'setFieldProperty';
export var SET_FIELD_VALIDATOR = 'setFieldValidator';
export var INITIALIZE = 'initialize';
export var UNINITIALIZE = 'uninitialize';

var builderReducer = function builderReducer(state, action) {
  switch (action.type) {
    case INITIALIZE:
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {
        initialized: true
      });

    case UNINITIALIZE:
      return {
        initialized: false
      };

    case SET_COLUMNS:
      return _objectSpread(_objectSpread(_objectSpread({}, state), mutateColumns(action.payload, state)), {}, {
        draggingContainer: undefined
      });

    case SET_SELECTED_COMPONENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedComponent: action.payload
      });

    case REMOVE_COMPONENT:
      return _objectSpread(_objectSpread({}, state), removeComponent(action.payload, state));

    case DRAG_START:
      return _objectSpread(_objectSpread({}, state), dragStart(action.payload, state));

    case SET_FIELD_PROPERTY:
      return _objectSpread(_objectSpread({}, state), {}, {
        fields: _objectSpread(_objectSpread({}, state.fields), {}, _defineProperty({}, action.payload.fieldId, setFieldproperty(state.fields[action.payload.fieldId], action.payload)))
      });

    case SET_FIELD_VALIDATOR:
      return _objectSpread(_objectSpread({}, state), {}, {
        fields: _objectSpread(_objectSpread({}, state.fields), {}, _defineProperty({}, action.payload.fieldId, changeValidator(state.fields[action.payload.fieldId], action.payload)))
      });

    default:
      return state;
  }
};

export default builderReducer;