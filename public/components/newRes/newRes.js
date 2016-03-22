'use strict';

angular.module('resApp')
.config(function($stateProvider) {
	$stateProvider
	.state('newRes', {
		url: '/newreservation',
		templateUrl: 'components/newRes/newRes.html',
		controller: 'newResCtrl'
	});
});