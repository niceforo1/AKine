import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PatientService {
  urlMain: string = 'http://localhost:5000/api/patients';

  constructor(private _http: HttpClient) {}

  getPatient() {
    return this._http.get(this.urlMain);
  }

  deletePatient(_id) {
    let url: string = `${this.urlMain}/${_id}`;
    return this._http.delete(url);
  }

  savePatient(patient) {
    return this._http.post(this.urlMain, patient);
  }

  searchPatient(id: string) {
    return this._http.get(`${this.urlMain}/${id}`);
  }

  updatePatient(patient, id) {
    return this._http.put(`${this.urlMain}/${id}`, patient);
  }
}
