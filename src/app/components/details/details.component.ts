import {Component, OnInit, OnDestroy} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import {Subscription} from 'rxjs'

@Component({
  selector: '',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class Details implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  private productSubscription: Subscription
  product: IProduct;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      this.productSubscription = this.productService.getProduct(productId).subscribe((data: IProduct) => {this.product = data})
    })
  }

  ngOnDestroy(): void {
      if(this.productSubscription) {
        this.productSubscription.unsubscribe()
      }
  }
}
