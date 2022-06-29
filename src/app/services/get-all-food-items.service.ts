import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Foods } from '../shared/models/Food';


@Injectable({
  providedIn: 'root'
})
export class GetAllFoodItemsService {
// private _breakFastItemsURL = '../../assets/sharedData/breakfastData.json'
private _breakFastItemsURL = '../../assets/sharedData/bfItemDetails.json'
private _pizzaItemsURL = '../../assets/sharedData/pizzaData.json'


constructor(private _http: HttpClient) {}


  getBreakFastItems(): Observable<Foods[]> {
    return this._http.get<Foods[]>(this._breakFastItemsURL)
33
  }
  getPizzas(): Observable<Foods[]>{
    return this._http.get<Foods[]>(this._pizzaItemsURL)
  }
}
