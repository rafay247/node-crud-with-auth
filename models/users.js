const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
})

const User = mongoose.model('user', schema);

module.exports = User;
