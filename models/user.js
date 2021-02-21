const mongoose = require('mongoose');

module.exports = mongoose.model('user', {
  email: {
    type: String,
    unique: true,
  },
  password: String,
  userName: {
    type: String,
    unique: true,
  },
});
