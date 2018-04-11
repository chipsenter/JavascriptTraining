const starCount = () => {
  let i = 5;
  console.log(i);
  for(let i = 0; i < 12; i++) {
    console.log(i);
  }
};
starCount();
// Will log a Reference Error! we're outside the scope!
console.log(i);
