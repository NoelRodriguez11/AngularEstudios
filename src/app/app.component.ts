import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  public cards:Array<any> = [];

  ngOnInit(): void {
    this.cards = [
      {
        title:'Video 1',
        subtitle:'Subtitle Video 1'
      },
      {
        title:'Video 2',
        subtitle:'Subtitle Video 2'
      },
      {
        title:'Video 3',
        subtitle:'Subtitle Video 3'
      }
    ]
  }
  
}
