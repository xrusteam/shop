import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product';
import { ICartItem } from '../interfaces/cart-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class CartService {
  constructor(private http: HttpClient) {}

  private cartSubject = new BehaviorSubject<ICartItem[]>([]);
  _cart = this.cartSubject.asObservable();

  addItem(addedItem: ICartItem): void {
    const currentCart = this.cartSubject.getValue();

    const currentItem = currentCart.find((item) => item.id === addedItem.id);

    if (currentItem) {
      currentItem.quantity += 1;
    } else {
      currentCart.push(addedItem);
      this.cartSubject.next(currentCart);
    }
  }

  getCart(): ICartItem[] {
    return this.cartSubject.getValue();
  }

  deleteItem(id: number): void {
    const currentCart = this.cartSubject.getValue();
    const updatedCart = currentCart.filter((item) => item.id !== id);

    this.cartSubject.next(updatedCart);
  }

  deleteAllItems(): void {
    this.cartSubject.next([]);
  }

  getItemCount(): number {
    return this.cartSubject.getValue().length;
  }
}
