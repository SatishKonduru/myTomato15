import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
public config: MatSnackBarConfig = {
  // duration: 4000,
  horizontalPosition: 'right',
  verticalPosition: 'bottom'
}
  constructor(public snackBar: MatSnackBar) { }
  success(msg){
    this.config['panelClass']=['notificationSuccess']
    this.snackBar.open(msg, 'OK', this.config)
  }
  failure(msg){
    this.config['panelClass']=['notificationFailure']
    this.snackBar.open(msg, 'Retry', this.config)
  }

}
