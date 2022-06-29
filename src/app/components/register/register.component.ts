import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public showPassword = false;
public registerUserData = {
  username: '',
  password: ''
}
  constructor(private _authService: AuthService, public notificationService: NotificationService, private _router: Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    //console.log(this.registerUserData)
    this._authService.registerUser(this.registerUserData)
    .subscribe(res =>
      {
        console.log(res)
        this.registerUserData.username=''
        this.registerUserData.password=''
        this.notificationService.success('Registered Successfully.')
        this._router.navigate(['/login'])
      } ,
        err =>console.log(err)
      )
  }
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword
  }

}
