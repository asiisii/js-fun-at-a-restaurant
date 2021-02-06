function createRestaurant(name){
  var pizzaRestaurant = {
    name,
    menus : {
      breakfast: [],
      lunch:[],
      dinner:[],
    },
  };
  return pizzaRestaurant;
}

function addMenuItem(pizzaRestaurant, foodItem){
  // console.log(pizzaRestaurant,foodItem);
  if (foodItem.type === "lunch"){
    // pizzaRestaurant= pizzaRestaurant.menus.lunch.push(foodItem);
    if (pizzaRestaurant.menus.lunch.includes(foodItem)){
      return pizzaRestaurant;
    }else {
      pizzaRestaurant= pizzaRestaurant.menus.lunch.push(foodItem);
      return pizzaRestaurant;
    }
    // return pizzaRestaurant;
  }else if (foodItem.type === "breakfast"){
    // pizzaRestaurant= pizzaRestaurant.menus.breakfast.push(foodItem);
    // return pizzaRestaurant;
    if (pizzaRestaurant.menus.breakfast.includes(foodItem)){
      return pizzaRestaurant;
    }else {
      pizzaRestaurant= pizzaRestaurant.menus.breakfast.push(foodItem);
      return pizzaRestaurant;
    }
  }else {
    // pizzaRestaurant= pizzaRestaurant.menus.dinner.push(foodItem);
    // return pizzaRestaurant;
    if (pizzaRestaurant.menus.dinner.includes(foodItem)){
      return pizzaRestaurant;
    }else {
      pizzaRestaurant= pizzaRestaurant.menus.dinner.push(foodItem);
      return pizzaRestaurant;
    }
  }
}








function removeMenuItem(pizzaRestaurant, foodName, foodType ){

  if (foodType === "breakfast"){

      pizzaRestaurant.menus.breakfast.shift();
      // console.log(pizzaRestaurant.menus);
      var result = `No one is eating our ${foodName} - it has been removed from the ${foodType} menu!`;
       return result;
  }
  else if (foodType === "dinner"){
    pizzaRestaurant.menus.dinner.shift();
    // console.log(pizzaRestaurant.menus);
    var result = `No one is eating our ${foodName} - it has been removed from the ${foodType} menu!`;
     return result;


  }
  else{
    // console.log(pizzaRestaurant.menus);
    if (foodName === pizzaRestaurant.menus.lunch.includes(foodName)){
      pizzaRestaurant.menus.lunch.shift();
      var result = `No one is eating our ${foodName} - it has been removed from the ${foodType} menu!`;
       return result;

    }else{
        var error = `Sorry, we don't sell ${foodName}, try adding a new recipe!`;
        return error;
    }
  }
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
