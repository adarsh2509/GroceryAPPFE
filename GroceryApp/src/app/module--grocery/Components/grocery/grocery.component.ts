import { Component, OnInit } from '@angular/core';
import { Grocery } from '../../models/grocery';
import { GroceryServiceService } from '../../service/grocery-service.service';
import { CartService } from 'src/app/module--cart/Service/cart.service';
import { Cart } from 'src/app/module--cart/Model/Cart';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Favourite } from '../../models/favourite';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  grocery: any;
  gro: Grocery[];
  cart: Cart = new Cart();
  fav:Favourite = new Favourite();


  showNumberInput: boolean = false;
  quantity: number = 0;

  ngOnInit(): void {
    this.getGrocery();
  }

  constructor(
    private groceryService: GroceryServiceService,
    private cartService: CartService,
    private snackbar:MatSnackBar,
    private http:HttpClient
  ) {}

  getGrocery() {
    this.groceryService.getGrocery().subscribe((data) => {
      this.grocery = data;
      console.log(data);
    });
  }

  getGroceryId(groceryId: number) {
    this.groceryService.getGroceryById(groceryId).subscribe((data) => {
      this.gro = data;
      console.log(data);
      this.createCart(data);
      
    });
  }

  createCart(grocery: Grocery) {
    this.cart.groceryName = grocery.groceryName;
    this.cart.groceryType = grocery.groceryType;
    this.cart.groceryPrice = grocery.groceryPrice;
    this.cart.image = grocery.image;
    this.cart.description = grocery.description;
    this.cart.quantity = grocery.quantity;

    this.cartService.createCart(this.cart).subscribe({
      next: (data) => {
        console.log(data);
        this.showSnackbar('Added to cart successfully');
        location.reload();
      },
      
    });
  }

  addfav(grocery:Grocery)
  {
    this.fav.groceryName = grocery.groceryName;
    this.fav.groceryType = grocery.groceryType;
    this.fav.groceryPrice = grocery.groceryPrice;
    this.fav.image = grocery.image;
    this.fav.description = grocery.description;
    this.fav.quantity = grocery.quantity;

  this.http.post('http://localhost:8091/api/grocery/createFavourite',this.fav).subscribe({
    next:(data) =>{
      console.log(data);
    }
  }
  )
  }

  getGroceryIds(groceryId: number) {
    this.groceryService.getGroceryById(groceryId).subscribe((data) => {
      this.gro = data;
      console.log(data);
      this.addfav(data);
      
    });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds (optional)
      panelClass: 'snackbar-success' // Optional CSS class for styling the snackbar
    });
  }


  toggleCartButton() {
    this.showNumberInput = !this.showNumberInput;
  }

  decreaseQuantity() {
    
    if (this.quantity > 0) {
      this.quantity --;
    }
  }

  increaseQuantity() {
    this.quantity ++;
  }

//   const str = this.grocery.quantity;
// const matches = str.match(/\d+/);
// const number = Number(matches[0]);

toggleLike(grocery: any) {
  grocery.isLiked = !grocery.isLiked;
  this.getGroceryIds(grocery.groceryId);
}



}