import {Phone} from './Phone';
import {Address} from './Address';
import {SocialInsurance} from './SocialInsurance';

export class Professional {
  public _id: string;
  public id: string;
  public name: string;
  public lastName: string;
  public birthDate: Date;
  public gender: string;
  public email: string;
  public picture: string;

  public license: string;
  public specialities: string;
  public address: Address;
  public phones : Phone;
  public socialInsurance : SocialInsurance[];
  constructor() {
  }
}
