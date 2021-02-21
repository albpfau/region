function myMiddleware(app) {
  const express = require("express");
  const morgan = require("morgan");
  const cookieParser = require("cookie-parser");
  const path = require("path");
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost:27017/region", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  app.use(morgan("dev"));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../views"));
  app.use(express.static(path.join(__dirname, "../public")));
}
module.exports = { myMiddleware };
