import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { Products } from './products.component';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  declarations: [Products],
  providers: [ProductService]
})
export class ProductsModule {}
