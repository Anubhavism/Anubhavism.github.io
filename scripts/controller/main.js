myApp.controller('MainCtrl',function(dataService,$scope){
	
	$scope.setName=function(names){
		console.log(names);
		dataService.names=names;

	}
});