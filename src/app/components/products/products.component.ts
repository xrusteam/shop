import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "src/app/interfaces/product";
import { ProductService } from "src/app/services/product.service";
import {Subscription} from 'rxjs'


@Component({
  selector: 'product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class Products implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  private productsSubscription: Subscription;
  products: IProduct[];

  ngOnInit(): void {
   this.productsSubscription = this.productService.getProducts().subscribe((data: IProduct[]) => {this.products = data})
  }

  ngOnDestroy(): void {
      if(this.productsSubscription) {
        this.productsSubscription.unsubscribe();
      }
  }
}
