'use strict';

var mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/restReservations';

var Reservation = mongoose.model('Reservation', {
  time: Date,
  name: String,
  size: Number,
  checkedIn: Boolean,
  seated: Boolean
});

module.exports = Reservation;

