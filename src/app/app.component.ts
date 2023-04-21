import { Component } from '@angular/core';
import { Events, FirestoreService } from './firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  constructor(private firestore:FirestoreService){
    this.firestore.log(Events.PAGE_VIEW);
  }
}
