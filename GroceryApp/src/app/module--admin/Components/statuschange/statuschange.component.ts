import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/module--order/model/order';

@Component({
  selector: 'app-statuschange',
  templateUrl: './statuschange.component.html',
  styleUrls: ['./statuschange.component.css']
})
export class StatuschangeComponent implements OnInit{


 
  order:any;
  orders:Order = new Order();
  selectedStatus:string;


  ngOnInit(): void {
    this.getOrders();
  }

  constructor(private http:HttpClient)
{}
  
getOrders()
{
  this.http.get('http://localhost:8091/api/grocery/order').subscribe((res) =>{
    this.order = res;
    console.log(res);
  })
}

getOrderByid(orderId:number)
{
  this.http.get(`http://localhost:8091/api/grocery/order/${orderId}`).subscribe(
    (data) =>{
      this.order = data;
      console.log(data);
      //this.update(orderId,this.order);
    }
  )
}
updateOrder(orderId: number, order: any) {

  // order ={
  //   orderId: this.order.orderId,
  //   name: this.order.name,
  //   address: this.order.address,
  //   amount: this.order.amount,
  //   paymentMethod: this.order.paymentMethod,
  //   status: this.selectedStatus
  // }
  console.log(order);
  const date = new Date();
  console.log(date);
  
  this.http.put(`http://localhost:8091/api/grocery/updateOrder/${orderId}`, order).subscribe(
  data => {
    order.time = new Date();
    console.log(data);
    alert('Status Updated Successfully');
  },
  error => {
    console.error(error);
    alert('Status Update Failed');
  }
);
}

delete(orderId:number)
{
  this.http.delete(`http://localhost:8091/api/grocery/deleteOrder/${orderId}`).subscribe(
    res =>{
      console.log(res);
      location.reload();
    }
  )
}
}
