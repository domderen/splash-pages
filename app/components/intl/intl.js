import isString from 'lodash/lang/isString';
import isPlainObject from 'lodash/lang/isPlainObject';
import isEmpty from 'lodash/lang/isEmpty';

/**
 * Gets message from the messages object, for an idenitfier provided with dot names.
 * @param  {Object} messages Messages object. Eg. {some: {value: 'abc'}}
 * @param  {String} pointer  An identifier to lookup inside the messages object. Eg. 'some.value'.
 * @return {String}          Returns a value from the messages object for a given pointer. Eg. 'abc'.
 * If value was not found, or parameters were not of proper types, function throws.
 */
export function getMessage(messages, pointer) {
  if (!isString(pointer)) { throw new TypeError(`Pointer must be a string`); }
  if (!isPlainObject(messages) || isEmpty(messages)) {
    throw new TypeError(`Messages must an object`);
  }

  let message;
  try {
    message = pointer.split('.').reduce(function(obj, pathPart) {
      return obj[pathPart];
    }, messages);
  } finally {
    if (message === undefined) {
      throw new ReferenceError(`Could not find Intl pointer: ${pointer}`);
    }
  }

  return message;
}
