import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, AfterViewInit AfterContentInit{
  @Input() element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('ngInit called')
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }
  
  ngAfterViewInit() {
    console.log('ngAterViewInit called')
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log(this.paragraph.nativeElement.textContent);
  }


}
