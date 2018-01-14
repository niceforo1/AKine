import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PacientesService {
  urlPrincipal: string = 'http://localhost:5000/api/pacientes';

  constructor(private _http: HttpClient) {
  }

  getPacientes() {
    return this._http.get(this.urlPrincipal);
  }

  deletePaciente(_id) {
    let url: string = `${this.urlPrincipal}/${_id}`;
    return this._http.delete(url);
  }

  guardarPaciente(paciente) {
    return this._http.post(this.urlPrincipal, paciente);
  }
  buscarPaciente(id: string) {
    return this._http.get(`${this.urlPrincipal}/${id}`);
  }
  actualizarPaciente(paciente, id) {
    return this._http.put(`${this.urlPrincipal}/${id}`,paciente);
  }
}
