import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { ICartItem } from 'src/app/interfaces/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class Cart implements OnInit {
  constructor(private cartService: CartService) {}

  cartItems$: Observable<ICartItem[]>;
  totalPrice: Observable<number>;
  totalCount: Observable<number>;

  onDelete(id: number) {
    this.cartService.deleteItem(id);
  }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalCount = this.cartService.getItemCount();
  }
}
