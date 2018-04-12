let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    // If you forgot to use the break syntax below this code will run forever!
    // It's very important to remember to break the while loop when your done looping through data.
    break;
  }
}
