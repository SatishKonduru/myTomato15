import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tomatoApp';
  public sideBarOpen = true
  sidenavWidth = 18;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen

  }



}
