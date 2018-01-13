export class Address {
  public _id: string;
  public street: string;
  public city: string;
  public state: string;
  public neighborhood: string;
  public zip: string;
  constructor() {
    this.street = '';
    this.city = '';
    this.state = '';
    this.neighborhood = '';
    this.zip = '';
  }
}
