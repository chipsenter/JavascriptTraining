const getSleepHours = (day) => {


  if(day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 10;
  } else if (day === 'thursday') {
   	return 9;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 6;
  } else if (day === 'sunday') {
    return 7;
  } else {
    return 'Invalid day input, try again pls so I can run my algorithems one more time!';
  }
}
//Testing Purpose only
//console.log(getSleepHours('sunday'));

// Implicit Return don't need the return statment wrap everything in this function with a arrow function to a output the total Hours of sleep!
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

 // Testing Purpose only
 console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
// Testing Purpose only
console.log(getIdealSleepHours());

const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  	if(actualSleepHours === idealSleepHours) {
      console.log(`You got ${idealSleepHours} hour(s) of sleep you're spot on! Keep it up`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) more sleep than you needed this week. Time to move lazy ass!`);
    } else {
      console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
    }

};
calculateSleepDept();
