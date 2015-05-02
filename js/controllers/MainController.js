var app = angular.module('friendsList');

app.controller('MainController', function($scope) {

	$scope.test = "MainCtlr Test";

	$scope.peopleArr = [
		{name: "Skoot Diggity", age: 37},
		{name: "Ash Diggity", age: 37},
		{name: "Huds Diggity", age: 1}
	];

	$scope.addPerson = function() {
		console.log("addPerson");
		var timeStamp = new Date();
		$scope.newPerson.dateAdded = timeStamp;
		$scope.peopleArr.push($scope.newPerson);
		$scope.newPerson = '';
	};

});