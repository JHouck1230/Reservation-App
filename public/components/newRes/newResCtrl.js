'use strict';

angular.module('resApp')
.controller('newResCtrl', function($scope, resService) {
	$scope.createRes = function() {
		$scope.res.checkedIn = false;
		$scope.res.seated = false;
		$scope.res.editing = false;
		resService.createRes($scope.res);
		$scope.res = {};
	}
})