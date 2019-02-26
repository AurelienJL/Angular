import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isCollapsed: boolean = true;

  navItems = [
    { url:'home', label:'Accueil'},
    { url:'skills', label:'Competences'},
    { url:'formation', label:'Formation'},
    { url:'projects', label:'Projets'},
    { url:'contact', label:'Contact'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onToggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
