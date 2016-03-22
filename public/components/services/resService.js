'use strict';

angular.module('resApp')
.service('resService', function($http, $rootScope) {
	this.reservations = [];

	this.createRes = function(newRes) {
		$http.post('reservations', newRes)
		.then((res) => {
			this.reservations.push(res.data);
		}, (err) => console.error(err))
	};
			
	this.getRes = function() {
		$http.get('reservations')
		.then((res) => {
			this.reservations = res.data;
			$rootScope.$broadcast('got-reserves');
		}, (err) => console.error(err))
	};

	this.deleteRes = function(reserve) {
		$http.delete(`reservations/${reserve._id}`)
		.then((res) => {
			this.reservations.splice(this.reservations.indexOf(res), 1);
		}, (err) => console.error(err))
	};

	this.saveRes = function(reserve) {
		$http.put(`reservations/${reserve._id}`, reserve)
		.then((res) => {
			var index = this.reservations.indexOf(reserve);
			for(var key in res.data) {
			 this.reservations[index].key = res.data.key; 
			}
		}, (err) => console.error(err))
	}
});