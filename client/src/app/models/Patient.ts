import {Address} from './Address';
import {Phone} from './Phone';
import {SocialInsurance} from './SocialInsurance';
export class Patient {
  public _id: string;
  public name: string;
  public lastName: string;
  public birthDate: Date;
  public gender: string;
  public email: string;
  public job: string;
  public picture: string;
  public currentMedication: string;
  public addictions: string;
  public pathologies: string;
  /*¿Como sea agrega?;*/
  /*public antecedents: {
    personal: String,
    family: String,
    habits: String
  };*/
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
    this.email = null;
    this.job = null;
    this.picture = null;
    this.currentMedication = null;
    this.addictions = null;
    this.pathologies = null;
    /*this.antecedents = { ¿Como sea agrega?;
      personal = null,
      family = null,
      habits = null,
    };*/
    /*this.address = Address; ¿Como sea agrega?;*/
    /*this.phones = Phone; ¿Como sea agrega?;*/
    /*this.socialInsurance = ¿Como sea agrega?;*/
  }
}
