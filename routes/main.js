const express = require('express');

const router = express.Router();
const sessionChecker = require('../middleware/sessionChecker');

router.get('/', sessionChecker, (req, res) => {
  res.render('main');
});

module.exports = router;
