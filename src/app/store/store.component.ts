import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less']
})
export class StoreComponent {

  apps=[{
    name:"IAM",
    about:"Identity and Access Management",
    text:"Centralized Repository for User Management. Authenticate / Authorize users and maintain trust between users and enterprise resources. Manage User roles, permissions and business policies for complete organization."
  },{
    name:"ECM",
    about:"Enterprise Content Management",
    text:"Create Content, Review, Collaborate across Teams, Publish content to public. By default supports most of content types available in market. Use Content Modelling, Add required business rules, customize based on need "
  },{
    name:"BPM",
    about:"Business Process Management",
    text:"Easily create automated workflows required for your business process. Send out Alerts / Reminders to employees / managers / clients based on business rules. Eliminate manual supervision of business process"
  },{
    name:"BETA",
    about:"Business Expense Tracking and Approval",
    text:"Track and Supervise your business expenses spent by you / staff / employees / other team members. Get the expense bills uploaded into system, Do Validate and Approve. Eliminate the chances of spending unnecessary expenses"
  },{
    name:"MNM",
    about:"My Networth Management",
    text:"Add and Track your asset and liabilities. Calculate your current Networth according to the current market value of your assets. Explore options to increase Networth. Choose plans to achieve your financial goals in life"
  }]


}
