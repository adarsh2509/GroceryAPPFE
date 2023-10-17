import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { Grocery } from '../models/grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  getUrl="http://localhost:8091/api/grocery/getCategories";
  getGroceryUrl = "http://localhost:8091/api/grocery/getGrocery";

  createGroceryUrl="http://localhost:8091/api/grocery/createGrocery";

  getGroCategoryUrl="http://localhost:8091/api/grocery/category";

  getCatgeoryByIdUrl="http://localhost:8091/api/grocery/getCategories";

  constructor(private http:HttpClient) { }

  getCategory():Observable<Category[]>
  {
      return this.http.get<Category[]>(`${this.getUrl}`);
  }

  getGrocery():Observable<Grocery[]>
  {
    return this.http.get<Grocery[]>(`${this.getGroceryUrl}`);
  }

  createGrocery(grocery:Grocery):Observable<Object>
  {
    return this.http.post(`${this.createGroceryUrl}`,grocery);
  }

  getGroCategory(categoryId:number):Observable<Grocery[]>
  {
    return this.http.get<Grocery[]>(`${this.getGroCategoryUrl}/${categoryId}`);
  }

  getCategoryById(categoryId:number):Observable<any[]>
  {
    return this.http.get<any[]>(`${this.getCatgeoryByIdUrl}/${categoryId}`);
  }

  getGroceryById(groceryId:number):Observable<any>
  {
    return this.http.get<any>(`${this.getGroceryUrl}/${groceryId}`);
  }
}
