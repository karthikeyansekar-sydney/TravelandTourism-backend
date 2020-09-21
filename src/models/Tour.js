const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    title: String,
    from_date: String,
    to_date: String,
    price: Number,
    images: [{
      url: String,
      title: String,
      createdAt: Date
    }],
    itineraries: [{
      eventDate: Date,
      place: String,
      activity: String,
      images: [{
        url: String,
        title: String,
        createdAt: Date
      }]
    }]
  });

module.exports = mongoose.model('Tour', tourSchema);
