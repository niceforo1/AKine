import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfessionalService {
  urlMain: string = 'http://localhost:5000/api/professional';

  constructor(private _http: HttpClient) {}

  getProfessional() {
    return this._http.get(this.urlMain);
  }

  deleteProfessional(_id) {
    let url: string = `${this.urlMain}/${_id}`;
    return this._http.delete(url);
  }

  saveProfessional(professional) {
    return this._http.post(this.urlMain, professional);
  }

  searchProfessional(id: string) {
    return this._http.get(`${this.urlMain}/${id}`);
  }

  updateProfessional(professional, id) {
    return this._http.put(`${this.urlMain}/${id}`, professional);
  }
}
