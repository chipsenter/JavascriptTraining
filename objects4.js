let person = {
  name: 'Johan',
  age: 38,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};
// Add a new property to the object (hobbies)
person.hobbies = ['Dirtbiking', 'Crossfit'];

let day = 'Monday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}


// Instead of dot notation we use bracket notation se example below.
console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person['hobbies']);
