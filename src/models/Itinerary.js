const mongoose = require("mongoose");

  const itinerarySchema = new mongoose.Schema({
    eventDate: Date,
    place: String,
    activity: String
  });

module.exports = mongoose.model('Itinerary', itinerarySchema);
