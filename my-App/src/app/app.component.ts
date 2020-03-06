import { Component } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-App';
  introJS = introJs();
 
 
 
  constructor() {
    
  }
 
  ngOnInit() {
    this.introJS.start().goToStep(3);
    console.log(1 + false);
  }
 
}
