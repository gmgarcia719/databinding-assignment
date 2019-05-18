import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  interval;
  @Output() intervalFire = new EventEmitter<number>();
  lastNumber = 0;
  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFire.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)

  }

  onStop() {
    clearInterval(this.interval);
  }


}
