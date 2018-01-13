import {Address} from './Address';
import {Phone} from './Phone';
import {SocialInsurance} from './SocialInsurance';
export class Professional {
  public _id: string;
  public name: string;
  public lastName: string;
  public birthDate: Date;
  public gender: string;
  public email: string;
  public picture: string;
  public license: string;
  public specialities: string;
  public address: Address;
  public phones: Phone;
  /*¿Como sea agrega?;*/
  /*public socialInsurance: [{
    socialInsurance: SocialInsurance,
    number: String
  }];*/
  constructor() {
    this.name = null;
    this.lastName = null;
    this.birthDate = new Date();
    this.gender = null;
    this.picture = null;
    this.license = null;
    this.specialities = null;
    /*this.address = Address; ¿Como sea agrega?;*/
    /*this.phones = Phone; ¿Como sea agrega?;*/
  }
}
