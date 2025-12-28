import { Component } from '@angular/core';
import { Utility } from '../app-utilt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: false
})
export class HeaderComponent {
  isMobile: boolean = Utility.mobileAndTabletCheck();
  menu: boolean = false;
}
