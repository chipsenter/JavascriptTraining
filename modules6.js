//
//When using ES6 syntax, we use export default in place of module.exports.
//

const Airplane = {};

Airplane.availableAirplanes = [
  {
  name: 'AeroJet',
	fuelCapacity: 800
},
  {name: 'SkyJet',
		fuelCapacity: 500
  }];

export default Airplane;
