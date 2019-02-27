import { CvContentService } from './../cv-content/cv-content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isCollapsed: boolean = true;

  navigationItems;

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
    this.navigationItems = this.cvContentService.getNavItems();
  }

  onToggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
