import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart !: Cart
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.setCart()
  console.log("Cart Items in Cart Component: ", this.cart.items)
  }
  setCart(){
    this.cart = this._cartService.getCart()
  }
  removeFromCart(cartItem: CartItem){
    this._cartService.removeFromCart(cartItem.food.id)
    this.setCart()
  }
  changeQuantity(cartItem: CartItem, qtyInString: string){
    const quantity = parseInt(qtyInString)
    this._cartService.changeQuantity(cartItem.food.id, quantity)
    this.setCart()
  }

}
