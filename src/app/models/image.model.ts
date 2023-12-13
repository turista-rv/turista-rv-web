import { Camping } from './camping.model';

export interface Image {
  id?: string;
  camping?: Camping;
  url: string;
}

export interface ImageModel {
  id: string;
  url: string;
  name: string;
}
