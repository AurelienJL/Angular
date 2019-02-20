import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username:string = '';
  validUsername:boolean = false;

  reset() {
   this.username = '';
  }
}
