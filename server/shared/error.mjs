import _ from "lodash";


import {
  AppError,
  InternalServerError,
  NotFoundError,
} from "./app-error.mjs";

export default class AppErrorHandler {
  static converter(err, req, res, next) {
    next(
      err instanceof AppError ? err : new InternalServerError(undefined, err)
    );
  }

  static handler(err, req, res, next) {
    const error =err;
    res.locals.errorMessage = err.message;
    res.locals.errorStack = err.stack;
    const response = _.pick(error, ["statusCode", "message"]);
    res.status(response.statusCode).send(response);
  }

  static notFound(req, res, next) {
    next(new NotFoundError());
  }
}
