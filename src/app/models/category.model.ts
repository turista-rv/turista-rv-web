export interface Category {
  id?: string;
  name: string;
  description?: string;
  type: TypeCategory;
}

export interface CategoryModelUpdate {
  category: {
    id?: string;
    name: string;
    description?: string;
    type: TypeCategory;
  };
}

export enum TypeCategory {
  ATTRACTION = 'ATTRACTION',
  CAMPING = 'CAMPING',
}
