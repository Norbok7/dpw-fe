import { OrderItem } from "./order_item.model";

export class Product {
  id!: number;            // Definite Assignment Assertion
  name!: string;
  description!: string;
  price!: number;
  imageUrl!: string;

  // Optional navigation property:
  orderItems?: OrderItem[];
}
