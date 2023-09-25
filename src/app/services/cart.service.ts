import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICart, ICartItem } from '../interfaces/cart-item';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  private cartSubject = new BehaviorSubject<ICart>({
    items: [],
  });

  private getCurrentCart() {
    return this.cartSubject.value.items;
  }

  addItem(addedItem: ICartItem): void {
    const currentItem = this.getCurrentCart().find(
      (item) => item.id === addedItem.id
    );

    if (currentItem) {
      currentItem.quantity += 1;
      currentItem.price = currentItem.quantity * addedItem.price;
    } else {
      this.getCurrentCart().push(addedItem);
    }
    this.cartSubject.next({ items: this.getCurrentCart() });

    console.log(this.getCurrentCart());
  }

  getCart(): Observable<ICartItem[]> {
    return this.cartSubject.pipe(map((value) => value.items));
  }

  getItemCount(): Observable<number> {
    return this.cartSubject.pipe(map((value) => value.items.length));
  }

  deleteItem(id: number): void {
    const updatedCart = this.getCurrentCart().filter((item) => item.id !== id);

    this.cartSubject.next({ items: updatedCart });
  }

  deleteAllItems(): void {
    this.cartSubject.next({ items: [] });
  }

  getTotalPrice(): Observable<number> {
    return this.cartSubject.pipe(
      map((item) =>
        item.items.reduce((accum, current) => accum + current.price, 0)
      )
    );
  }
}
