import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { Products } from './products.component'
import { Details } from '../details/details.component'

const routes: Routes = [{
  path: '',
  component: Products
},
{path: ':id', component: Details}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
