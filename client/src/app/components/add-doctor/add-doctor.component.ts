import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Professional} from "../../models/professional";
import {ProfessionalService} from "../../services/professional.service";

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  providers: [
    ProfessionalService
  ]
})
export class AddDoctorComponent implements OnInit {
  professional : Professional;

  constructor(private _professionalService: ProfessionalService, private _router: Router) {
    this.professional = new Professional();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.professional);
    /*this._professionalService.saveProfessional(this.professional).subscribe(data => {
      console.log(professional);
      //this._router.navigate(['/professional']);
    });*/
  }

}
