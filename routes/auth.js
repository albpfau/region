const express = require('express');

const router = express.Router();

const User = require('../models/user');

router.route('/register')
  .get((req, res) => {
    res.render('auth/register');
  })
  .post(async (req, res) => {
    const user = await new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    req.session.user = user;
    res.redirect('/');
  });
  router.get('/logout', (req, res) => {
    if (req.session.user) {
      req.session.destroy();
      res.clearCookie('user_sid');
      res.redirect('/auth/register');
    }
  });
  router.route('/login')
    .get((req, res) => {
      res.render('auth/login');
    })
    .post(async (req, res) => {
      const { userName, password } = req.body;
      const user = await User.findOne({
        userName,
      });
      req.session.user = user;
      res.redirect('/');
    });
  
  
  module.exports = router;
  
