import {Professional} from './Professional';
import {Patient} from './Patient';
export class MaterialRecord {
  public _id: string;
  public professional: Professional;
  public patient: Patient;
  public date: Date;
  public medicalRecordType: string;
  public weight: string;
  public height: string;
  public bloodPressure: string;
  public physicalExam: string;
  public complementaryStudies: string;
  public observations: string;
  public icd10: string;
  public personalNotes: string;
  constructor() {
  }
}
