import {ObraSocial} from "./ObraSocial";

export class Paciente {
  public _id:string;
  public nroDocumento: string;
  public nombre: string;
  public apellido: string;
  public fechaNacimiento: Date;
  public telefono: string;
  public celular: string;
  public mail: string;
  //direccion: [direccionSchema],
  public sexo: string;
  public obraSocial: ObraSocial;

  constructor(){
  }
}
