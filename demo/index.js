import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import {
  componentTypes,
  validatorTypes
} from '@data-driven-forms/react-form-renderer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormBuilder from '../src/index';
// import builderMapper from './builder-mapper';
// import pickerMapper from './picker-mapper';
// import propertiesMapper from './properties-mapper';

import { builderMapper, pickerMapper, propertiesMapper } from '../pf4-mappers';

import {
  LABEL,
  HELPER_TEXT,
  PLACEHOLDER,
  INPUT_TYPE,
  IS_DISABLED,
  IS_READ_ONLY,
  OPTIONS,
  TODAY_BUTTON_LABEL,
  IS_CLEARABLE,
  CLOSE_ON_DAY_SELECT,
  SHOW_TODAY_BUTTON,
  MULTI_LINE_LABEL,
  TITLE,
  DESCRIPTION
} from './field-properties';

const componentProperties = {
  [componentTypes.TEXT_FIELD]: {
    attributes: [
      LABEL,
      HELPER_TEXT,
      PLACEHOLDER,
      INPUT_TYPE,
      IS_DISABLED,
      IS_READ_ONLY
    ]
  },
  [componentTypes.CHECKBOX]: { attributes: [LABEL, IS_DISABLED, OPTIONS] },
  [componentTypes.SELECT]: {
    attributes: [OPTIONS, LABEL, IS_DISABLED, PLACEHOLDER, HELPER_TEXT]
  },
  [componentTypes.DATE_PICKER]: {
    attributes: [
      LABEL,
      TODAY_BUTTON_LABEL,
      IS_CLEARABLE,
      CLOSE_ON_DAY_SELECT,
      SHOW_TODAY_BUTTON
    ]
  },
  [componentTypes.PLAIN_TEXT]: { attributes: [MULTI_LINE_LABEL] },
  [componentTypes.RADIO]: { attributes: [LABEL, IS_DISABLED, OPTIONS] },
  [componentTypes.SWITCH]: { attributes: [LABEL, IS_READ_ONLY, IS_DISABLED] },
  [componentTypes.TEXTAREA]: {
    attributes: [LABEL, HELPER_TEXT, IS_READ_ONLY, IS_DISABLED]
  },
  [componentTypes.SUB_FORM]: {
    isContainer: true,
    attributes: [TITLE, DESCRIPTION]
  }
};

const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'my-text-field',
      label: 'Something',
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
          message: 'This field is required'
        },
        {
          type: validatorTypes.MIN_LENGTH,
          threshold: 7
        },
        {
          type: validatorTypes.MAX_LENGTH,
          threshold: 10
        }
      ]
    }
  ]
};

const schemaTemplate = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'my-text-field',
      label: 'Something',
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
          message: 'This field is required'
        },
        {
          type: validatorTypes.MIN_LENGTH,
          threshold: 5
        },
        {
          type: validatorTypes.MAX_LENGTH,
          threshold: 10
        }
      ]
    }
  ]
};

const Demo = () => (
  <Fragment>
    <CssBaseline />
    <ThemeProvider theme={createMuiTheme({})}>
      <FormBuilder
        schema={schema}
        schemaTemplate={schemaTemplate}
        onChange={console.log}
        pickerMapper={pickerMapper}
        componentProperties={componentProperties}
        componentMapper={builderMapper}
        propertiesMapper={propertiesMapper}
        cloneWhileDragging
        disableDrag={false}
        mode="subset"
      />
    </ThemeProvider>
  </Fragment>
);

ReactDom.render(<Demo />, document.getElementById('root'));
