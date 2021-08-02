import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _labels;

import React from 'react';
import PropTypes from 'prop-types';
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import { Button } from "@patternfly/react-core/dist/esm/components/Button/Button.js";
import './pf4-mapper-style.css';
import { builderComponentTypes } from '../constants';
var labels = (_labels = {}, _defineProperty(_labels, componentTypes.TEXT_FIELD, 'Text field'), _defineProperty(_labels, componentTypes.CHECKBOX, 'Checkbox'), _defineProperty(_labels, componentTypes.SELECT, 'Select'), _defineProperty(_labels, componentTypes.DATE_PICKER, 'Date picker'), _defineProperty(_labels, componentTypes.PLAIN_TEXT, 'Plain text'), _defineProperty(_labels, componentTypes.RADIO, 'Radio'), _defineProperty(_labels, componentTypes.SWITCH, 'Switch'), _defineProperty(_labels, componentTypes.TEXTAREA, 'Textarea'), _defineProperty(_labels, componentTypes.SUB_FORM, 'Sub form'), _defineProperty(_labels, componentTypes.DUAL_LIST_SELECT, 'Dual list select'), _defineProperty(_labels, componentTypes.SLIDER, 'Slider'), _labels);

var PickerRoot = function PickerRoot(_ref) {
  var component = _ref.component;
  return /*#__PURE__*/React.createElement("div", {
    className: "pf4-picker-root"
  }, /*#__PURE__*/React.createElement(Button, {
    tabIndex: -1,
    variant: "primary",
    color: "primary"
  }, labels[component] || component));
};

PickerRoot.propTypes = {
  component: PropTypes.string.isRequired
};

var pickerMapper = _defineProperty({}, builderComponentTypes.PICKER_FIELD, PickerRoot);

export default pickerMapper;