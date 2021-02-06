function takeOrder(orderNum, deliveryOrders){
  // console.log(orderNum,deliveryOrders);
  // deliveryOrders = deliveryOrders.push(orderNum);
  // return deliveryOrders;
  if (deliveryOrders.length<3){
    deliveryOrders = deliveryOrders.push(orderNum);
    return deliveryOrders;
  }else{
    return deliveryOrders
  }
}

function refundOrder(orderNum, deliveryOrders){
  //part 2 pass
  // console.log(orderNum, deliveryOrders);
  // if (orderNum  === 1){
  //   deliveryOrders.splice(0,1);
  //   // console.log("test"+deliveryOrders);
  //   return deliveryOrders;
  // }else {
  //   // console.log("test");
  //   return deliveryOrders;
  // }

  //part 3
  for (var i = 0; i < deliveryOrders.length; i++){
    if (orderNum  === deliveryOrders[i].orderNumber){
      deliveryOrders.splice(i,1);
      return deliveryOrders;
    }
  }
}

function listItems(deliveryOrders){
  // console.log(deliveryOrders);
  // console.log(deliveryOrders[1].item);
  var items = "";
  for (var i = 0; i < deliveryOrders.length; i++){
    //console.log("deliOrders =>"+deliveryOrders[i].item);
    // var items = " ";
    items += deliveryOrders[i].item+ ", ";
  }
  var test = items.slice(0,-2);
//console.log(items);
  return test;
}

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i< deliveryOrders.length; i++){
    if (deliveryOrders[i].item.includes(item)
    || deliveryOrders[i+1].item.includes(item)){
    //  console.log("true");
      return true;
    }
  //  console.log("false");
    return false;
  }
}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
