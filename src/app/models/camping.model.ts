import { Box } from './box.model';
import { Image } from './image.model';

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
  //rating: number;
  // price: number | null;
  // baseValue: number | null; 
  // category: string; 
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
