'use strict';

var myApp= angular.module('fino',['ngRoute','lumx']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'views/front.html',
			controller: 'MainCtrl'
		})
		.when('/quiz',{
			templateUrl: 'views/quiz.html',
			controller: 'QuizCtrl'
		})
		.when('/result',{
			templateUrl: 'views/result.html',
			controller: 'ResultCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}).run(['$rootScope',  function() {}]);
    

