import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
/* Services */
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  providers: [
    PatientService
  ]
})
export class ListPatientComponent implements OnInit {

  patient: any;
  patients: any;

  constructor(private _patientService: PatientService, private router: Router) {
    this.patients = this.getPatients();
  }

  ngOnInit() {
  }

  getPatients() {
    try {
      this._patientService.getPatient().subscribe(response => {
        this.patients = response;
      });
    }
    catch (e) {}
  }

  deletePatient(id){
    try {
      let result = confirm("¡Esta seguro que desea borrar el Paciente seleccionado?");
      if(result) {
        this._patientService.deletePatient(id).subscribe(response => {        
          this.patients.splice(this.patients.indexOf(response), 1);
        });
      }
    }
    catch(e){}
  }

}
