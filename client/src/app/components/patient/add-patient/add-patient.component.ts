import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PatientService} from '../../../services/patient.service';
import {SocialInsuranceService} from '../../../services/socialInsurance.service';
import {Patient} from '../../../models/patient';
import {PatientSocialInsurance} from '../../../models/patientSocialInsurance';
import {Address} from '../../../models/Address';
import {Phone} from '../../../models/Phone';
import {SocialInsurance} from '../../../models/SocialInsurance';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  providers: [
    PatientService,
    SocialInsuranceService
  ]
})

export class AddPatientComponent implements OnInit {
  message : string;
  patient : any;
  socialInsurances : any;
  phone : Phone;
  phones : Phone[];
  address : Address;
  socialInsurance : PatientSocialInsurance;

  constructor(private _patientService: PatientService, private _socialInsuranceService: SocialInsuranceService,
              private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.message = null;
    this.phones = new Array();
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
    this.socialInsurances = new Array();
    this.socialInsurance = new PatientSocialInsurance();
    this.patient.socialInsurance = this.socialInsurance;
  }

  ngOnInit() {
    let id;
    this._activatedRoute
      .queryParams
      .subscribe(params => {
        id = params['id'];
      });
    if(id){
      this.getPatients(id)
    }
    this.getSocialInsurances();
  }

  onSubmit() {
    this.message = null;
    this.phones.push(this.phone);
    this.patient.phones = this.phones;
    this.patient.address = this.address;
    this.patient.socialInsurance = this.socialInsurance;
    this.savePatient();
  }

  savePatient() {
    this._patientService.savePatient(this.patient).subscribe(data => {
      this._router.navigate(['/list-patients']);
    });
    //console.log(this.patient);
  }

  getPatients(id){
    this._patientService.searchPatient(id).subscribe(response => {
      this.patient = response;
      //this.socialInsurance = this.patient.socialInsurance;
      console.log(this.patient.socialInsurance);
    });
  }

  getSocialInsurances(){
    this._socialInsuranceService.getSocialInsurance().subscribe(response => {
      this.socialInsurances = response;
    });
  }

}
