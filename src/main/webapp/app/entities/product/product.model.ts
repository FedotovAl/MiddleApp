export interface IProduct {
  id?: number;
  title?: string;
  category?: string;
  price?: number | null;
}

export class Product implements IProduct {
  constructor(public id?: number, public title?: string, public category?: string, public price?: number | null) {}
}

export function getProductIdentifier(product: IProduct): number | undefined {
  return product.id;
}
