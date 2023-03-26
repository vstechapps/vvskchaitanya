import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.less']
})
export class AwardsComponent {
  awards:{name:string,link:string,l?:any,t?:string}[]=[
    {name:"TCS - Star of Month Award",link:"assets/files/tcs-star-of-the-month.pdf"},
    {name:"Deloitte - Spot Award",link:"assets/files/deloitte-spot.pdf"},
    {name:"Deloitte - Outstanding Award",link:"assets/files/deloitte-outstanding.pdf"},
    {name:"Oracle - Java Associate",link:"assets/files/oracle-java-cert1.pdf"},
    {name:"Oracle - Java Professional",link:"assets/files/oracle-java-cert2.pdf"},
    {name:"Mongo DB - Certitifaction",link:"assets/files/udemy-mongodb.pdf"},
    {name:"Microsoft Azure - Fudamentals",link:"assets/files/az-900.png"},
  ];

  constructor(private sanitizer:DomSanitizer){
    this.awards.forEach(a=>{
      a.l=this.sanitizer.bypassSecurityTrustResourceUrl(a.link);
      if(a.link.includes(".pdf")){
        a.t="application/pdf";
      }
      else if(a.link.includes(".png")){
        a.t="image/png";
      }
    })
  }

  open(a:any){
    window.open(window.location.href+a.link,"_blank");
  }

}
