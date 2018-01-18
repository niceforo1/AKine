import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Professional} from "../../../models/Professional";
import {ProfessionalService} from "../../services/professional.service";

@Component({
  selector: 'list-doctors',
  templateUrl: './list-doctors.component.html',
  providers: [
    ProfessionalService
  ]
})
export class ListDoctorsComponent implements OnInit {
  professional : Professional;
  professionals: Professional[];

  constructor(private _professionalService: ProfessionalService, private router: Router) {
    this.professionals = this.getProfessionals();
  }

  getProfessionals(){
     this._professionalService.getProfessional().subscribe(response => {
       console.log(response);
       this.professionals = response;
    });
  }

  ngOnInit() {


  }
