import { ServiciodeFavoritosService } from './../serviciode-favoritos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavorito:ServiciodeFavoritosService) { }

  public listdeVideos:Array<any> = [];

  ngOnInit(): void {
    this.servicioFavorito.disparadorDeFavoritos.subscribe(data => {
      console.log("Recibiendo datos", data);
      this.listdeVideos.push(data);
    });
  }

}
