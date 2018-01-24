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
  messageClass : string;
  message : string;
  professional : any;
  phone : Phone;
  address : Address;
  socialInsurance : SocialInsurance;
  socialInsurances : SocialInsurance[];


  constructor(private _professionalService: ProfessionalService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.action = "Guardar";
    this.title = "Agregar Licenciado";
    this.message = null;
    this.messageClass = null;
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

  }

  onSubmit() {
    this.message = null;
    this.socialInsurances.push(this.socialInsurance);
    this.professional.socialInsurance = this.socialInsurances;
    this.saveProfessional();
  }

  saveProfessional() {
    this._professionalService.getProfessionalByDoc(this.professional.id).subscribe(data => {
      if(data){
        this.messageClass = 'alert alert-danger alert-dismissible';
        this.message = 'Ya se encuentra registrado un doctor con el documento ingresado.'
      }else{
        this._professionalService.saveProfessional(this.professional).subscribe(data => {
          this.messageClass = 'alert alert-success alert-dismissible';
          this.message = 'El profesional fue guardado correctamente.';
          setTimeout(()=>{
              this._router.navigate(['/list-doctors']);
            }, 2000);
        });
      }
    })
  }
}
