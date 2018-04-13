let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
// Below map iterator will go into the Array and pick the 0 index(first letter) from each string and return a word!
let secretMessage = animals.map(function(animals) {
  return animals[0];
});

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
