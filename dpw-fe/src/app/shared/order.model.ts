import { Customer } from './customer.model';
import { OrderItem } from './order_item.model';
import { Product } from './product.model';
import { Payment } from './payment.model';

export class Order {
  id!: number;         // Definite Assignment Assertion
  customerId!: number;  // Definite Assignment Assertion
  paymentIntentId?: string;
  stripeCustomerId?: string;
  orderDate!: Date;
  total!: number;
  status!: OrderStatus;

  // Optional navigation properties:
  customer?: Customer;
  orderItems?: OrderItem[];
  products?: Product[];
  payment?: Payment;
}


export enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Paid = 'paid',
  Shipped = 'shipped',
  Completed = 'completed',
  RequiresAction = 'requires_action',
  Canceled = 'canceled',
}
