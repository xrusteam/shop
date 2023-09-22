import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Details } from './details.component';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [Details],
  providers: [ProductService]
})
export class DetailsModule {}
