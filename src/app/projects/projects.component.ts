import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {

  projects=[{
    name:"Advice Connect",
    about:"Financial Planning Application",
    text:"Advice & Planning platform developed for Investment Banking which connects Financial Advisors with Clients. It helps Advisors to understand their clients better and helps advisors in creating best investment plans which will help clients to achieve their goals"
  },{
    name:"Project Keytone",
    about:"Health Claim Processing System",
    text:"Next Gen Claim Validation and Auto Adjudication system developed for leading Health Insurance Client.  Developed multiple microservices which support automated claim processing system end to end by orchestration of various modules and business rules"
  },{
    name:"GST Portal",
    about:"Online GST Portal for B2B",
    text:"Online GST Invoice management application developed for Airline Ticket. It helps B2B Customers to request and Download GST Invoices for the travel performed by other business. It supports bulk invoice generation feature for business travels"
  }]

}
