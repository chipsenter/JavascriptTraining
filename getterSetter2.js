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
}

};
console.log(person._age);
