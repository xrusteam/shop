import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'platform',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products/');
  }

  getProduct(id: string | null): Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${id}`);
  }
}
