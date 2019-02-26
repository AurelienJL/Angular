import { Component, OnInit } from '@angular/core';

import { CvContentService } from './../cv-content/cv-content.service';
import { CvElement } from './../cv-content/cv-element';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsData: CvElement[];

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
   this.cvContentService.getSkillsData().then(
     data => this.skillsData = data
   );
  }

}
