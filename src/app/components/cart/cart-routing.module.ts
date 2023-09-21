import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { Cart } from './cart.component'

const routes: Routes = [{
  path: '',
  component: Cart
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
