'use strict';

angular.module('resApp')
.config(function($stateProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'components/home/home.html',
		controller: 'homeCtrl'
	});
});