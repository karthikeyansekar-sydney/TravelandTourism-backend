const mongoose = require("mongoose");

  const itinerarySchema = new mongoose.Schema({
    event_date: Date,
    place: String,
    activity: String
  });

module.exports = mongoose.model('Itinerary', itinerarySchema);
