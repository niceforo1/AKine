import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
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
  //phone : Phone;
  //phones : Phone[];
  //address : Address;
  socialInsurance: PatientSocialInsurance;


  constructor(private _patientService: PatientService, private _socialInsuranceService: SocialInsuranceService,
              private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.action = 'Editar';
    this.title = 'Editar Paciente';
    this.message = null;
    this.messageClass = null;
    this.patient = new Patient();
    this.patient.socialInsurance = new PatientSocialInsurance();
    /*--------------------------------------------
    PHONE
    --------------------------------------------*/
    this.patient.phones = new Phone();
    this.patient.phones.main = true;
    this.patient.phones.type = 'Celular';
    /*--------------------------------------------
     ADDRESS
     --------------------------------------------*/
    this.patient.address = new Address();
    this.patient.address.city = 'Cordoba';
    this.patient.address.state = 'Cordoba';
    this.patient.address.neighborhood = 'Centro';
    this.patient.address.zip = '5000';
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
    if (id) {
      this.getPatients(id);
    }
    this.getSocialInsurances();
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

  getPatients(id) {
    try {
      this._patientService.searchPatient(id).subscribe(response => {
        this.patient = response;
      });
    }
    catch (e) {
    }
    ;
  }

  getSocialInsurances() {
    try {
      this._socialInsuranceService.getSocialInsurance().subscribe(response => {
        this.socialInsurances = response;
      });
    }
    catch (e) {
    }
  }
}
