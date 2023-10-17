import { Component, OnInit } from '@angular/core';
import { Cart } from '../../Model/Cart';
import { CartService } from '../../Service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart:Cart[];


  constructor(private cartService:CartService, private snackBar: MatSnackBar, private router:Router)
  {

  }
  ngOnInit(): void {

    this.getCartItems();
    
  }

getCartItems()
{
  this.cartService.getCart().subscribe(data=>{
    this.cart = data;
    console.log(data);
  });
}

deleteCartId(cartId:number)
{
  console.log(cartId)
 this.cartService.deleteCart(cartId).subscribe((data) =>{
  console.log("Deleted SucesFully"+cartId+'Ok');
  location.reload()
 },(error) =>{

 })
}

calculateTotalPrice(): number {
  let total = 0;
  for (let cartItem of this.cart) {
    total += cartItem.groceryPrice;
  }
  return total;
}

proceed(): void {
 
  if (this.cart && this.cart.length > 0) {
    this.router.navigate(['buyer']);
  } else {
    this.snackBar.open('Cart is empty', 'Close', {
      duration: 3000 
    });
  }
}


}
