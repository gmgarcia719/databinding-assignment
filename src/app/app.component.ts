import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number) {
    this.sortNumber(firedNumber);
  }

  sortNumber(number) {
    if (number % 2 == 0) {
      this.evenNumbers.push(number);
    }
    else {
      this.oddNumbers.push(number);
    }
  }


}
