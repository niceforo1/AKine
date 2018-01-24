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

  professional : any;
  professionals: any;


  constructor(private _professionalService: ProfessionalService, private router: Router) {
    this.professionals = this.getProfessionals();
  }

  ngOnInit() {
  }

  getProfessionals(){
    try {
      this._professionalService.getProfessional().subscribe(response => {
        this.professionals = response;
      });
    }
    catch(e){}
  }

  deleteProfessional(id){
    try {
      let result = confirm("¡Esta seguro que desea borrar el Licenciado seleccionado?");
      if(result) {
        this._professionalService.deleteProfessional(id).subscribe(response => {
          this.professionals.splice(this.professionals.indexOf(response), 1);
        });
      }
    }
    catch(e){}
  }
}
