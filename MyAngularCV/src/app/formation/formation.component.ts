import { CvContentService } from './../cv-content/cv-content.service';
import { CvElement } from './../cv-content/cv-element';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formationData: CvElement[];

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
   this.cvContentService.getFormationData().then(
     data => this.formationData = data
   );
  }
}