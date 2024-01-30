import { UnauthorizedError } from "./app-error.mjs";

export default class Authentication {

static  auth (req, res, next) {
  var authHeader = req.headers.authorization;
  if (!authHeader) {
      var err = new UnauthorizedError('You are not authenticated!');
      next(err);
      return;
  }
  var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  if (user == 'admin' && pass == 'password') {
      next(); // authorized
  } else {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');      
      err.status = 401;
      next(err);
  }
}
}

