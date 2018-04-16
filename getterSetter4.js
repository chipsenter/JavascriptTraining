
let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(newAge) {
  	if (typeof newAge === 'number') {
      this._age = newAge;
      console.log(`${newAge} is valid input!`);
    } else {
      return 'Invalid input';
    }
},
  get age() {
    console.log(`${this._name} is ${this._age} years old`);
    return this._age;
  }

};
person.age = 39;
console.log(person.age);
person.age = 'Thirty-nine';

//const newAge = person._age;
