const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Not a valid Input, try again!');
    }
  };
  
  const getComputerChoice = () => {
   let randomNumber = Math.floor(Math.random() * 3); 
   
    switch (randomNumber) {
      case 0: 
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The Game Is Tied!';
    } if(userChoice === 'rock') {
          if(computerChoice === 'paper') {
          return 'Sorry, Computer WON!';
        } else {
          return 'Hell Yeah, You Won this Round!'
        }
    }
      if (userChoice === 'paper') {
        if(computerChoice === 'scissors') {
       return 'Damn it! Lost again!';
        } else {
       return 'Yihaa you won!';
      }
    } 
    if (userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'This SUCKS, LOST AGAIN!';
      } else {
        return 'Yeah, I WON AGAIN!';
      } 
    }
    if (userChoice === 'bomb') {
      return 'Awesome you WON! You bombed the computer!';
    } else {
      return 'Computer is broken and you won the game!';
    }
  };
  const playGame = () => {
    const userChoice = getUserChoice('AUDI');
    const computerChoice = getComputerChoice();
    
    console.log(`You threw: ${userChoice}`);
    console.log(`Computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  };
  playGame();
  
  /*
  --TESTING--
  console.log(determineWinner('paper','scissors'));
  console.log(determineWinner('paper','paper'));
  console.log(determineWinner('paper', 'rock'));
  */