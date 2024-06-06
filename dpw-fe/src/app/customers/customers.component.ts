import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.customerService.getCustomers(token).subscribe(response => {
        this.customers = response;
      });
    }
  }
}
