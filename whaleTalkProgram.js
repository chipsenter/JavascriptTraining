// Output how many vowels this string has Test functions Output the outcome!

const input = 'The squeaky wheel gets the grease.';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
	for(let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
      if (input[inputIndex] === vowels[vowelsIndex]) {
       resultArray.push(input[inputIndex]);
      }
  	}

    if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
      resultArray.push(input[inputIndex]);
      }
 	  }
		console.log('The Whale says : ' + resultArray.join('').toUpperCase() + '!');
