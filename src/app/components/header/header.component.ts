import { AfterContentInit, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe : EventEmitter<any> = new EventEmitter()
  toggleSidebar(){
    this.toggleSidebarForMe.emit()
  }
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
      }


}
