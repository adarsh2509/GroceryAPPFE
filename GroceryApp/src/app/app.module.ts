import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './core/home/home.component';
import { GrocerycategoryComponent } from './module--grocery/Components/grocerycategory/grocerycategory.component';
import { GroceryComponent } from './module--grocery/Components/grocery/grocery.component';
import { CreateGroceryComponent } from './module--grocery/Components/create-grocery/create-grocery.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ListGroceryCategoryComponent } from './module--grocery/Components/list-grocery-category/list-grocery-category.component';
import { CartComponent } from './module--cart/Components/cart/cart.component';
import { BuyerComponent } from './module--buyer/Components/buyer/buyer.component';
import { MapComponent } from './map/map.component';
import { OrderComponent } from './module--order/Components/order/order.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OrdernowComponent } from './module--order/Components/ordernow/ordernow.component';
import { OrderstatusComponent } from './module--order/Components/orderstatus/orderstatus.component';
import { StatuschangeComponent } from './module--admin/Components/statuschange/statuschange.component';
import { FooterComponent } from './shared/Components/footer/footer.component';
import { FavouriteComponent } from './module--favourite/Components/favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GrocerycategoryComponent,
    GroceryComponent,
    CreateGroceryComponent,
    ListGroceryCategoryComponent,
    CartComponent,
    BuyerComponent,
    MapComponent,
    OrderComponent,
    OrdernowComponent,
    OrderstatusComponent,
    StatuschangeComponent,
    FooterComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule

    // AgmCoreModule.forRoot({
    //   apiKey: 'YOUR_API_KEY' // Replace with your Google Maps API key
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
