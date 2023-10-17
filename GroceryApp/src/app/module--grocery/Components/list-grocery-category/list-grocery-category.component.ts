import { Component, OnInit } from '@angular/core';
import { GroceryServiceService } from '../../service/grocery-service.service';
import { ActivatedRoute } from '@angular/router';
import { Grocery } from '../../models/grocery';
import { CartService } from 'src/app/module--cart/Service/cart.service';
import { Cart } from 'src/app/module--cart/Model/Cart';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-grocery-category',
  templateUrl: './list-grocery-category.component.html',
  styleUrls: ['./list-grocery-category.component.css']
})
export class ListGroceryCategoryComponent implements OnInit{
  
  gro:any;
  groceries: Grocery[];
  categoryId:number;
  cart:Cart =  new Cart();

  constructor(private groceryService:GroceryServiceService, private route:ActivatedRoute, private cartService:CartService,
    private snackBar:MatSnackBar)
    {}

  ngOnInit(): void {
    this.getGroCategory();
   
  }

  getGroCategory()
  {
    this.categoryId =  this.route.snapshot.params['categoryId'];
    this.groceryService.getGroCategory(this.categoryId).subscribe(res =>{
      this.groceries = res;
      console.log(res);
    })
  }

  getGroceryId(groceryId:number)
  {
    this.groceryService.getGroceryById(groceryId).subscribe(res =>{
      this.gro = res;
      console.log(res);
      this.createCart(res);
    })
  }
 
createCart(groceries:Grocery)
{
  this.cart.groceryName = groceries.groceryName;
    this.cart.groceryType = groceries.groceryType;
    this.cart.groceryPrice = groceries.groceryPrice;
    this.cart.image = groceries.image;
    this.cart.description = groceries.description;
    this.cart.quantity = groceries.quantity;

  this.cartService.createCart(this.cart).subscribe({
    next:(data) =>{
      console.log(data);
      this.showSnackbar("Added To cart SucessFully");
     
    }
  })
}


showSnackbar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 3000, // Duration in milliseconds (optional)
    panelClass: 'snackbar-success' // Optional CSS class for styling the snackbar
  });
}
  
}
