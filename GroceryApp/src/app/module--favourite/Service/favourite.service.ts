import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourite } from 'src/app/module--grocery/models/favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  getUrl="http://localhost:8091/api/grocery/getFavourite";
  deleteUrl="http://localhost:8091/api/grocery/deletefav";

  constructor(private http:HttpClient) { }

  getFav():Observable<Favourite[]>
  {
    return this.http.get<Favourite[]>(`${this.getUrl}`);
  }

  deletefav(favId:number):Observable<void>
  {
    return this.http.delete<void>(`${this.deleteUrl}/${favId}`);
  }
}
