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
    this._professionalService.getProfessional().subscribe(response => {
      this.professionals = response;
    });
  }

  edit(id){
    this.router.navigate(['/add-doctor'],
         {queryParams: {id: id}});
  }


}
