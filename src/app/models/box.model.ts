import { Booking } from './booking.model';
import { BoxType } from './box-type.model';
import { Camping } from './camping.model';

export interface Box {
  id?: string;
  name: string;
  camping: Camping;
  boxType: BoxType;
  convenience: string;
  price: string;
  active: boolean;
  booking: Booking;
}
