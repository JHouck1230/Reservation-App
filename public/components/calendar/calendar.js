'use strict';

angular.module('resApp')
.config(function($stateProvider) {
	$stateProvider
	.state('calendar', {
		url: '/calendar',
		templateUrl: 'components/calendar/calendar.html',
		controller: 'calendarCtrl'
	});
});