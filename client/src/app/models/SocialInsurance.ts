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
  }
}
