let orderCount = 5;

const takeOrder = (topping, crustType) => {
  console.log('Order:' + crustType +' pizza topped with ' + topping);
  orderCount++;
}

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;

}

const getTax = (orderCount) => {
  getSubTotal(orderCount) * 0.06;
  	return getTax;
}

const getTotal = () => {
 return getSubTotal(orderCount) + getTax(orderCount);
}

takeOrder("bacon", "thin crust");
takeOrder("tomatoes", "thick crust");
takeOrder("Cheeze", "doughy crust");
console.log(getSubTotal(orderCount));
console.log(getTotal());
