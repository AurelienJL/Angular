import { CvContentService } from './../cv-content/cv-content.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactItems;

  title:string = 'Contact';

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
    this.contactItems = this.cvContentService.getContactData();
  }

}
