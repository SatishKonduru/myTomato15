import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { user } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginUserData = {
  username: '',
  password: ''
}
public showPassword = false;
  constructor(private _authService: AuthService, private _router: Router, private _notificationService: NotificationService) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._authService.loginUser(this.loginUserData)
    .subscribe(res  => {
      console.log(res.token)
      this._router.navigate(['/home'])
      this._authService.setCurrentUser(this.loginUserData.username)
      this._authService.setToken(res.token)
      this._authService.isLoggedIn()
    },
    err => {
      this.loginUserData.username=''
      this.loginUserData.password=''
      this._notificationService.failure('Invalid Credentials')
    })
  }
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword
  }

}
