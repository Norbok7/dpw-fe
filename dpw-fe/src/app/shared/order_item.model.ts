import { Order } from './order.model';
import { Product } from './product.model';

export class OrderItem {
  id!: number;         // Definite Assignment Assertion
  orderId!: number;    // Definite Assignment Assertion
  productId!: number;   // Definite Assignment Assertion
  quantity!: number;
  unitPrice!: number;

  // Optional navigation properties:
  order?: Order;
  product?: Product;

  // Optional calculated property:
  get subtotal(): number {
      return this.quantity * this.unitPrice;
  }

  // Constructor (if you want to initialize properties on object creation)
  // constructor(id: number, orderId: number, productId: number, quantity: number, unitPrice: number) {
  //   this.id = id;
  //   this.orderId = orderId;
  //   this.productId = productId;
  //   this.quantity = quantity;
  //   this.unitPrice = unitPrice;
  // }
}
