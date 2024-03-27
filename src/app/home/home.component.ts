import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.dataService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
