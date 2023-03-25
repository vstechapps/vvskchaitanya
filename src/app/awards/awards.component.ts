import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.less']
})
export class AwardsComponent {
  awards=[
    {name:"TCS - Star of Month Award",link:"files/tcs-star-of-the-month.pdf"},
    {name:"Deloitte - Spot Award",link:"files/deloitte-spot.pdf"},
    {name:"Deloitte - OutStanding Award",link:"files/deloitte-outstanding.pdf"}
  ]

}
