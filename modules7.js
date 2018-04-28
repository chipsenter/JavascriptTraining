import Airplane from './airplane';

function displayFuelCapacity() {
  // Implement a function and use forEach syntax to grab data from your Airplane array.
  // And create a anonymous function and pass one parameter element to iterate over.
  // Finally call the function and your data will be passed to the console.
  Airplane.availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name  + ':' + element.fuelCapacity);
  })
}
displayFuelCapacity();
