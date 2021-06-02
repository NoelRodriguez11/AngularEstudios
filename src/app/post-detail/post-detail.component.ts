import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public respuesta:any =[];
  public comentarios:any =[];
  comentarioText:any =[];
  public form:any =[];

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute, private RestService:RestService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap;

      this.cargarData(params.variable)
      this.cargarComentarios();
    })

    this.form = this.formBuilder.group({
      textAreaComentario: ['']
    })
  }

  cargarData(id:String) {
      this.RestService.get(`http://localhost:3000/posts/${id}`).subscribe(respuesta => {
        this.respuesta = respuesta;
      })
  }

  cargarComentarios(){
    this.RestService.get(`http://localhost:3000/comments`)
      .subscribe(respuesta => {
          this.comentarios = respuesta;
      } )
  }

  public enviarData() {
    this.RestService.post(`http://localhost:3000/comments`,
     {
       text:this.form.value.textAreaComentario
     }
     )
     .subscribe(respuesta => {
      console.log('Comentario Enviado');
      this.form.reset();
      this.cargarComentarios();
    })
  }

}
