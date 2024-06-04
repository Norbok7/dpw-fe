import { Order } from './order.model';

export class Payment {
  id!: number;        // Definite Assignment Assertion
  orderId!: number;   // Definite Assignment Assertion
  amount!: number;
  currency!: string;
  stripeTransactionId?: string;
  status!: PaymentStatus;
  createdAt!: Date;
  updatedAt!: Date;

  // Optional navigation property:
  order?: Order;
}

export enum PaymentStatus {
  Pending = 'pending',
  Processing = 'processing',
  Succeeded = 'succeeded',
  Failed = 'failed',
  Refunded = 'refunded',
  RequiresAction = 'requires_action',
  Canceled = 'canceled',
}
