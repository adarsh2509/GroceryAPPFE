import { Component, OnInit } from '@angular/core';
import { Buyer } from '../../model/Buyer';
import { BuyerService } from '../../Service/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent  implements OnInit{
  
  buyer: Buyer = new Buyer();
  showForm: boolean = false;

  add:Buyer[];
  buy:any;

  constructor(private buyerService:BuyerService, private router:Router)
  {}

  ngOnInit(): void {
    this.getBuyerList();
  }

  onSubmit()
  {
    this.buyerService.createBuyers(this.buyer).subscribe({
      next:(data) =>{
        console.log(data);
        alert('Address added SucessFully')
      }
    })
  }


  toggleForm() {
    this.showForm = !this.showForm; // Toggle the value of showForm // Reset the buyer object when form is closed
  }

  showForms() {
    this.showForm = true; // Show the form
  }

getBuyerList()
{
  this.buyerService.getBuyers().subscribe(res=>{
    this.add = res;
    console.log(res);
  })
}

getBuyBuyerId(buyerId:number)
{
  this.buyerService.getByByerId(buyerId).subscribe(res =>{
    this.buy = res;
    console.log(res);
    this.router.navigate(['order', buyerId]);
  })
}

deleteAdress(buyerId:number)
{
  console.log(buyerId)
  this.buyerService.deleteBuyer(buyerId).subscribe((data) =>{
    console.log("deletedSucessfully"+buyerId+"Ok");
    location.reload()
  },(error) =>{

  });
}

}
