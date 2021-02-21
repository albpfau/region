const { model } = require("mongoose");

module.exports = function sessionConfig(app){
  const session = require('express-session');
  const FileStore = require('session-file-store')(session);
  app.use(
    session({
      name: 'user_sid',
      store: new FileStore(),
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { expires: 900000 },
    }),
  );
}
