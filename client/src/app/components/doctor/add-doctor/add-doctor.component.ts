import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProfessionalService} from '../../../services/professional.service';
import {Professional} from '../../../models/Professional';
import {Address} from '../../../models/Address';
import {Phone} from '../../../models/Phone';
import {SocialInsurance} from '../../../models/SocialInsurance';
@Component({
  selector: 'app-add-doctor',
  templateUrl: 'add-doctor.component.html',
  providers: [
    ProfessionalService
  ]
})
export class AddDoctorComponent implements OnInit {
  message : string;
  professional : any;
  phone : Phone;
  phones : Phone[];
  address : Address;
  socialInsurance : SocialInsurance;
  socialInsurances : SocialInsurance[];

  constructor(private _professionalService: ProfessionalService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.message = null;
    this.phones = new Array();
    this.socialInsurances = new Array();
    this.professional = new Professional();
    this.phone = new Phone();
    this.phone.main = true;
    this.phone.type = "Celular";
    this.address = new Address();
    this.address.city = "Cordoba";
    this.address.state = "Cordoba";
    this.address.neighborhood = "Centro";
    this.address.zip = "5000";
    this.socialInsurance = new SocialInsurance();
    this.socialInsurance.name = "Swiss Medical";
    this.socialInsurance.contact = '123456';
    this.socialInsurance.email = 'swiss.medical@sw.com';
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
    this.phones.push(this.phone);
    this.professional.phones = this.phones;
    this.professional.address = this.address;
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
