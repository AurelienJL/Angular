import { Component, OnInit, Input } from '@angular/core';
import { CvElement } from './cv-element';

@Component({
  selector: 'app-cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.css']
})
export class CvContentComponent implements OnInit {

  isCollapsed: boolean = true;

  @Input() cvElement: CvElement;

  constructor() { }

  ngOnInit() {
  }

  onToggleCard() {
    this.isCollapsed = !this.isCollapsed;
  }

}
