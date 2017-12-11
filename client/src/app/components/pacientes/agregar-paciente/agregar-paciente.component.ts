import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Paciente} from "../../../models/Paciente";
import {ObraSocial} from "../../../models/ObraSocial";
import {PacientesService} from "../../../services/pacientes.service";

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  providers: [
    PacientesService
  ]
})
export class AgregarPacienteComponent implements OnInit {
  paciente: Paciente;

  constructor(private _pacienteService: PacientesService, private _router: Router) {
    this.paciente = new Paciente();
    this.paciente.obraSocial = new ObraSocial();
  }

  ngOnInit() {
  }

  onSubmit() {
    this._pacienteService.guardarPaciente(this.paciente).subscribe(data => {
      this._router.navigate(['/pacientes']);
    });
  }
}
