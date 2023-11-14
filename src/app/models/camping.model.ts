import { Box } from './box.model';
import { Image } from './image.model';

export interface Camping {
  id?: string;
  name: string;
  images: Image[];
  box?: Box[];
  propertyRules: string;
  areaImage?: Image;
  active: boolean;
  description?: string;
}
