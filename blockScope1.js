const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
};
visibleLightWaves();
//This will throw a Referance Error (undefined), due to the fact it's not a Global variable
console.log(lightWaves);
