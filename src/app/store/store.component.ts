import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less']
})
export class StoreComponent {

  apps=[{
    name:"BETA",
    about:"Business Expense Tracking and Approval",
    text:"Track and Supervise your business expenses spent by you / staff / employees / others, Upload the expense bills into this system and Eliminate the chances of spending unnecessary expenses"
  },{
    name:"My Networth",
    about:"Track and Increase your Networth",
    text:"Track your asset and liabilities. Calculate your current Networth according to the current market value of your assets. Explore options to increase Networth. Choose plans to achieve your financial goals in life"
  }]


}
