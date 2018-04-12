//Inmutable Variable that we can reassign new values to
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
// Mutable variable , we can't change this Array!
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('caramel');
console.log(condiments);
condiments = ['Hamburgers'];
console.log(condiments);
utensils.pop();
console.log(utensils);
utensils = ["guns"];
