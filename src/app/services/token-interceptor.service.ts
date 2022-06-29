import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authService =  this._injector.get(AuthService)
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `bearer ${authService.myToken.token}`
        }
      })
      return next.handle(tokenizedReq)
  }
}
