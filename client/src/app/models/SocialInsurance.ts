import {Address} from './Address';
import {Phone} from './Phone';
export class SocialInsurance {
  public _id: string;
  public name: string;
  public contact: string;
  public email: string;
  public address: Address;
  public phones: Phone;
  constructor() {
    this.name = '';
    this.contact = '';
    this.email = '';
    /*this.address = Address; ¿Como sea agrega?;*/
    /*this.phones = Phone; ¿Como sea agrega?;*/
  }
}
