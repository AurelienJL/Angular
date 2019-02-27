import { CvContentService } from './../cv-content/cv-content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems;

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
    this.menuItems = this.cvContentService.getMenuItems();
  }

}
