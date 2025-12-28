import { Component } from '@angular/core';
import { Utility } from '../app-utilt';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  standalone: false
})
export class HomeComponent {
  isMobile: boolean = Utility.mobileAndTabletCheck();
  sidebarOpen: boolean = false;

  constructor(public config: ConfigService) {

  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
