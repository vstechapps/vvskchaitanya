import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  @Output()
  close = new EventEmitter();

  active:string="";

  constructor(public router:Router){
    document.addEventListener("scroll",(event)=>this.checkView(event));

  }

  checkView(event:any){
    var views=["app-profile","app-experience","app-education","app-projects","app-awards","app-connectnow"];
    for(var i in views){
      var v=views[i];
      var el = document.getElementsByTagName(v)[0];
      if(el && this.checkVisible(el)){
        this.active=v;
        break;
      }
    }
  }

  checkVisible(elm:Element) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

}
