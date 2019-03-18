import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentFeature = 'recipe';


  ngOnInit() {
    firebase.initializeApp({
      apiKey: "",
      authDomain: "shopping-recipe-app.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.currentFeature = feature;
  }
}
