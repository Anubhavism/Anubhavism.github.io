myApp.factory('dataService',function($http,$window){
	var obj={
		content:{},
		answers:[],
		ques_index:0,
		score:0,
		names:"ram"
	};
	$http.get('static-data/questions.json').then(function(response){
		 obj.content=response.data;
	});
	obj.setTheSelected=function(idSelectedVote){
		obj.answers.push(idSelectedVote);
   		if (obj.ques_index >= obj.content.length -1){
            obj.ques_index = -1;
        }
        else{
        	obj.ques_index++;
        }
        if(obj.ques_index==-1){
			for(i=0;i<obj.answers.length;i++){
				if(obj.answers[i]==obj.content[i].correct)
				obj.score++;
			}
			$window.location.href="#/result";
		}

	};
	obj.reset=function(){
		obj.answers=[];
		obj.ques_index=0;
		obj.score=0;
		obj.names="";
	}

	return obj;
});