import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SocialInsuranceService {
  urlMain: string = 'http://localhost:5000/api/socialInsurance';

  constructor(private _http: HttpClient) {}

  getSocialInsurance() {
    return this._http.get(this.urlMain);
  }

  deleteSocialInsurance(_id) {
    let url: string = `${this.urlMain}/${_id}`;
    return this._http.delete(url);
  }

  saveSocialInsurance(socialInsurance) {
    return this._http.post(this.urlMain, socialInsurance);
  }

  searchSocialInsurance(id: string) {
    return this._http.get(`${this.urlMain}/${id}`);
  }

  updateSocialInsurance(socialInsurance, id) {
    return this._http.put(`${this.urlMain}/${id}`, socialInsurance);
  }
}
