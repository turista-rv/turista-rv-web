import { Camping } from './camping.model';

export interface Image {
  image: { id: string; url: string; name: string };
}

export interface ImageModel {
  id: string;
  url: string;
  name: string;
}
