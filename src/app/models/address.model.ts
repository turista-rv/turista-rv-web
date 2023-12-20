export interface Address {
  id?: string;
  street: string;
  num: number;
  district: string;
  country: string;
  city: string;
  state: string;
  zipCode: number;
  complement?: string;
  reference?: string;
}
