import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less'],
  standalone: false
})
export class LibraryComponent {

  books = [{
    name: "Java Fullstack Development",
    about: "Get started with Fullstack",
    link: "https://docs.vvsk.in/open?path=drive%2FFullstack%2FJava%20Fullstack%20Development.pdf"
  }, {
    name: "Java Build Tools",
    about: "Learn about Maven, Gradle",
    link: "https://docs.vvsk.in/open?path=drive%2Fjava-build-tools.pdf"
  }, {
    name: "Understand Interface",
    about: "Definition of Interface and examples",
    link: "https://docs.vvsk.in/open?path=drive%2FInterface.pdf"
  }, {
    name: "Active Directory Federation Services",
    about: "Integration of AD FS and OAuth",
    link: "https://docs.vvsk.in/open?path=drive%2Fadfs-oauth.pdf"
  }, {
    name: "Spring Security",
    about: "Spring Security and OAuth 2.0",
    link: "https://docs.vvsk.in/open?path=drive%2Fspring-security.pdf"
  }];

  open(b: any) {
    window.open(b.link, "_blank");
  }
}
