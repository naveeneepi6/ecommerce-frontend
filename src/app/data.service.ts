import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  
  getProducts() {
    return this.http.get("http://localhost:3000/product");
  }

  createProduct(payload: any) {
    return this.http.post("http://localhost:3000/product", payload);
  }
}
