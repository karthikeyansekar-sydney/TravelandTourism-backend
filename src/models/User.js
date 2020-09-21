const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
    email: String,
    passwordDigest: String,
    admin: Boolean
  });

module.exports = mongoose.model('User', userSchema);
