import { Component, OnInit } from '@angular/core';
import { faUserCircle, faSignOutAlt, faClipboardList} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faSignOutAlt = faSignOutAlt;
  faClipboardList = faClipboardList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
