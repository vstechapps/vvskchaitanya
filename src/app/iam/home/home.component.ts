import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  navs=[{
    title:"V.V.S.K",
    route:""
  },{
    title:"IAM",
    path:"iam",
    route:"/iam"
  }];
  

  cards=[{
    name:"Manage Domains",
    icon:"public",
    role:"SUPER_ADMIN"
  },{
    name:"Manage Users",
    icon:"group",
    role:"SUPER_ADMIN"
  },{
    name:"Manage Apps",
    icon:"web",
    role:"SUPER_ADMIN"
  },{
    name:"Manage Permissions",
    icon:"lock"
  },{
    name:"My Profile",
    icon:"person"
  },{
    name:"Access Request",
    icon:"key"
  },{
    name:"Change Request",
    icon:"article"
  },{
    name:"Request History",
    icon:"history"
  }]

  constructor(){

  }


}
