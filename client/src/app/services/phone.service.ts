import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PhoneService {
  urlMain: string = 'http://localhost:5000/api/phone';

  constructor(private _http: HttpClient) {}

  getPhone() {
    return this._http.get(this.urlMain);
  }

  deletePhone(_id) {
    let url: string = `${this.urlMain}/${_id}`;
    return this._http.delete(url);
  }

  savePhone(phone) {
    return this._http.post(this.urlMain, phone);
  }

  searchPhone(id: string) {
    return this._http.get(`${this.urlMain}/${id}`);
  }

  updatePhone(phone, id) {
    return this._http.put(`${this.urlMain}/${id}`, phone);
  }
}
