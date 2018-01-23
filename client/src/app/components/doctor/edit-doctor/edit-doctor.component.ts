import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/* Services */
import { ProfessionalService } from '../../../services/professional.service';
/* Models */
import { Professional } from '../../../models/Professional';
import { Address } from '../../../models/Address';
import { Phone } from '../../../models/Phone';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: '../add-doctor/add-doctor.component.html',
  providers: [
    ProfessionalService
  ]
})

export class EditDoctorComponent implements OnInit {
  action : string;
  title: string;
  message : string;
  professional : any;
  phone : Phone;
  //phones : Phone[];
  //address : Address;


  constructor(private _professionalService: ProfessionalService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.action = "Editar";
    this.title = "Editar Licenciado";
    this.message = null;
    //this.phones = new Array();
    this.professional = new Professional();
    /*--------------------------------------------
    PHONE
    --------------------------------------------*/
    this.professional.phones = new Phone();
    this.professional.phone.main = true;
    this.professional.phone.type = 'Celular';
    /*--------------------------------------------
     ADDRESS
     --------------------------------------------*/
    this.professional.address = new Address();
    this.professional.address.city = 'Cordoba';
    this.professional.address.state = 'Cordoba';
    this.professional.address.neighborhood = 'Centro';
    this.professional.address.zip = '5000';
  }

  ngOnInit() {
    let id;
    this._activatedRoute
      .queryParams
      .subscribe(params => {
        id = params['id'];
      });
    if(id){
      this.getProfessionals(id)
    }
  }

  onSubmit() {
    this.message = null;
    //this.phones.push(this.phone);
    //this.professional.phones = this.phones;
    //this.professional.address = this.address;
    this.saveProfessional();
  }

  saveProfessional() {
    this._professionalService.updateProfessional(this.professional, this.professional._id).subscribe(data => {
      this._router.navigate(['/list-doctors']);
    });
  }

  getProfessionals(id){
    this._professionalService.searchProfessional(id).subscribe(response => {
      this.professional = response;
    });
  }

}
