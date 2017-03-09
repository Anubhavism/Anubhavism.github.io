myApp.controller('QuizCtrl',function($scope,dataService){
	$scope.data=dataService;
	
	$scope.setSelected = function (idSelectedVote) {
			dataService.setTheSelected(idSelectedVote);
	};

});