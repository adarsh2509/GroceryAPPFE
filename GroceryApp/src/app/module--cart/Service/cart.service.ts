import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Cart} from 'src/app/module--cart/Model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  getUrl="http://localhost:8091/api/cart/getCart";

  createUrl="http://localhost:8091/api/cart/createCart";

  deleteurl="http://localhost:8091/api/cart/deleteCart";

  countUrl ="http://localhost:8091/api/cart/count";

  constructor(private http:HttpClient) { }

  getCart():Observable<Cart[]>
  {
    return this.http.get<Cart[]>(`${this.getUrl}`);
  }

  createCart(cart:Cart):Observable<Object>
  {
    return  this.http.post<Object>(`${this.createUrl}`,cart)
  }

  deleteCart(cartId:number):Observable<void>
  {
    return this.http.delete<void>(`${this.deleteurl}/${cartId}`);
  }

  countCart():Observable<number>
  {
    return this.http.get<number>(`${this.countUrl}`);
  }
}
