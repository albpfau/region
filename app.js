const express = require("express");
const app = express();
const { myMiddleware } = require("./middleware");
const mainRouter = require("./routes/main");
const authRouter = require("./routes/auth");
const sessionConfig = require("./middleware/sessionConfig");
const { setLocalVariable } = require("./middleware/setLocalVariable");
myMiddleware(app);

sessionConfig(app);
app.use(setLocalVariable);
app.use("/", mainRouter);
app.use("/auth", authRouter);

module.exports = app;
