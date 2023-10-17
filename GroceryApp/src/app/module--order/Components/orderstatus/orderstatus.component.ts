import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { OrderService } from '../../service/order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit{
 
  order:any;

  name: any;
  orderStatusMessage: string;

  ngOnInit() {
    //this.getOrders();
  }


  constructor(private orderService:OrderService, private http:HttpClient)
  {
  }

  
  getOrderByName(name:any) {
   
   this.http.get(`http://localhost:8091/api/grocery/ordername/${name}`).subscribe( (res) =>{
    this.order =res;
    console.log(res);
   })
    }

    getOrders()
    {
      this.http.get('http://localhost:8091/api/grocery/order').subscribe((res)=>{
        this.order =res;
        console.log(res);
      })
    }

    //  formatDateTime(): string {
    //   const currentDate: Date = new Date();
    //   const formattedDateTime: string = currentDate.toLocaleString(); 
    //   return formattedDateTime;
    // }

    getProgressWidth(status: string): string {
      if (status === 'Accepted') {
        return '25%';
      } else if (status === 'Shipped') {
        return '50%';
      } else if (status === 'Delivered') {
        return '100%';
      } else if(status == 'Ordered'){
        return '0%';
      }
      return '0%';
    }

    getProgressPercentage(status: string): number {
      if (status === 'Accepted') {
        return 25;
      } else if (status === 'Shipped') {
        return 50;
      } else if (status === 'Delivered') {
        return 100;
      } else if (status === 'Ordered') {
        return 0;
      }
      return 0;
    }
    
    
  }

