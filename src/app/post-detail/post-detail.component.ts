import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public respuesta:any;

  constructor(private route:ActivatedRoute, private RestService:RestService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap;
      this.cargarData(params.variable)
    })
  }

  cargarData(id:String) {
      this.RestService.get(`http://localhost:3000/posts/${id}`).subscribe(respuesta => {
        this.respuesta = respuesta;
      })
  }

}
