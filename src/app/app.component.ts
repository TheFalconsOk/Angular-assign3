import { Component } from '@angular/core';
import { timeStamp, time } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign3';
  displayFlag: boolean = false;
  logArray = [];
  arrayLen = 0;

  ToggleDisplay() {
    this.displayFlag = !this.displayFlag;
    this.logArray.push(new Date().toLocaleString());
    this.arrayLen = this.logArray.length;
    console.log(this.arrayLen)
  }

  getColour() {
    return this.arrayLen > 4 ? 'green' : 'yellow';}
}


