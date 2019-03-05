import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-item',
  templateUrl: './title-item.component.html',
  styleUrls: ['./title-item.component.css']
})
export class TitleItemComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
