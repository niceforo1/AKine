import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AddressService {
  urlMain: string = 'http://localhost:5000/api/address';

  constructor(private _http: HttpClient) {}

  getAddress() {
    return this._http.get(this.urlMain);
  }

  deleteAddress(_id) {
    let url: string = `${this.urlMain}/${_id}`;
    return this._http.delete(url);
  }

  saveAddress(address) {
    return this._http.post(this.urlMain, address);
  }

  searchAddress(id: string) {
    return this._http.get(`${this.urlMain}/${id}`);
  }

  updateAddress(address, id) {
    return this._http.put(`${this.urlMain}/${id}`, address);
  }
}
