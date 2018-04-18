class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

//Sub class inheritants from Parent HospitalEmployee
class Doctor {
  constructor(){
   this._name = name;
   this._insurance = insurance;
   this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  get insurance() {
    return this._insurance;
  }
  takeVacationDays() {

  }
}

//Sub class inheritants from Parent HospitalEmployee
class Nurse {
  constructor() {
    this._name = name;
    this._certifications = certifications;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationsDays(){

  }
  addCertification(){

  }
}
