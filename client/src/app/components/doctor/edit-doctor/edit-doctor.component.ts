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
  messageClass : string;
  professional : any;
  phone : Phone;
  constructor(private _professionalService: ProfessionalService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.action = "Editar";
    this.title = "Editar Licenciado";
    this.message = null;
    this.messageClass = null;
    this.professional = new Professional();
    this.professional.phones = new Phone();
    this.professional.address = new Address();
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
    try {
      this._professionalService.updateProfessional(this.professional, this.professional._id).subscribe(data => {
        this.messageClass = 'alert alert-success alert-dismissible';
        this.message = 'El profesional fue guardado correctamente.';
        setTimeout(() => {
          this._router.navigate(['/list-doctors']);
        }, 2000);
      });
    }
    catch (e){}
  }
}
