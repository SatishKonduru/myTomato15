import { Component, OnInit } from '@angular/core';
import { GetAllFoodItemsService } from 'src/app/services/get-all-food-items.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  public breakfast = []
  constructor(private _bfService: GetAllFoodItemsService) { }

  ngOnInit(){
    this._bfService.getBreakFastItems()
    .subscribe(res =>
      {
      this.breakfast = res
      console.log("In Breakfast Page: ", this.breakfast)
      }
      )
  }

}
