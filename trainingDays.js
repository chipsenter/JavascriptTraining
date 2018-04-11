// The scope of `random` is too loose


const getRandEvent = () => {
  const random = Math.floor(Math.random() * 5);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  } else if (random === 3) {
    return 'Duathlon';
  } else if (random === 4) {
    return 'Spartan Race';
  }
};

// The scope of `days` is too tight
const getTrainingDays = () => {
	let days = Math.floor(Math.random(1) * 100);
  return days;
};

// The scope of `name` is too tight
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const winnerOfThem = (athlete1, athlete2) => {
  if(athlete1.days === athlete2.days) {
    return 'You are TIED!';
  } else if(athlete1.days > athlete2.days) {
    return `${athlete1.name} lost!, beaten by ${athlete2.name}!`;
  } else {
    return `${athlete1.name} is the Man!`;
  }
};

//const random = winnerOfThem();
const event = getRandEvent();
const heidi_days = getTrainingDays();
const name = 'Heidi';
// Define a `name` variable. Use it as an argument after updating logEvent and logTime


logEvent(name, event);
logTime(name, heidi_days);

const event2 = getRandEvent();
const warren_days = getTrainingDays();
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, warren_days);

//console.log(heidi_days)
//console.log(warren_days)
const winner = winnerOfThem({ name: 'Warren', days: warren_days},{ name: 'Heidi', days: heidi_days});
console.log('winner message:', winner)
