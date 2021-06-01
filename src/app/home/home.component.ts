import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'portfolio-app';
  public listdeVideos:any = [];

  constructor(private RestService:RestService) {

  }

  ngOnInit(): void {

    this.cargarData();
  }

  public cargarData() {
    this.RestService.get('http://localhost:3000/posts').subscribe(respuesta => { //AQUI CARGARIAMOS LA URL DE LA API
      this.listdeVideos = respuesta;
    })
  }
  
}
