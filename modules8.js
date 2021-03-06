let flightRequirements = {
  requiredStaff: 4
};
function meetsStaffRequirements(availableStaff, requiredStaff) {
  if(availableStaff.length >= requiredStaff) {
    return true;
} else {
 		return false;
	}
};

let availableAirplanes = [
  {
  name: 'AeroJet',
	fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
},
  {name: 'SkyJet',
		fuelCapacity: 500,
   	availableStaff: ['pilots', 'flightAttendants']
  }];

export { availableAirplanes, flightRequirements, meetsStaffRequirements};
