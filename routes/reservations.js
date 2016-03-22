'use strict';

var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation.js');

router.get('/', function(req, res) {
	Reservation.find({}, function(err, reservations) {
		if(err) return res.status(400).send(err);
		res.send(reservations);
	});
});

router.get('/:id', function(req, res) {
	Reservation.findById(req.params.id, function(err, reservations) {
		if(err) return res.status(400).send(err);
		res.send(reservations);
	});
});

router.post('/', function(req, res) {
	var reservation = new Reservation(req.body);
	reservation.save(function(err) {
		if(err) return res.status(400).send(err);
		res.send(reservation);
	});
});

router.put('/:id', function(req, res) {
	Reservation.findById(req.params.id, function(err, reservation) {
		if(err) return res.status(400).send(err);
		for(var key in req.body) {
			reservation[key] = req.body[key].split(/\W/).filter((ele) => (ele)); 
		}
		reservation.save(function(err) {
			if(err) return res.status(400).send(err);
			res.send(reservation);
		})
	});
});

router.delete('/:id', function(req, res) {
	Reservation.remove({_id: req.params.id}, function(err, reservation) {
		if(err) return res.status(400).send(err);
		res.send();
	})
})

module.exports = router;
