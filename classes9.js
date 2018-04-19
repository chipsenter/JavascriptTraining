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

  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}
class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }
  get insurance() {
    return this._insurance;
  }
 addInsurance(newInsurances) {
   this.insurance.push(newInsurances);
 }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}
const doctorJohan = new Doctor('Johan',['Brain Insurance']);
doctorJohan.takeVacationDays(10);
console.log(doctorJohan.remainingVacationDays);
doctorJohan.addInsurance('Brain Trauma Insurance');
//console.log(doctorJohan.insurance);
console.log(doctorJohan.name);
doctorJohan.addInsurance('Heart disease Insurance');
console.log(doctorJohan.insurance);

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
