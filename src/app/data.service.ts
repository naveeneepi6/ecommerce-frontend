import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get("https://ecommerce-backend-38h0.onrender.com/product");
  }

  createProduct(payload: any) {
    return this.http.post("https://ecommerce-backend-38h0.onrender.com/product", payload);
  }
}
