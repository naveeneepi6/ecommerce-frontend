import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = {
    name: "",
    price: 0,
    q: 0
  }
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  handleAddProduct() {
    this.dataService.createProduct(this.product).subscribe({
      next: (res) => {
        console.log(res);
        this.product = {
          name: "",
          price: 0,
          q: 0
        }
      },
      error: (error) => {
        console.log(error);
        
      }
    })
  }

}
