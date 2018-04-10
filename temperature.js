// Used a let, this variable will never be changed
let kelvin = 350;
// this variable will never be changed either use let
let celsius = kelvin - 273;
let newton = celsius * (33/100);
newton = Math.floor(newton);
// this variable is as well a let, store the values from Celsius and run the calculation
let fahrenheit = celsius * (9/5) + 32;
//used the math libs to round down the decimals
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + (celsius) + ' degrees Celsius.')
console.log('The temperature is ' + (newton) + ' degrees Newton');
