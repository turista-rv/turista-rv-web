import { User } from './LoginUser.model';
import { Address } from './address.model';
import { Box } from './box.model';
import { Category, CategoryModelUpdate } from './category.model';
import { Image, ImageModel } from './image.model';

export interface Camping {
  id?: string;
  name: string;
  images: Image[];
  box?: Box[];
  propertyRules: string;
  areaImage?: string;
  areaImageName?: string;
  active: boolean;
  description?: string;
  categories?: CategoryModelUpdate[];
  user?: User;
  baseValue: number;
  address: Address;
  readonly clickCounter?: number;
}

export interface CampingInsert {
  id?: string;
  name: string;
  images: Image[];
  box?: Box[];
  propertyRules: string;
  areaImage?: string;
  areaImageName?: string;
  active: boolean;
  description?: string;
  categories?: Category[];
  user?: User;
  baseValue: number;
  address: Address;
}

export interface ICamping {
  id?: string;
  name: string;
  images: Image[];
  box?: Box[];
  propertyRules: string[];
  areaImage?: Image;
  active: boolean;
  description?: string;
}
