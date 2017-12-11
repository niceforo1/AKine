import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PacientesService} from "../../../services/pacientes.service";
import {Paciente} from "../../../models/Paciente";
import {ObraSocial} from "../../../models/ObraSocial";

@Component({
  selector: 'app-editar-paciente',
  templateUrl: '../agregar-paciente/agregar-paciente.component.html',
  providers:[
    PacientesService
  ]
})
export class EditarPacienteComponent implements OnInit {
  paciente: Paciente;

  constructor(private _route: ActivatedRoute, private _router: Router, private _pacienteService: PacientesService) {
    this.paciente = new Paciente();
    this.paciente.obraSocial = new ObraSocial();
  }

  ngOnInit() {
    this.buscarPaciente();
  }

  buscarPaciente(){
    this._route.params.forEach((params: Params) => {
      this._pacienteService.buscarPaciente(params['id']).subscribe(pac=>{
        this.paciente = <Paciente>pac;
      });
    });
  }

  onSubmit() {
    this._pacienteService.actualizarPaciente(this.paciente, this.paciente._id).subscribe(pac=> {
      this._router.navigate(['/pacientes']);
    })
  }
}
