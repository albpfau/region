module.exports = function sessionChecker(req, res, next) {
  if (!req.session.user) {
    res.redirect('/auth/register');
  } else {
    next();
  }
};
