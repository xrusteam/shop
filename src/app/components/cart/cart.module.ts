import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { Cart } from './cart.component';


@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [Cart]
})
export class CartModule {}
