import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Patient} from "../../../models/patient";
import {PatientService} from "../../../services/patient.service";

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  providers: [
    PatientService
  ]
})
export class PatientAddComponent implements OnInit {
  patient : Patient;

  constructor(private _patientService: PatientService, private _router: Router) {
    this.patient = new Patient();
  }

  ngOnInit() {
  }

  onSubmit() {
    this._patientService.savePatient(this.patient).subscribe(data => {
      this._router.navigate(['/patient']);
    });
  }

}
