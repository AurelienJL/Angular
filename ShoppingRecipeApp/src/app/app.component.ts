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
      apiKey: "AIzaSyAxKGWLnDb-3FZY9j5-2-BR63mdJGQ--AY",
      authDomain: "shopping-recipe-app.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.currentFeature = feature;
  }
}
