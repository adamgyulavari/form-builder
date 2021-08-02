import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
var useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  builderLayout: {
    display: 'flex',
    flexGrow: 1
  }
});

var BuilderTemplate = function BuilderTemplate(_ref) {
  var ComponentPicker = _ref.ComponentPicker,
      PropertiesEditor = _ref.PropertiesEditor,
      DropTarget = _ref.DropTarget,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, children, /*#__PURE__*/React.createElement("div", {
    className: classes.builderLayout
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