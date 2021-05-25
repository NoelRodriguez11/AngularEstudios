import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  public listdeVideos:any = [];

  constructor(private RestService:RestService) {

  }

  ngOnInit(): void {

    this.cargarData();

    // this.listdeVideos = [
    //   {
    //     title:'Video 1',
    //     subtitle:'Subtitle Video 1',
    //     img:"https://i.ytimg.com/an_webp/6UsqalA78Wk/mqdefault_6s.webp?du=3000&sqp=CP3us4UG&rs=AOn4CLAq6-2zUm9LLNnBqR-BlecYgngxEg"
    //   },
    //   {
    //     title:'Video 2',
    //     subtitle:'Subtitle Video 2',
    //     img:"https://i.ytimg.com/vi/CbaFAQbCkdc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi2d3FPjMydDEQW1Gn2obPpG_xYA"
    //   },
    //   {
    //     title:'Video 3',
    //     subtitle:'Subtitle Video 3',
    //     img:"https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CMimtIUG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABgUvI00jMd7TBSkeJTYnG0JySJQ"
    //   }
    // ]
  }

  public cargarData() {
    this.RestService.get('http://localhost:3000/posts').subscribe(respuesta => { //AQUI CARGARIAMOS LA URL DE LA API
      this.listdeVideos = respuesta;
    })
  }
  
}
