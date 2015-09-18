(function () {
	"use strict";
	
	var app = angular.module('app', ['ngAnimate']);

	app.controller('MainCtrl',[
		'$scope',
		function($scope) {
			// $scope.test = function(){
			// 	var self = this;
			// 	self.showBoxOne = false;
			// 	self.showBoxTwo = false;
			// }
			$scope.saturn = false;
			$scope.neptune = false;
		}]);
}());