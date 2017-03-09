myApp.controller('MainCtrl',function(dataService,$scope){
	$scope.names=dataService.names;
});