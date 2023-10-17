import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyerService } from 'src/app/module--buyer/Service/buyer.service';
import { Buyer } from 'src/app/module--buyer/model/Buyer';
import { Cart } from 'src/app/module--cart/Model/Cart';
import { CartService } from 'src/app/module--cart/Service/cart.service';
import { Order } from '../../model/order';
import { OrderService } from '../../service/order.service';
import * as QRCode from 'qrcode';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

cart:Cart[];
buyer:any;
buyerId:number;
showPaymentOptions = false;
selectedPaymentOption: string;
//totalamount:number=this.totalAmount();;

order:Order = new Order();
ord:Order[];

constructor(private buyerService:BuyerService, private router:ActivatedRoute, private cartService:CartService
  ,private orderService:OrderService, private http:HttpClient, private snackBar:MatSnackBar)
{
  
}

  ngOnInit(): void {

    this.getBuyer();
    this.getCart();
    // this.amount = this.totalAmount().toString();
    // console.log(this.amount)
    
  }

  getBuyer()
  {
    this.buyerId = this.router.snapshot.params['buyerId'];
    this.buyerService.getByByerId(this.buyerId).subscribe(res=>{
      this.buyer = res;
      console.log(res);
    })
  }


  showPayment() {
    this.showPaymentOptions = true;
  }

  getCart()
  {
    this.cartService.getCart().subscribe(res =>{
      this.cart =res;
      console.log(res);
    })
  }

  calculate(): number {
    let total = 0;
    for (let cartItem of this.cart) {
      total += cartItem.groceryPrice;
    }
    return total;
  }

  calculateDiscount(): number {
    const gstRate = 0.10; 
    const totalAmount = this.calculate(); 
  
    const gstAmount = totalAmount * gstRate;
    return gstAmount;
  }

  deliveryCharges():number
  {
    let delivery= 0;
    if(this.calculate() >=200)
    {
       delivery= 20;
    }
    else if(this.calculate()>=600)
    { delivery =0;
    }
    else{
      delivery =40;
    }
    
    const del =delivery
    return del;
  }

  totalAmount(): number {
    let total = 0;
    const t = this.calculate();
    const disc = this.calculateDiscount();
    const dc = this.deliveryCharges();
    total = t - disc +dc;
    return total;
  }
  
  loading: boolean = false;

  proceedWithPayment() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.showPayment()
    }, 2000); 
  }
  

  createOrder() {
    this.order = {
    orderId: 0,

    name : this.buyer.name,
    
    address : this.buyer.address,
    
    amount : this.totalAmount(),
    
    paymentMethod :this.selectedPaymentOption,
    status:"Orderd",
    time : new Date()
    
    };
  
    this.http.post('http://localhost:8091/api/grocery/createOrder', this.order).subscribe({
       next: (response: any) => {
        console.log(response);
        this.snackBar.open('Order Placed SucessFully', 'Close', {
          duration: 2000
        });
      },
      error:(error:any) =>{
        console.log(error);
        this.snackBar.open("Order Placed Failed","close",{
          duration:1000
        });
      }
    })
  }
  

   
  // code = `total amount: $${this.totalAmount()}`;

  // async generateQrCode(): Promise<string> {
  //   return new Promise<string>((resolve, reject) => {
  //     QRCode.toString(this.data, (error, qr) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         console.log(qr);
  //         resolve(qr);
  //       }
  //     });
  //   });
  // }
  cardNumber: string;
  cvv: string;
  cardHolderName: string;
  amount: string;

  
}

