module.exports.setLocalVariable = (req, res, next) => {
  if (req.session.user) {
    res.locals.sessionBool = true;
    res.locals.uName = req.session.user.userName;
  } else {
    res.locals.sessionBool = false;
  }
  next();
};
