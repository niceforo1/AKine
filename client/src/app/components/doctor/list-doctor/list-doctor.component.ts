import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* Services */
import { ProfessionalService } from '../../../services/professional.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  providers: [
    ProfessionalService
  ]
})
export class ListDoctorComponent implements OnInit {
  message : string;
  messageClass : string;
  professional : any;
  professionals: any;

  constructor(private _professionalService: ProfessionalService, private router: Router) {
    this.professionals = this.getProfessionals();
  }

  ngOnInit() {
  }

  getProfessionals(){
    this._professionalService.getProfessional().subscribe(response => {
      this.professionals = response;
    },
    err => {
      this.messageClass = 'alert alert-danger alert-dismissible';
      this.message = `${err.error}`
      console.log(`${err.error}`)
    });
  }

  deleteProfessional(id){
    let result = confirm("¡Esta seguro que desea borrar el Licenciado seleccionado?");
    if(result) {
      this._professionalService.deleteProfessional(id).subscribe(response => {
        this.professionals.splice(this.professionals.indexOf(response), 1);
      },
      err => {
        this.messageClass = 'alert alert-danger alert-dismissible';
        this.message = `${err.error}`
        console.log(`${err.error}`)
      });
    }
  }
}
