'use strict';

angular.module('resApp')
.controller('homeCtrl', function($scope, resService) {
	resService.getRes();
	$scope.$on('got-reserves', (args) => $scope.reserves = resService.reservations);

	$scope.deleteRes = function(res) {
		resService.deleteRes(res);
	}

	$scope.editRes= function(res) {
		res.editing = true;
	}

	$scope.saveRes= function(res) {
		res.editing = false;
		resService.saveRes(res);
	}

})