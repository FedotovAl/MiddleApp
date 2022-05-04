import { IPerson } from 'app/entities/person/person.model';
import { IProduct } from 'app/entities/product/product.model';

export interface IOrder {
  id?: number;
  user_id?: number;
  product_id?: number;
  total?: number;
  quantity?: number;
  person?: IPerson | null;
  product?: IProduct | null;
}

export class Order implements IOrder {
  constructor(
    public id?: number,
    public user_id?: number,
    public product_id?: number,
    public total?: number,
    public quantity?: number,
    public person?: IPerson | null,
    public product?: IProduct | null
  ) {}
}

export function getOrderIdentifier(order: IOrder): number | undefined {
  return order.id;
}
