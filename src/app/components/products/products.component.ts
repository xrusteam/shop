import { Component, Input } from "@angular/core";
import { IProduct } from "src/app/interfaces/product";
import { ProductService } from "src/app/services/product.service";


@Component({
  selector: 'product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class Products {
  products: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: IProduct[]) => {this.products = data})
  }
}
