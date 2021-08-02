import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

export var COMPONENTS_LIST = 'components-list';
export var FORM_LAYOUT = 'form-layout';
/**
 * Returns a flat fields object to be rendered and edited in the editor
 * @param {Object} initialFields available field definitions in component chooser
 * @param {Object} schema data driven form schema
 * @param {Boolean} isSubset if true, options will be only editable to certain degree
 * @param {Object} schemaTemplate original from which a subset is created. If not specified, editable boundaries will be created from schema
 */

var createInitialData = function createInitialData(initialFields, schema, isSubset, schemaTemplate) {
  var _dropTargets;

  var fields = _objectSpread({}, initialFields);

  var fieldsIds = [];

  if (schema && schema.fields) {
    schema.fields.forEach(function (field) {
      var id = "".concat(field.name, "-").concat(Date.now().toString());
      fieldsIds.push(id);
      fields[id] = _objectSpread(_objectSpread({}, field), {}, {
        id: id,
        clone: true,
        preview: false,
        initialized: true
      });

      if (isSubset) {
        var template;
        var templateOptions = fields[id].options && fields[id].options.map(function (option) {
          return _objectSpread(_objectSpread({}, option), {}, {
            restoreable: true
          });
        });

        if (schemaTemplate) {
          template = schemaTemplate.fields.find(function (_ref) {
            var name = _ref.name;
            return name === field.name;
          });
        }

        if (template && template.options) {
          template.options.forEach(function (option) {
            if (!templateOptions.find(function (_ref2) {
              var value = _ref2.value;
              return value === option.value;
            })) {
              templateOptions.push(_objectSpread(_objectSpread({}, option), {}, {
                restoreable: true,
                deleted: true
              }));
            }
          });
        }

        fields[id] = _objectSpread(_objectSpread({}, fields[id]), {}, {
          restricted: true,
          options: templateOptions,
          validate: fields[id].validate ? fields[id].validate.map(function (validator, index) {
            return _objectSpread(_objectSpread({}, validator), {}, {
              original: template ? _objectSpread({}, template.validate[index]) : _objectSpread({}, validator)
            });
          }) : undefined
        });
      }
    });
  }

  return {
    fields: fields,
    dropTargets: (_dropTargets = {}, _defineProperty(_dropTargets, COMPONENTS_LIST, {
      id: COMPONENTS_LIST,
      title: 'Component picker',
      fieldsIds: Object.keys(initialFields)
    }), _defineProperty(_dropTargets, FORM_LAYOUT, {
      id: FORM_LAYOUT,
      title: 'Form',
      fieldsIds: fieldsIds
    }), _dropTargets),
    selectedComponent: undefined,
    containers: []
  };
};

export default createInitialData;