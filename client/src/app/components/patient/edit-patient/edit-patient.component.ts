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
  selector: 'app-edit-patient',
  templateUrl: '../add-patient/add-patient.component.html',
  providers: [
    PatientService,
    SocialInsuranceService
  ]
})

export class EditPatientComponent implements OnInit {
  message : string;
  patient : any;
  socialInsurances : any;
  phone : Phone;
  phones : Phone[];
  address : Address;
  socialInsurance : PatientSocialInsurance;
  action : string;
  title: string;

  constructor(private _patientService: PatientService, private _socialInsuranceService: SocialInsuranceService,
              private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.action = "Editar";
    this.title = "Editar paciente";
    this.message = null;
    this.phones = new Array();
    this.patient = new Patient();
    this.patient.socialInsurance = new PatientSocialInsurance();
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
    this.savePatient();
  }

  savePatient() {
    this._patientService.updatePatient(this.patient, this.patient._id).subscribe(data => {
      this._router.navigate(['/list-patients']);
    });
  }

  getPatients(id){
    this._patientService.searchPatient(id).subscribe(response => {
      this.patient = response;
    });
  }

  getSocialInsurances(){
    this._socialInsuranceService.getSocialInsurance().subscribe(response => {
      this.socialInsurances = response;
    });
  }

}
