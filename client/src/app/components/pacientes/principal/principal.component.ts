import { Component, OnInit } from '@angular/core';
import {PacientesService} from "../../../services/pacientes.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  providers:[
    PacientesService
  ]
})
export class PrincipalComponent implements OnInit {
  public listaPacientes:any;

  constructor(private _pacienteService: PacientesService) {
    this.listaPacientes = this.cargarArticulos();
  }

  ngOnInit() {
  }

  cargarArticulos(){
    this._pacienteService.getPacientes().subscribe(data => this.listaPacientes = data);
  }
  delete(_id) {
    this._pacienteService.deletePaciente(_id).subscribe(data => this.listaPacientes = data);
  }
}
