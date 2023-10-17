import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { GrocerycategoryComponent } from './module--grocery/Components/grocerycategory/grocerycategory.component';
import { GroceryComponent } from './module--grocery/Components/grocery/grocery.component';
import { CreateGroceryComponent } from './module--grocery/Components/create-grocery/create-grocery.component';
import { ListGroceryCategoryComponent } from './module--grocery/Components/list-grocery-category/list-grocery-category.component';
import { CartComponent } from './module--cart/Components/cart/cart.component';
import { BuyerComponent } from './module--buyer/Components/buyer/buyer.component';
import { OrderComponent } from './module--order/Components/order/order.component';
import { OrdernowComponent } from './module--order/Components/ordernow/ordernow.component';
import { OrderstatusComponent } from './module--order/Components/orderstatus/orderstatus.component';
import { StatuschangeComponent } from './module--admin/Components/statuschange/statuschange.component';
import { MapComponent } from './map/map.component';
import { FavouriteComponent } from './module--favourite/Components/favourite/favourite.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:'',component:HomeComponent},
  {path:"category",component:GrocerycategoryComponent},
  {path:"grocery",component:GroceryComponent},
  {path:"create",component:CreateGroceryComponent},
  {path:"listCategory/:categoryId",component:ListGroceryCategoryComponent},
  {path:"cart",component:CartComponent},
  {path:"buyer",component:BuyerComponent},
  {path:"order/:buyerId",component:OrderComponent},
  {path:"order",component:OrderComponent},
  {path:"ordernow",component:OrdernowComponent},
  {path:"status",component:OrderstatusComponent},
  {path:"statuschange",component:StatuschangeComponent},
  {path:"map",component:MapComponent},
  {path:"favourite",component:FavouriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
