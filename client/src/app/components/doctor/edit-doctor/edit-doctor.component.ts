import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    /*this.professional.phone.main = true;
    this.professional.phone.type = 'Celular';*/
    
    
    /*--------------------------------------------
     ADDRESS
     --------------------------------------------*/
    
    this.professional.address = new Address();
    /*this.professional.address.city = 'Cordoba';
    this.professional.address.state = 'Cordoba';
    this.professional.address.neighborhood = 'Centro';
    this.professional.address.zip = '5000';
    */
    
  }

  ngOnInit() {
    this.getProfessional();
  }

  
  getProfessional(){
    this._activatedRoute.params.forEach((params:Params)=>{
      let id = params['id'];
      this._professionalService.searchProfessional(id).subscribe(response => {
        this.professional = response;
      });
    });
  }

  
  onSubmit() {
    this.message = null;
    this.saveProfessional();
  }

  saveProfessional() {
    this._professionalService.updateProfessional(this.professional, this.professional._id).subscribe(data => {
      setTimeout(()=>{
          this._router.navigate(['/list-doctors']);
        }, 3000);
    });
  }
  

  /*getProfessionals(id){
    this._professionalService.searchProfessional(id).subscribe(response => {
      this.professional = response;
    });
  }*/

}
