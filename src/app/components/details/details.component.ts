import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { ICartItem } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: '',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class Details implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  private productSubscription: Subscription;
  product: IProduct;

  addToCart(product: IProduct) {
    const newItem: ICartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    };

    this.cartService.addItem(newItem);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      this.productSubscription = this.productService
        .getProduct(productId)
        .subscribe((data: IProduct) => {
          this.product = data;
        });
    });
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
