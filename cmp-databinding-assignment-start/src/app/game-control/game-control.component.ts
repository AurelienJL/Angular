import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  nbr = 0;
  interval;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.nbr + 1);
      this.nbr++;
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

}
