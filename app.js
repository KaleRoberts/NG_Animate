(function () {
	"use strict";
	
	var app = angular.module('app', ['ngAnimate']);

	app.controller('MainCtrl',[
		'$scope',
		function($scope) {

			$scope.saturn = false;
			$scope.neptune = false;
			
		}]);
}());