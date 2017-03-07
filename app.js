'use strict';

var myApp= angular.module('shopApp',[]);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'views/front.html',
			controller: 'MainCtrl'
		})
		.when('/main',{
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/cart',{
			templateUrl: 'views/cart.html',
			controller: 'CartCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}).run(['$rootScope',  function() {}]);

