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

  ignoreNextScrollEvent = false;

  constructor(public router:Router){
    document.addEventListener("scroll",(event)=>this.checkView(event));

    this.checkView(null);

  }

  checkView(event:any){
    if(this.ignoreNextScrollEvent){
      this.ignoreNextScrollEvent=false;
      return;
    }
    var views=["app-profile","app-skills","app-experience","app-education","app-projects","app-awards","app-connectnow"];
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
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)-100;
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  focus(view:string){
    let el:Element = document.getElementsByTagName(view)[0];
    if(el){
      var rect = el.getBoundingClientRect();
      this.ignoreNextScrollEvent=true;
      window.scrollTo(rect.left,rect.top-80);
      this.active=view;
    }
  }

}
