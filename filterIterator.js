let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
// Filter method will execute and return Truthy based conditions
// Normal function call below.
let smallNumbers = randomNumbers.filter(function(number) {
  return number < 250;
});

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Same function but used as Arrow function syntax instead
let longFavoriteWords = favoriteWords.filter(word =>
  word.length > 7);

///Testing new Methods is printing correct!
console.log(longFavoriteWords);
console.log(smallNumbers);
