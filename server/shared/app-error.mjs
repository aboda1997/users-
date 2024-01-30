/* eslint-disable max-classes-per-file */

import { HTTP_CODES } from "./status-codes.mjs";


export class AppError extends Error {
  constructor(
    error = null,
    message = "", 
    statusCode = HTTP_CODES.SERVER.INTERNAL,
    isOperational = true
  ) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (error) {
      if (error instanceof Error) {
        this.statusCode = error.statusCode || statusCode;
        this.message = error.message || message;
        this.isOperational = error.isOperational || isOperational;
        if (error.stack) {
          this.stack = error.stack;
        } else {
          Error.captureStackTrace(this, this.constructor);
        }
      } else {
        this.stack = error;
      }
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }


}

export class BadRequestError extends AppError {
  constructor(message = MESSAGES.BAD_REQUEST_ERROR, error = null) {
    super(error, message, HTTP_CODES.CLIENT.BAD_REQUEST, true);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = MESSAGES.UNAUTHORIZED_ERROR, error = null) {
    super(error, message, HTTP_CODES.CLIENT.UNAUTHORIZED, true);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = MESSAGES.FORBIDDEN_ERROR, error = null) {
    super(error, message, HTTP_CODES.CLIENT.FORBIDDEN, true);
  }
}

export class NotFoundError extends AppError {
  constructor(message = MESSAGES.NOT_FOUND_ERROR, error = null) {
    super(error, message, HTTP_CODES.CLIENT.NOT_FOUND, true);
  }
}

export class ConflictError extends AppError {
  constructor(message = MESSAGES.CONFLICT_ERROR, error = null) {
    super(error, message, HTTP_CODES.CLIENT.CONFLICT, true);
  }
}

export class UnprocessableEntityError extends AppError {
  constructor(message = MESSAGES.UNPROCESSABLE_ENTITY_ERROR, error = null) {
    super(error, message, HTTP_CODES.CLIENT.UNPROCESSABLE_ENTITY, true);
  }
}

export class InternalServerError extends AppError {
  constructor(message = MESSAGES.INTERNAL_SERVER_ERROR, error = null) {
    super(error, message, HTTP_CODES.SERVER.INTERNAL, true);
  }
}

