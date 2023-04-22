import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  navs=[{
    title:"V.V.S.K",
    path:""
  },{
    title:"IAM",
    path:"iam"
  }];
  

  cards=[{
    name:"Manage Domains"
  },{
    name:"Manage Users"
  },{
    name:"Manage Apps"
  },{
    name:"Manage Permissions"
  },{
    name:"User Permissions"
  },{
    name:"Request Access"
  },{
    name:"Request Change"
  }]

  constructor(){

  }


}
