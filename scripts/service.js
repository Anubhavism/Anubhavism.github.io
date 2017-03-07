myApp.factory('userService', function userService(){
	var obj={
		cart: [],
		totalQuantity: 0,
		totalPrice: 0
	};	

obj.addToCart= function(newItem){
	for(i=0; i < obj.cart.length;i++){
        if(obj.cart[i].id == newItem.id){
          obj.cart[i].quantity += 1;
          obj.totalPrice += obj.cart[i].price;
          obj.totalQuantity += 1;
          return;
        }
    }
    	obj.cart.push(newItem);
        obj.cart[i].quantity += 1;
        obj.totalPrice += obj.cart[i].price;
        obj.totalQuantity += 1;
}
obj.subTheItem=function(newItem){
	for(i=0; i < obj.cart.length;i++){
        if(obj.cart[i].id == newItem.id){
          obj.cart[i].quantity -= 1;
          obj.totalPrice -= obj.cart[i].price;
          obj.totalQuantity -= 1;
          return;
        }
    }
}
obj.removeTheFruit=function(newItem){
	for(i=0; i < obj.cart.length;i++){
		 if(obj.cart[i].id == newItem.id){
		 	obj.totalQuantity-=obj.cart[i].quantity;
		 	 obj.totalPrice -= obj.cart[i].price*obj.cart[i].quantity;
		 	  obj.cart.splice(i,1);
		 }
	}

}
obj.clearTheCart=function(){
	obj.cart.splice(0,obj.cart.length);
	obj.totalQuantity=0;
	obj.totalPrice=0;
 }
 return obj;	
});