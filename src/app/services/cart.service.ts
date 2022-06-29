import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/Food';
import { CartItem } from '../shared/models/cartItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : Cart = new Cart()
  constructor() { }

  addToCart(food: any){
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity+1)
     return
    }

    console.log("Cart Items in Service: ", this.cart.items)
    this.cart.items.push(new CartItem(food))
  }

  changeQuantity(quantity: number, foodId: number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem) return
    cartItem.quantity = quantity
  }

  removeFromCart(foodId: number){
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  getCart() : Cart{
    return this.cart
  }
}
