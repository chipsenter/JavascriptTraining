// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],

  },
  set appetizers(appetizer) {
    this._appetizers.push(appetizer);
  },
  set mains(main) {
    this._mains.push(main);
  },
  set desserts(dessert) {
    this._desserts.push(dessert);
  },
  get appetizers() {
    return this._appetizers;
  },
  get mains() {
    return this._mains;

  },
  get desserts() {
    return this._desserts;
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },

  addDishToCourse: function(courseName, dishName, dishPrice) {
    //method dish with 2 keys
    let dish = {
      name: dishName,
      price: dishPrice,
      //tax: dishTax,
    }
    //push new data to the course array
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function(courseName) {
        let dishes = this._courses[courseName];
        let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
   },
  generateRandomMeal: function() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
    		//let totalIncTax = totalPrice.tax * 1.25;
        return `Your meal is following: Starter ${appetizer.name}, main dish: ${main.name}, and your dessert is ${dessert.name} . The price is $${totalPrice * 1.25} incl tax. `;
    }
};
menu.addDishToCourse('appetizers', 'Spring Rolls', 4.00);
menu.addDishToCourse('appetizers', 'Ceaser Salad', 3.00);
menu.addDishToCourse('appetizers', 'Chicken Soup', 4.00);
menu.addDishToCourse("appetizers", "Wings", 6.00);
menu.addDishToCourse("appetizers", "Chips", 3.00);
menu.addDishToCourse("appetizers", "Pretzel", 5.00);

menu.addDishToCourse('mains', 'Beef Brocolli', 9.00);
menu.addDishToCourse('mains', 'Sirloin Steak', 24.00);
menu.addDishToCourse('mains', 'Hamburger & Fries', 14.00);
menu.addDishToCourse("mains", "Pizza", 12.00);
menu.addDishToCourse("mains", "Burger", 9.00);
menu.addDishToCourse("mains", "Pasta", 12.00);

menu.addDishToCourse('desserts', 'Vanilla Ice Cream', 8.00);
menu.addDishToCourse('desserts', 'Cheese cake', 11.00);
menu.addDishToCourse("desserts", "Pie", 3.00);
menu.addDishToCourse("desserts", "Cake", 3.00);
menu.addDishToCourse("desserts", "Cookie", 2.00);
//call the random meal generator to create a random meal
let meal = menu.generateRandomMeal();
console.log(meal);
