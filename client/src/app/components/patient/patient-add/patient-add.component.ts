import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../models/patient';
import {Address} from '../../../models/Address';
import {Phone} from '../../../models/Phone';
import {SocialInsurance} from '../../../models/SocialInsurance';
@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  providers: [
    PatientService
  ]
})
export class PatientAddComponent implements OnInit {
  message : string;
  patient : Patient;
  phone : Phone;
  phones : Phone[];
  address : Address;
  socialInsurance : SocialInsurance;
  socialInsurances : SocialInsurance[];

  constructor(private _patientService: PatientService, private _router: Router) {
    this.message = null;
    this.phones = new Array();
    this.socialInsurances = new Array();
    this.patient = new Patient();
    /*--------------------------------------------
        PHONE
    --------------------------------------------*/
    this.phone = new Phone();
    this.phone.main = true;
    this.phone.type = "Celular";
    /*--------------------------------------------
     ADDRESS
     --------------------------------------------*/
    this.address = new Address();
    this.address.city = "Cordoba";
    this.address.state = "Cordoba";
    this.address.neighborhood = "Centro";
    this.address.zip = "5000";
    /*--------------------------------------------
     SOCIAL INSURANCE
    --------------------------------------------*/
    this.socialInsurance = new SocialInsurance();
    this.socialInsurance.name = "Swiss Medical";
    this.socialInsurance.contact = '123456';
    this.socialInsurance.email = 'swiss.medical@sw.com';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.message = null;
    this.phones.push(this.phone);
    this.patient.phones = this.phones;
    this.patient.address = this.address;
    this.socialInsurances.push(this.socialInsurance);
    this.patient.socialInsurance = this.socialInsurances;
    this.savePatient();
  }

  savePatient() {
    this._patientService.savePatient(this.patient).subscribe(data => {
      this._router.navigate(['/list-patients']);
    });
  }

}
