myApp.controller('ResultCtrl',function($scope,dataService){
	$scope.data=dataService;
	$scope.setColor=function(option,question){
		if(option.id==$scope.data.answers[question.id-1] && option.id==question.correct){
			return "correct";

		}
		if(option.id==$scope.data.answers[question.id-1] && option.id!=question.correct){
			return "incorrect";
		}
		if(option.id==question.correct){
			return "correct";
		}
	};
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Status', 'Count'],
          ['Correct',     $scope.data.score],
          ['Incorrect',      5-$scope.data.score]
        ]);

        var options = {
          title: 'Final Result',
          pieHole: 0.4,
          colors:['indigo','#ed3d46']
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
});
