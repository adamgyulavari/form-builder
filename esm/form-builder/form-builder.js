import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["builderMapper", "componentProperties", "pickerMapper", "propertiesMapper", "cloneWhileDragging", "schema", "schemaTemplate", "mode", "debug", "children", "componentMapper", "openEditor"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import FormBuilderLayout from '../form-builder-layout';
import ComponentsContext from '../components-context';
import helpers from '../helpers';
import { Provider } from 'react-redux';
import builderStore from '../builder-store';
import Form from "@data-driven-forms/react-form-renderer/form";
import RendererContext from "@data-driven-forms/react-form-renderer/renderer-context";

var ContainerEnd = function ContainerEnd(_ref) {
  var id = _ref.id;
  return /*#__PURE__*/React.createElement("div", null, id);
};

ContainerEnd.propTypes = {
  id: PropTypes.string
};

var FormBuilder = function FormBuilder(_ref2) {
  var builderMapper = _ref2.builderMapper,
      componentProperties = _ref2.componentProperties,
      pickerMapper = _ref2.pickerMapper,
      propertiesMapper = _ref2.propertiesMapper,
      cloneWhileDragging = _ref2.cloneWhileDragging,
      schema = _ref2.schema,
      schemaTemplate = _ref2.schemaTemplate,
      mode = _ref2.mode,
      debug = _ref2.debug,
      children = _ref2.children,
      componentMapper = _ref2.componentMapper,
      openEditor = _ref2.openEditor,
      props = _objectWithoutProperties(_ref2, _excluded);

  var initialFields = Object.keys(componentProperties).reduce(function (acc, curr) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, "initial-".concat(curr), {
      preview: true,
      id: "initial-".concat(curr),
      component: curr,
      clone: cloneWhileDragging,
      isContainer: componentProperties[curr].isContainer
    }));
  }, {});
  return /*#__PURE__*/React.createElement(ComponentsContext.Provider, {
    value: {
      builderMapper: _objectSpread(_objectSpread({}, builderMapper), {}, {
        'container-end': ContainerEnd
      }),
      componentProperties: componentProperties,
      pickerMapper: pickerMapper,
      propertiesMapper: propertiesMapper,
      debug: debug,
      componentMapper: componentMapper,
      openEditor: openEditor
    }
  }, /*#__PURE__*/React.createElement(Form, {
    onSubmit: function onSubmit() {}
  }, function () {
    return /*#__PURE__*/React.createElement(RendererContext.Provider, {
      value: {
        formOptions: {
          internalRegisterField: function internalRegisterField() {
            return null;
          },
          renderForm: function renderForm() {
            return null;
          },
          internalUnRegisterField: function internalUnRegisterField() {
            return null;
          }
        }
      }
    }, /*#__PURE__*/React.createElement(Provider, {
      store: builderStore
    }, /*#__PURE__*/React.createElement(FormBuilderLayout, _extends({
      initialFields: helpers.createInitialData(initialFields, schema, mode === 'subset', schemaTemplate),
      mode: mode
    }, props), children)));
  }));
};

FormBuilder.propTypes = {
  mode: PropTypes.oneOf(['default', 'subset']),
  debug: PropTypes.bool,
  builderMapper: PropTypes.object.isRequired,
  componentProperties: PropTypes.shape({
    attributes: PropTypes.arrayOf(PropTypes.shape({
      component: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      propertyName: PropTypes.string.isRequired
    }))
  }).isRequired,
  pickerMapper: PropTypes.object.isRequired,
  propertiesMapper: PropTypes.object.isRequired,
  cloneWhileDragging: PropTypes.bool,
  schema: PropTypes.object,
  schemaTemplate: PropTypes.object,
  componentMapper: PropTypes.object.isRequired,
  openEditor: PropTypes.bool,
  children: PropTypes.node
};
FormBuilder.defaultProps = {
  mode: 'default',
  debug: false
};
export default FormBuilder;