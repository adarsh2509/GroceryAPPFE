import { Component, OnInit } from '@angular/core';
import { Favourite } from 'src/app/module--grocery/models/favourite';
import { FavouriteService } from '../../Service/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit{
  

  fav:Favourite[];

  constructor(private favouriteService:FavouriteService)
  {}

  ngOnInit(): void {
   this.getFavoruite();
  }

  getFavoruite()
  {
    this.favouriteService.getFav().subscribe(res =>{
      this.fav = res;
      console.log(this.fav);
    })
  }

  deleteFavorite(favId:number)
  {
    this.favouriteService.deletefav(favId).subscribe((res) =>{
      console.log("deleted Sucessfully");
      // alert('deleted Sucessfully');
      location.reload();
    })
  }

}
