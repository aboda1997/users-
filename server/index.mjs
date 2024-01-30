/* eslint-disable no-process-exit */

import app from "./app.mjs";
import logger from "./shared/logger.mjs";
import {port} from "./shared/config.mjs";

let server;

const exitHandler = (error) => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const initializeAfterConnections = async () => {
  server = app.listen( port , () => {
    logger.info(`Listening to port ${ port}`);
  });
};

await initializeAfterConnections();


const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

const warningHandler = (warn) => {
  logger.warn(warn);
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
process.on("warning", warningHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
