import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header implements OnInit {
  constructor(private cartService: CartService) {}
  totalCount: Observable<number>;

  ngOnInit(): void {
    this.totalCount = this.cartService.getItemCount();
  }
}
