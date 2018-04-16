//Person Object
let person = {
name: 'Johan',
age: 40,
weekendAlarm: 'No alarms needed',
weekAlarm: 'Alarm set to 7AM',
// Use Interpolation syntax to print to console
// target the name property by using this.name 
sayHello: function() {
  return `Hello, my name is ${this.name}`;
},

sayGoodbye() {
  return 'Goodbye!';
}

};

console.log(person.sayHello());

person.hobbies = ['Basketball', 'Coaching'];
person.hobbies = ['Basketball'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
alarm = 'weekendAlarm';
} else {
alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(person.sayGoodbye());
