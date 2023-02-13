interface Error {
  statusCode: number;
  message: string;
  stack?: string;
}

class BadRequestError implements Error {
  statusCode: number;
  message: string;

  constructor(message: string) {
    this.statusCode = 400;
    this.message = message;
  }
}

class InternalServerError implements Error {
  statusCode: number;
  message: string;
  stack?: string;

  constructor(message: string, stack?: string) {
    this.statusCode = 500;
    this.message = message;
    this.stack = stack;
  }
}

class ErrorFactory {
  static createError(type: string, message: string, stack?: string): Error {
    switch (type) {
      case 'BadRequest':
        return new BadRequestError(message);
      case 'InternalServer':
        return new InternalServerError(message, stack);
      default:
        throw new Error(`Unsupported error type: ${type}`);
    }
  }
}

function handleError(error: Error) {
  switch (error.statusCode) {
    case 400:
      console.error(`Bad Request: ${error.message}`);
      break;
    case 500:
      console.error(`Internal Server Error: ${error.message}`);
      console.error(error.stack);
      break;
    default:
      console.error(`Unhandled error: ${error.message}`);
      break;
  }
}

try {
  // Some code that can throw an error
  throw ErrorFactory.createError(
    'InternalServer',
    'An unexpected error occurred',
    'Stack trace here'
  );
} catch (error) {
  handleError(error);
}
