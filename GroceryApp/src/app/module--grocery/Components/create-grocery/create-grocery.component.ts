import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { GroceryServiceService } from '../../service/grocery-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-grocery',
  templateUrl: './create-grocery.component.html',
  styleUrls: ['./create-grocery.component.css']
})
export class CreateGroceryComponent implements OnInit{

  groceryFrom:FormGroup;

  category:Category[] = [];

  categories = new Category();


  grocery = {
    groceryId: 0,
    groceryName: '',
    groceryType: '',
    groceryPrice: '',
    image: '',
    description: '',
    quantity: '',
    groceryCategory: {
      categoryId: 0,
      categoryName: '',
      image: '',
    },
  };

  constructor(private groceryService:GroceryServiceService, private fb:FormBuilder, private http:HttpClient)
  {}

  ngOnInit(): void {

    this.groceryFrom = this.fb.group({
      groceryName:['', Validators.required],
      groceryType:['', Validators.required],
      groceryPrice:['', Validators.required],
      image:['', Validators.required],
      description:['', Validators.required],
      quantity:['', Validators.required],
      categoryId:['', Validators.required],

    });
    
    this.getCatgories();
  }

  getCatgories()
  {
    this.groceryService.getCategory().subscribe(data=>{
      this.category = data;
      console.log(data); 
    })
  }

  onSubmit() {
    console.log(this.groceryFrom.value);
    const selectedCategoryId = this.groceryFrom.value.categoryId;
    const selectedCategory = this.category.find(c => c.categoryId === selectedCategoryId);
  
    this.grocery = {
      groceryId: 0,
      groceryName: this.groceryFrom.value.groceryName,
      groceryType: this.groceryFrom.value.groceryType,
      groceryPrice: this.groceryFrom.value.groceryPrice,
      image: this.groceryFrom.value.image,
      description: this.groceryFrom.value.description,
      quantity: this.groceryFrom.value.quantity,
      groceryCategory: {
        categoryId: selectedCategoryId,
        categoryName: selectedCategory?.categoryName || '',
        image: selectedCategory?.image || '',
      },
    };

    this.http.post('http://localhost:8091/api/grocery/createGrocery', this.grocery)
    .subscribe({
      next:(response:any) =>{
        console.log(response);
        alert('Grocery added SucessFully!!!');
      }
    })
  }

  resetForm()
  {
    this.groceryFrom.reset();
  }

  }

