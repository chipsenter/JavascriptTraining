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
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._name = name;
    this._remainingVacationDays = 20;
    this._certifications = certifications;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  get certifications() {
    return this._certifications;
  }
  takeVacationDays() {

  }
  addCertification() {

  }
}
const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics'])
