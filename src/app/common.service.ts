import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { 
    
  }

  getCustomerName() {
    return this.http.get<Customer[]>('assets/customerName.json');
  }
}


export interface Customer {
  Name: string;
}
