import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  timenow = null;
  a = null;
  time = null;
  pst(){
    this.timenow = Date.now();
    this.timenow -= 7*3600000;

    this.a = new Date(this.timenow);
    this.time = this.a.toUTCString();
  }
  mst(){
    this.timenow = Date.now();
    this.timenow -= 6*3600000;

    this.a = new Date(this.timenow);
    this.time = this.a.toUTCString();
  }
  cst(){
    this.timenow = Date.now();
    this.timenow -= 5*3600000;

    this.a = new Date(this.timenow);
    this.time = this.a.toUTCString();
  }
  est(){
    this.timenow = Date.now();
    this.timenow -= 4*3600000;

    this.a = new Date(this.timenow);
    this.time = this.a.toUTCString();
  }
  clear(){
    this.time = null;
  }

}
