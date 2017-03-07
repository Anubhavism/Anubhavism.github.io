'use strict';

myApp.controller('MainCtrl',function($scope,$http,userService){
	$http.get('static-data/menu.json').then(function(response){
		$scope.dishes=response.data;
	});
});

	