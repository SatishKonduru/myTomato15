import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { user } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _registerURL = 'http://localhost:3000/api/register';
private _loginURL = 'http://localhost:3000/api/login';
//public loginStatus : boolean = false;
public currentUser = ''
public myToken = {
  token: ''
}
  constructor(private _http: HttpClient, private _router: Router) { }
  registerUser(user): Observable<user>{
    return this._http.post<user>(this._registerURL, user)
  }

  loginUser(user){
    return this._http.post<any>(this._loginURL, user)
  }
  setCurrentUser(username){
    this.currentUser = username
  }
  isLoggedIn() : boolean{

    if(this.myToken.token != '')
      {
        return  true
      }
      else{
        return  false
      }
  }

  logout(){
    this.currentUser = ''
    this.myToken.token = ''
    this.isLoggedIn()
    this._router.navigate(['/login'])
  }

  setToken(token){
    console.log('my Incoming Token: '+ token)
    this.myToken.token = token
    console.log(`My token : ${this.myToken.token}`)
  }

}
