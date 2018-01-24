import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
/* Services */
import {PatientService} from '../../../services/patient.service';
import {SocialInsuranceService} from '../../../services/socialInsurance.service';
/* Models */
import {Patient} from '../../../models/patient';
import {PatientSocialInsurance} from '../../../models/patientSocialInsurance';
import {Address} from '../../../models/Address';
import {Phone} from '../../../models/Phone';

@Component({
  selector: 'app-edit-patient',
  templateUrl: '../add-patient/add-patient.component.html',
  providers: [
    PatientService,
    SocialInsuranceService
  ]
})

export class EditPatientComponent implements OnInit {
  action: string;
  title: string;
  message: string;
  messageClass: string;
  patient: any;
  socialInsurances: any;
  socialInsurance: PatientSocialInsurance;


  constructor(private _patientService: PatientService, private _socialInsuranceService: SocialInsuranceService,
              private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.action = 'Editar';
    this.title = 'Editar Paciente';
    this.message = null;
    this.messageClass = null;
    this.patient = new Patient();
    this.patient.socialInsurance = new PatientSocialInsurance();
    this.patient.phones = new Phone();
    this.patient.address = new Address();
    this.socialInsurances = new Array();
    this.socialInsurance = new PatientSocialInsurance();
  }

  ngOnInit() {
    this.getSocialInsurances();
    this.getPatients();
  }

  onSubmit() {
    this.message = null;
    this.savePatient();
  }

  savePatient() {
    try {
      this._patientService.updatePatient(this.patient, this.patient._id).subscribe(data => {
        this.messageClass = 'alert alert-success alert-dismissible';
        this.message = 'El paciente fue guardado correctamente.';
        setTimeout(() => {
          this._router.navigate(['/list-patients']);
        }, 2000);
      });
    }
    catch (e){}
  }

  getPatients(){
    try {
        this._activatedRoute.params.forEach((params:Params)=>{
          let id = params['id'];
          this._patientService.searchPatient(id).subscribe(response => {
            this.patient = response;
          });
        });
    }
    catch (e) {
    };
  }

  getSocialInsurances() {
    try {
      this._socialInsuranceService.getSocialInsurance().subscribe(response => {
        this.socialInsurances = response;
      });
    }
    catch (e) {
    };
  }
}
