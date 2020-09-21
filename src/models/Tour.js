const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    title: String,
    from_date: String,
    to_date: String,
    price: Number,
    images: []
  });

module.exports = mongoose.model('Tour', tourSchema);
