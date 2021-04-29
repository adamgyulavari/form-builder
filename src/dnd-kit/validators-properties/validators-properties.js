import { validatorTypes } from '@data-driven-forms/react-form-renderer';

const messageType = {
  label: 'Message',
  component: 'input',
  propertyName: 'message',
};

const thresholdType = {
  propertyName: 'threshold',
  label: 'Threshold',
  component: 'input',
  type: 'number',
};

const includeThresholdType = {
  propertyName: 'includeThreshold',
  label: 'Include threshold',
  component: 'switch',
};

const patternType = {
  label: 'Pattern',
  component: 'input',
  propertyName: 'pattern',
};

const urlOptions = ['emptyProtocol', 'protocolIdentifier', 'basicAuth', 'local', 'ipv4', 'ipv6', 'host', 'port', 'path', 'search', 'hash'];

const urlTypes = urlOptions.map((option) => ({
  propertyName: option,
  label: option
    .split(/(?=[A-Z])/)
    .join(' ')
    .replace(/^./, option[0].toUpperCase()),
  component: 'switch',
}));

export default {
  [validatorTypes.MAX_LENGTH]: [
    {
      ...thresholdType,
      label: 'Max length',
      restriction: {
        inputAttribute: 'max',
        validatorAttribute: thresholdType.propertyName,
      },
    },
    messageType,
  ],
  [validatorTypes.MIN_LENGTH]: [
    {
      ...thresholdType,
      label: 'Min length',
      restriction: {
        inputAttribute: 'min',
        validatorAttribute: thresholdType.propertyName,
      },
    },
    messageType,
  ],
  [validatorTypes.EXACT_LENGTH]: [{ ...thresholdType, label: 'Exact length' }, messageType],
  [validatorTypes.MAX_NUMBER_VALUE]: [
    {
      ...thresholdType,
      label: 'Maximum value',
      propertyName: 'value',
      restriction: {
        inputAttribute: 'max',
        validatorAttribute: 'value',
      },
    },
    {
      ...includeThresholdType,
      label: 'Include value',
    },
    messageType,
  ],
  [validatorTypes.MIN_NUMBER_VALUE]: [
    {
      ...thresholdType,
      label: 'Minimum value',
      propertyName: 'value',
      restriction: {
        inputAttribute: 'min',
        validatorAttribute: 'value',
      },
    },
    {
      ...includeThresholdType,
      label: 'Include value',
    },
    messageType,
  ],
  [validatorTypes.MIN_ITEMS]: [{ ...thresholdType, label: 'Minimum number of items' }, messageType],
  [validatorTypes.PATTERN]: [{ ...patternType, restriction: { lock: true } }, messageType],
  [validatorTypes.URL]: [messageType, ...urlTypes],
};
