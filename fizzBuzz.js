// concatenate from variable data
let str1 = 'odd_var';
let str2 = 'even_var';
let str3 = 'nailed_it_var';

// concatenate from an Array
let arr = ['odd_array', 'even_array', 'nailed_it_again_array'];

// concatenate form an Object
let obj = {
  name1: 'odd_object',
  name2: 'even_object',
  name3: 'nailed_it_in_from_an_object',
  name4: 'Definitely EVEN'
}

for (let i=1; i < 21; i++){
  if(i === 15){
    console.log('FizzBuzz ' + arr[2] + ' Iteration ' + i);
  }
  else if(i % 2 == 0){
    console.log(obj.name4 + ' ' + i);
  }
  else if(i % 3 == 0){
    console.log('Fizz ' + obj.name1);
  } 
  else if(i % 5 == 0){
    console.log('Buzz ' + str1);
  } 
  else {
    console.log(i);
  }
}