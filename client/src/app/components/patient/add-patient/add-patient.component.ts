import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/* Services */
import { PatientService } from '../../../services/patient.service';
import { SocialInsuranceService } from '../../../services/socialInsurance.service';
/* Models */
import { Patient } from '../../../models/patient';
import { PatientSocialInsurance } from '../../../models/patientSocialInsurance';
import { Address } from '../../../models/Address';
import { Phone } from '../../../models/Phone';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  providers: [
    PatientService,
    SocialInsuranceService
  ]
})

export class AddPatientComponent implements OnInit {
  action : string;
  title : string;
  message : string;
  patient : any;
  socialInsurances : any;
  phone : Phone;
  phones : Phone[];
  address : Address;
  socialInsurance : PatientSocialInsurance;

  constructor(private _patientService: PatientService, private _socialInsuranceService: SocialInsuranceService,
              private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.action = 'Guardar';
    this.title = 'Agregar paciente';
    this.message = null;
    this.phones = new Array();
    this.patient = new Patient();
    this.patient.socialInsurance = new PatientSocialInsurance();
    /*--------------------------------------------
        PHONE
    --------------------------------------------*/
    this.phone = new Phone();
    this.phone.main = true;
    this.phone.type = 'Celular';
    /*--------------------------------------------
     ADDRESS
     --------------------------------------------*/
    this.address = new Address();
    this.address.city = 'Cordoba';
    this.address.state = 'Cordoba';
    this.address.neighborhood = 'Centro';
    this.address.zip = '5000';
    /*--------------------------------------------
     SOCIAL INSURANCE
    --------------------------------------------*/
    this.socialInsurances = new Array();
    this.socialInsurance = new PatientSocialInsurance();
  }

  ngOnInit() {
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
    this._patientService.savePatient(this.patient).subscribe(data => {
      this._router.navigate(['/list-patients']);
    });
  }

  getSocialInsurances(){
    this._socialInsuranceService.getSocialInsurance().subscribe(response => {
      this.socialInsurances = response;
    });
  }

}
