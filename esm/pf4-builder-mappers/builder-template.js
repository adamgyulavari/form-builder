import React from 'react';
import PropTypes from 'prop-types';

var BuilderTemplate = function BuilderTemplate(_ref) {
  var ComponentPicker = _ref.ComponentPicker,
      PropertiesEditor = _ref.PropertiesEditor,
      DropTarget = _ref.DropTarget,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "pf4-form-builder-layout-template"
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "pf4-form-builder-components"
  }, /*#__PURE__*/React.createElement(ComponentPicker, null), /*#__PURE__*/React.createElement(DropTarget, {
    key: "drop-target"
  }), /*#__PURE__*/React.createElement(PropertiesEditor, null)));
};

BuilderTemplate.propTypes = {
  ComponentPicker: PropTypes.func.isRequired,
  PropertiesEditor: PropTypes.func.isRequired,
  DropTarget: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};
export default BuilderTemplate;