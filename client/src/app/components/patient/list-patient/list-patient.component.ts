import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* Services */
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  providers: [
    PatientService
  ]
})
export class ListPatientComponent implements OnInit {

  patient : any;
  patients: any;

  constructor(private _patientService: PatientService, private router: Router) {
    this.patients = this.getPatients();
  }

  ngOnInit() {
  }

  getPatients(){
    this._patientService.getPatient().subscribe(response => {
      this.patients = response;
    });
  }

  edit(id){
    this.router.navigate(['/edit-patient'],
      {queryParams: {id: id}});
  }

}
