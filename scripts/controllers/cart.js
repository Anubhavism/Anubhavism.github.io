myApp.controller('CartCtrl',function($scope,userService){

		$scope.order= userService;
		$scope.addCart=function(item){
		userService.addToCart(item);
		}
		$scope.clearCart=function(){
			userService.clearTheCart();
		}
		$scope.add=function(item){
			item.quantity++;
		}
		$scope.subCart=function(item){
			userService.subTheItem(item);
		}
		$scope.removeFruit=function(item){
			userService.removeTheFruit(item);
		}
		
 });