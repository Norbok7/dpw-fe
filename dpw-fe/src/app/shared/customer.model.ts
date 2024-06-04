export interface Customer {
  id: number;
  email: string;
  name?: string;
  description?: string;
  stripeCustomerId?: string;
  defaultPaymentMethodId?: string;
  metadata?: { [key: string]: string };
}
