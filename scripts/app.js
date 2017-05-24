var app=angular.module('myApp',['infinite-scroll']);
app.controller('mainCtrl',function($scope,$http){
	$http.get('static-data/profileDetails.json').then(function(response){
		$scope.userInfo=response.data;
	});
	$http.get('static-data/smallFeed.json').then(function(response){
		$scope.smallFeed=response.data;
		$scope.temp=response.data;
		
	});
	$http.get('static-data/userDetails.json').then(function(response){
		$scope.newsFeed=response.data;
		$scope.tempFeed=response.data;
	});
	$scope.contacts=['Aparajita Tiwari','Tanushree Mahto','Bhawna Rai','Hemant Rai','Alafazam Khan','Parmender Chahal','Akshay Kumar'];
	 $scope.loadMore = function() {
        for (let i = 0; i < 5; i++) {
            $scope.smallFeed[$scope.smallFeed.length]=$scope.temp[i];
            
        }
    };
    $scope.loadFeed=function(){
    	for(let i=0;i<3;i++){
    		$scope.newsFeed[$scope.newsFeed.length]=$scope.tempFeed[i];
    	}
    };
   
});



