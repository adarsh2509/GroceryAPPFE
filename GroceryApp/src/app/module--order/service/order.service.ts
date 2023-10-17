import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  getUrl:"http://localhost:8091/api/grocery/order";

  createUrl:"http://localhost:8091/api/grocery/createOrder";

  deleteUrl:"http://localhost:8091/api/grocery/deleteOrder";

  getNameurl:"http://localhost:8091/api/grocery/ordername";

  constructor(private http:HttpClient) { }

  getOrder():Observable<Order[]>
  {
    return this.http.get<Order[]>(`${this.getUrl}`);
  }

  createOrder(order:Order):Observable<Object>
  {
    return this.http.post(`${this.createUrl}`,order)
  }

  deleteOrder(orderId:number):Observable<void>
  {
    return this.http.delete<void>(`${this.deleteUrl}/${orderId}`)
  }

  getOrderbyId(orderId:number):Observable<any>
  {
    return this.http.get<any>(`${this.createUrl}/${orderId}`);
  }

  getOrderName(name:string):Observable<any>
  {
    return this.http.get<any>(`${this.getNameurl}/${name}`);
  }
  
}
