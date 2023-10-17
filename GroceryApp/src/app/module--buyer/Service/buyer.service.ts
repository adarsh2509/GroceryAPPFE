import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from 'src/app/module--buyer/model/Buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  getUrl="http://localhost:8091/api/grocery/getBuyers";
  createUrl="http://localhost:8091/api/grocery/createBuyers"
  deleteUrl="http://localhost:8091/api/grocery/deleteBuyer";

  constructor(private http:HttpClient) { }

  getBuyers():Observable<Buyer[]>
  {
    return this.http.get<Buyer[]>(`${this.getUrl}`);
  }

  createBuyers(buyer:Buyer):Observable<Object>
  {
    return this.http.post<Object>(`${this.createUrl}`,buyer);
  }

  getByByerId(buyerId:number):Observable<Buyer>
  {
    return this.http.get<Buyer>(`${this.getUrl}/${buyerId}`);
  }

  deleteBuyer(buyerId:number):Observable<void>
  {
    return this.http.delete<void>(`${this.deleteUrl}/${buyerId}`);
  }
}
