let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//Removes the first item in the Array list by using the .shift() method
groceryList.shift();
//Adds a new item to the first index of the Array list by using unshift() method
groceryList.unshift('popcorn');
//Slices the list from index choosen index position to last index position see example below, lets say
//we want to pick bikes and trucks.
// let testArray = ['cars','bikes','trucks','dirtbikes'];
// console.log(testArray.slice(1,3);
console.log(groceryList.slice(1,4));
console.log(groceryList);
