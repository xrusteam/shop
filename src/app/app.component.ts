import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { IProduct } from './interfaces/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shop';

  products: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: IProduct[]) => {this.products = data})
  }

}
