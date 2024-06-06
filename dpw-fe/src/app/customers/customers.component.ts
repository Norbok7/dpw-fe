import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  newCustomer = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip_code: ''
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.customerService.getCustomers(token).subscribe(response => {
        this.customers = response;
      });
    }
  }

  createCustomer(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.customerService.createCustomer(token, { customer: this.newCustomer }).subscribe(response => {
        this.customers.push(response);
        this.newCustomer = {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip_code: ''
        };
      });
    }
  }
}
