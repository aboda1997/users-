import express from "express";
import helmet from "helmet";
import apiRoutes from "./api/api.routes.mjs";
import logger from "./shared/logger.mjs";
import AppErrorHandler from "./shared/error.mjs";
import Authentication from "./shared/authentication.mjs" 

const app = express();
app.use(helmet());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


//app.use(response);

app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
    responseTime: Date.now() - req.startTime,
  });
  next();
});
app.use(Authentication.auth);
app.use("/api", apiRoutes);

app.use(AppErrorHandler.notFound);
app.use(AppErrorHandler.converter);
app.use(AppErrorHandler.handler);
export default app;
