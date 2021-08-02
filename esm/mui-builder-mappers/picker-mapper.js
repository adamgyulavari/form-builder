import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _labels, _icons;

import React from 'react';
import PropTypes from 'prop-types';
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import Button from "@material-ui/core/esm/Button";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TodayIcon from '@material-ui/icons/Today';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import TuneIcon from '@material-ui/icons/Tune';
import { makeStyles } from '@material-ui/core/styles';
import { builderComponentTypes } from '../constants';
var useStyles = makeStyles(function () {
  return {
    root: {
      '& > *': {
        'margin-bottom': 8
      }
    },
    label: {
      justifyContent: 'end'
    },
    buttonRoot: {
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(135deg, #41108E 0%, rgba(165, 37, 193, 1) 44.76%, #FC9957 100%)',
      backgroundRepeat: 'no-repeat'
    }
  };
});
var labels = (_labels = {}, _defineProperty(_labels, componentTypes.TEXT_FIELD, 'Text field'), _defineProperty(_labels, componentTypes.CHECKBOX, 'Checkbox'), _defineProperty(_labels, componentTypes.SELECT, 'Select'), _defineProperty(_labels, componentTypes.DATE_PICKER, 'Date picker'), _defineProperty(_labels, componentTypes.PLAIN_TEXT, 'Plain text'), _defineProperty(_labels, componentTypes.RADIO, 'Radio'), _defineProperty(_labels, componentTypes.SWITCH, 'Switch'), _defineProperty(_labels, componentTypes.TEXTAREA, 'Textarea'), _defineProperty(_labels, componentTypes.SUB_FORM, 'Sub form'), _defineProperty(_labels, componentTypes.DUAL_LIST_SELECT, 'Dual list select'), _defineProperty(_labels, componentTypes.SLIDER, 'Slider'), _labels);
var icons = (_icons = {}, _defineProperty(_icons, componentTypes.TEXT_FIELD, /*#__PURE__*/React.createElement(TextFieldsIcon, null)), _defineProperty(_icons, componentTypes.CHECKBOX, /*#__PURE__*/React.createElement(CheckBoxIcon, null)), _defineProperty(_icons, componentTypes.SELECT, /*#__PURE__*/React.createElement(FormatListBulletedIcon, null)), _defineProperty(_icons, componentTypes.DATE_PICKER, /*#__PURE__*/React.createElement(TodayIcon, null)), _defineProperty(_icons, componentTypes.DUAL_LIST_SELECT, /*#__PURE__*/React.createElement(LowPriorityIcon, null)), _defineProperty(_icons, componentTypes.PLAIN_TEXT, /*#__PURE__*/React.createElement(ChromeReaderModeIcon, null)), _defineProperty(_icons, componentTypes.RADIO, /*#__PURE__*/React.createElement(RadioButtonCheckedIcon, null)), _defineProperty(_icons, componentTypes.SWITCH, /*#__PURE__*/React.createElement(ToggleOffIcon, null)), _defineProperty(_icons, componentTypes.TEXTAREA, /*#__PURE__*/React.createElement(TextFieldsIcon, null)), _defineProperty(_icons, componentTypes.SUB_FORM, null), _defineProperty(_icons, componentTypes.SLIDER, /*#__PURE__*/React.createElement(TuneIcon, null)), _icons);

var PickerRoot = function PickerRoot(_ref) {
  var component = _ref.component;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    startIcon: icons[component],
    tabIndex: -1,
    classes: {
      label: classes.label,
      root: classes.buttonRoot
    },
    color: "primary",
    fullWidth: true
  }, labels[component] || component));
};

PickerRoot.propTypes = {
  component: PropTypes.string.isRequired
};

var pickerMapper = _defineProperty({}, builderComponentTypes.PICKER_FIELD, PickerRoot);

export default pickerMapper;