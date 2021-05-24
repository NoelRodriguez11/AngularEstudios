import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  public listdeVideos:Array<any> = [];

  ngOnInit(): void {
    this.listdeVideos = [
      {
        title:'Video 1',
        subtitle:'Subtitle Video 1',
        img:"https://i.ytimg.com/vi/8g7yWl9NGr4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC333_lOYw9Y4cvxbDuVUCuPht5rQ"
      },
      {
        title:'Video 2',
        subtitle:'Subtitle Video 2',
        img:"https://i.ytimg.com/vi/8g7yWl9NGr4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC333_lOYw9Y4cvxbDuVUCuPht5rQ"
      },
      {
        title:'Video 3',
        subtitle:'Subtitle Video 3',
        img:"https://i.ytimg.com/vi/8g7yWl9NGr4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC333_lOYw9Y4cvxbDuVUCuPht5rQ"
      }
    ]
  }
  
}
