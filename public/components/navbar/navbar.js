'use strict';

angular.module('resApp')
.directive('navbar', function() {
	function link($scope, ele, attrs) {}
	return {
		restict: 'E',
		templateUrl: './components/navbar/navbar.html',
		scope: {},
		link: link
	}
})