'use strict';

angular.module('resApp', ['ui.router'])
.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
})
.run(function() {
	
})