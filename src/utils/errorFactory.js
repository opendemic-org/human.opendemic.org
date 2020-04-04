export function errorFactory(name) {
  function CustomError(base, message, fileName, lineNumber) {
    var instance = new Error(message, fileName, lineNumber);
    instance.name = name;
    instance.base = base;
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
      Error.captureStackTrace(instance, CustomError);
    }
    return instance;
  }

  CustomError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: Error,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(CustomError, Error);
  } else {
    CustomError.__proto__ = Error;
  }

  return CustomError;
}
