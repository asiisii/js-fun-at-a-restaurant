function nameMenuItem(name) {
  return `Delicious ${name}`;
}
function createMenuItem(name,price,type){
  var menuItem = {name, price, type};
  //console.log(menuItem);

  return menuItem;
}

function addIngredients(food, typeOfIngredients ){

  if(typeOfIngredients.includes(food)){
    return typeOfIngredients;
  }else {
    typeOfIngredients = typeOfIngredients.push(food);
    return typeOfIngredients;
  }
}

function formatPrice(formattedPrice){
  return "$"+formattedPrice;
}

function decreasePrice(decreasedPrice){
  return decreasedPrice*.90;
}

function createRecipe(title, ingredients, type){
    // console.log(title,ingredients,type);
    // var finalRecipe = {title, ingredients,type}
    return {title,ingredients,type};
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
