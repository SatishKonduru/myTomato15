import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { GetAllFoodItemsService } from 'src/app/services/get-all-food-items.service';
import { Foods } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-selected-food-page',
  templateUrl: './selected-food-page.component.html',
  styleUrls: ['./selected-food-page.component.css']
})
export class SelectedFoodPageComponent implements OnInit {

  public food
  public id= 0
  public selectedFood = []
  public foodItem = []

  constructor(private _activatedRoute: ActivatedRoute,
    private _getFood :  GetAllFoodItemsService,
    private _cartService: CartService,
    private _router: Router) {
      this._activatedRoute.paramMap.subscribe((params: ParamMap)=>{
        this.id = parseInt(params.get('id'))
      })

     }

  ngOnInit(){
    this.getFoodById(this.id)
 }
 getFoodById(id : number){
  console.log("Selected ID in getFoodByID page:", id)
   this._getFood.getBreakFastItems().subscribe(res=> {
    this.food = res
    this.food.find(myFood => {
      if(myFood.id == this.id){
        // this.selectedFood = myFood
        this.selectedFood.push(myFood)
        console.log("In Selected Food Page: ", this.selectedFood)
        }
       })
   })
  }

  addToCart(){
    this._cartService.addToCart(this.selectedFood)
    this._router.navigateByUrl('/cart')

  }


}
