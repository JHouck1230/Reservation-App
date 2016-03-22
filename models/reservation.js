'use strict';

var mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/restReservations';

var Reservation = mongoose.model('Reservation', {
  time: Date,
  name: String,
  size: Number,
  allergies: [String],
  checkedIn: Boolean,
  seated: Boolean
});

module.exports = Reservation;

