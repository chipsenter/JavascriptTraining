let userName = '';

userName ? console.log("Hello " + userName) :
	console.log("Hello");

let userQuestion = '';
	console.log('Am I Rich?' + userName);

let randomNumber = Math.floor(Math.random() * 15);
	console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it!';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good!';
    break;
  case 8:
    eightBall = 'You will not be rich!';
    break;
  case 9:
    eightBall = 'You will be loaded with money!';
    break;
  case 10:
    eightBall = 'You are scared of the dark whooz!';
    break;
  case 11:
    eightBall = 'Holy smokes you are fit!';
    break;
  case 12:
    eightBall = 'Stop eating! You will soon roll around fatty!';
    break;
  default:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`Eight Ball's answer ${eightBall}`);
