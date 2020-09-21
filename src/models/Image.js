const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    url: String,
    title: String,
    createdAt: Date
  });

module.exports = mongoose.model('Image', imageSchema);
