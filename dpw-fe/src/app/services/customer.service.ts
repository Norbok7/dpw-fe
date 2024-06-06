import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  getCustomers(token: string): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(this.baseUrl, { headers });
  }

  createCustomer(token: string, customer: any): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(this.baseUrl, customer, { headers });
  }

  // Similarly, add methods for update and delete
}
