import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/cart-item';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItem {
  @Input() item: ICartItem;
  @Output() onDelete = new EventEmitter<number>();
  delete(id: number) {
    this.onDelete.emit(id);
  }
}
