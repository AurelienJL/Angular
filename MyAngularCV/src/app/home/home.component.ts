import { CvContentService } from './../cv-content/cv-content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  presentationData;

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
    this.presentationData = this.cvContentService.getPresentationData();
  }

}
