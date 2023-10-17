import { Component, OnInit } from '@angular/core';
import { GroceryServiceService } from '../../service/grocery-service.service';
import { Category } from '../../models/category';
import { Router } from '@angular/router';
import { Grocery } from '../../models/grocery';

@Component({
  selector: 'app-grocerycategory',
  templateUrl: './grocerycategory.component.html',
  styleUrls: ['./grocerycategory.component.css']
})
export class GrocerycategoryComponent implements OnInit{

  category!:Category[];
  grocery:Grocery[];

  constructor(private categoryService:GroceryServiceService, private router:Router)
  {}
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory()
  {
    this.categoryService.getCategory().subscribe(res =>{
      this.category = res;
      console.log(res);
    });
  }

  getCategoriesById(categoryId: number) {
    this.categoryService.getGroCategory(categoryId).subscribe(res => {
      this.grocery = res;
      console.log(res);
      this.router.navigate(['listCategory', categoryId]);
    });
  }

}
