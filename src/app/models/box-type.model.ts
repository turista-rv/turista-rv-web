export interface BoxType {
  id?: string;
  name: string;
  description: string;
  active: boolean;
  typeOfCharge: TypeOfCharge;
}

export enum TypeOfCharge {
  BOOKING = 'BOOKING',
  PERSON = 'PERSON',
}
