import { Booking } from './booking.model';
import { BoxType } from './box-type.model';
import { Camping } from './camping.model';
import { Image, ImageModel } from './image.model';

export interface Box {
  id?: string;
  name: string;
  boxType?: BoxType;
  convenience: string;
  price: number;
  images: ImageModel[];
  active: boolean;
  camping?: Camping;
}
