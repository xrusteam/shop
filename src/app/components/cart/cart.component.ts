import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class Cart implements OnInit {
  constructor(private cartService: CartService) {}

  cartItems: CartItem[];

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }
}
