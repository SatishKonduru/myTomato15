import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GetAllFoodItemsService } from 'src/app/services/get-all-food-items.service';
import { Foods } from 'src/app/shared/models/Food';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public breakfast: Foods[] = []
public pizza = []
public searchKey: string = ''
  constructor(private _allFood: GetAllFoodItemsService, private _activatedRoute : ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._allFood.getBreakFastItems()
    .subscribe(res => this.breakfast = res)

    this._allFood.getPizzas()
    .subscribe(res => this.pizza = res)


  this._activatedRoute.paramMap.subscribe((params: ParamMap)=> {
    this.searchKey = params.get('searchItem')
    this._allFood.getBreakFastItems().subscribe(res => {
      this.breakfast = res.filter(food => food.name.toLowerCase().includes(this.searchKey.toLowerCase()))
    })
  })

}
onSearchClear(){
  this.searchKey=''
  this.applyFilter()
  this._router.navigateByUrl('/home')
}
applyFilter(){
 if(this.searchKey){
  this._router.navigateByUrl('/search/'+this.searchKey)
 }
}

}
