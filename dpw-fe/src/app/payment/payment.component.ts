import { Component, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [StripeCardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent | undefined;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;

  constructor(private fb: FormBuilder, private stripeService: StripeService) {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // Initialization logic if any can go here
  }

  pay(): void {
    if (this.stripeTest.valid && this.card) {
      const name = this.stripeTest.get('name')?.value;

      this.stripeService.createToken(this.card.element, { name }).subscribe(result => {
        if (result.token) {
          // Send the token to your backend for processing the payment
          console.log(result.token);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
    } else {
      console.log('Form is invalid or card is not initialized');
    }
  }
}
