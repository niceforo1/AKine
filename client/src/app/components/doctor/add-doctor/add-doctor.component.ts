import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/* Services */
import { ProfessionalService} from '../../../services/professional.service';
/* Models */
import { Professional } from '../../../models/Professional';
import { Address } from '../../../models/Address';
import { Phone } from '../../../models/Phone';
import { SocialInsurance } from '../../../models/SocialInsurance';

@Component({
  selector: 'app-add-doctor',
  templateUrl: 'add-doctor.component.html',
  providers: [
    ProfessionalService
  ]
})

export class AddDoctorComponent implements OnInit {
  action : string;
  title: string;
  message : string;
  professional : any;
  phone : Phone;
  //phones : Phone[];
  address : Address;
  socialInsurance : SocialInsurance;
  socialInsurances : SocialInsurance[];


  constructor(private _professionalService: ProfessionalService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.action = "Guardar";
    this.title = "Agregar Licenciado";
    this.message = null;
    //this.phones = new Array();
    this.socialInsurances = new Array();
    this.professional = new Professional();
    /*PHONE*/
    this.professional.phones = new Phone();
    this.professional.phones.main = true;
    this.professional.phones.type = "Celular";
    /*ADDRESS*/
    this.professional.address = new Address();
    this.professional.address.city = "Cordoba";
    this.professional.address.state = "Cordoba";
    this.professional.address.neighborhood = "Centro";
    this.professional.address.zip = "5000";
    /*SOCIAL INSURANCE*/
    this.professional.socialInsurance = new SocialInsurance();
    this.professional.socialInsurance.name = "Swiss Medical";
    this.professional.socialInsurance.contact = '123456';
    this.professional.socialInsurance.email = 'swiss.medical@sw.com';
  }

  ngOnInit() {
    let id;
    this._activatedRoute
       .queryParams
       .subscribe(params => {
           id = params['id'];
       });
    if(id){
        this.getProfessional(id)
    }
  }

  onSubmit() {
    this.message = null;
    //this.phones.push(this.phone);
    //this.professional.phones = this.phones;
    //this.professional.address = this.address;
    this.socialInsurances.push(this.socialInsurance);
    this.professional.socialInsurance = this.socialInsurances;
    this.saveProfessional();
  }

  saveProfessional() {
    this._professionalService.getProfessionalByDoc(this.professional.id).subscribe(data => {
      if(data){
        this.message = 'Ya se encuentra registrado un doctor con el documento ingresado.'
      }else{
        this._professionalService.saveProfessional(this.professional).subscribe(data => {
          this._router.navigate(['/list-doctors']);
        });
      }
    })
  }

  getProfessional(id){
    this._professionalService.searchProfessional(id).subscribe(response => {
      this.professional = response;
    });
  }

}
