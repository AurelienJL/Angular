import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isPasswordVisible = false;
  clicks = [];

  setPasswordVisible() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.clicks.push(new Date());
   // console.log(this.clicks);
  }

  getColor (i: any){
  return i >= 5 ? 'blue' : 'white';
  }
}

