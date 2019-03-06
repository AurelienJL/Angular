import { CvContentService } from './../cv-content/cv-content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isCollapsed: boolean = true;
  presentationItems;

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
  this.presentationItems = this.cvContentService.getPresentationData();
  }

  onToggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
