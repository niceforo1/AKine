import {Address} from './Address';
import {Phone} from './Phone';
import {PatientSocialInsurance} from './patientSocialInsurance';

export class Patient {
  public _id: string;
  public id: string;
  public name: string;
  public lastName: string;
  public birthDate: Date;
  public gender: string;
  public email: string;
  public picture: string;

  public job: string;
  public currentMedication: string;
  public addictions: string;
  public pathologies: string;
  public antecedents: {
    personal: string,
    family: string,
    habits: string
  };
  public address: Address;
  public phones : Phone;
  public socialInsurance : PatientSocialInsurance;
  constructor() {
  }
}
