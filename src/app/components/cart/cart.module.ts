import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { Cart } from './cart.component';
import { CartItem } from '../cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, CartRoutingModule],
  declarations: [Cart, CartItem],
  providers: [],
})
export class CartModule {}
