let orderCount = 10;

const takeOrder = (topping, crustType) => {
  console.log('Order:' + crustType +' pizza topped with ' + topping);
  orderCount++;
}

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;

}

takeOrder("bacon", "thin crust");
takeOrder("tomatoes", "thick crust");
takeOrder("Cheeze", "doughy crust");
console.log(getSubTotal(orderCount));
