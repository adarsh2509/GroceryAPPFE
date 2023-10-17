import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/module--cart/Service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  count:number;
  ngOnInit(): void{
    this.countCart();
  }

  constructor(private cartService:CartService)
  {}

  countCart()
  {
    this.cartService.countCart().subscribe(res =>{
      this.count=res;
      console.log(res);
    })
  }
}
