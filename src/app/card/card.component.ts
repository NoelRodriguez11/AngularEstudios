import { ServiciodeFavoritosService } from './../serviciode-favoritos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public image:string | undefined;

  constructor(private servicioFavorito: ServiciodeFavoritosService) { }

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354'
  }

  agregarFavorito(){
    this.servicioFavorito.disparadorDeFavoritos.emit({
      data:this.dataEntrante
    });
  }

}
