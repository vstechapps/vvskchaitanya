import { Component } from '@angular/core';

@Component({
  selector: 'app-library1',
  templateUrl: './library1.component.html',
  styleUrls: ['./library1.component.less']
})
export class Library1Component {

  books=[{
    name:"Java Fullstack Development",
    about:"Fullstack Intro and Demand in market",
    link:"assets/files/java-fullstack-dev-intro.pdf"
  },{
    name:"Spring Boot Intro",
    about:"Hands on development of spring app",
    link:"assets/files/spring-boot-intro.pdf"
  },{
      name:"Java Build Tools",
      about:"Learn about Maven, Gradle",
      link:"assets/files/java-build-tools.pdf"
    },{
      name:"Understand Inteface",
      about:"Definition of Interface and examples",
      link:"assets/files/interface.pdf"
    },{
    name:"Active Directory Federation Services",
    about:"Integration of AD FS and OAuth",
    link:"assets/files/adfs-oauth.pdf"
  },{
    name:"Spring Security",
    about:"Spring Security and OAuth 2.0",
    link:"assets/files/spring-security.pdf"
  }];

  open(b:any){
    var link="https://impulse.vvsk.in/"+b.link;
    link = "https://impulse.vvsk.in/pdfviewer?url="+link;
    window.open(link,"_blank");
  }
}
