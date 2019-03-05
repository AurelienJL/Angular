import { Component, OnInit } from '@angular/core';
import { CvContentService } from './../cv-content/cv-content.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isCollapsed: boolean = true;

  navigationItems;

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
    this.navigationItems = this.cvContentService.getMenuItems();
  }

  onToggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
