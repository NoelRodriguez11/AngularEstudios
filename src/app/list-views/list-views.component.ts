import { RestService } from './../rest.service';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css']
})
export class ListViewsComponent implements OnInit {
  @Input('mode') mode:string = 'page'

  @ViewChild('imageTmpl', { static: true }) imageTmpl: TemplateRef<any>;
  @ViewChild('titleTmpl', { static: true }) titleTmpl: TemplateRef<any>;
  @ViewChild('viewTmpl', { static: true }) viewTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl: TemplateRef<any>;

  cols = [];
  data = [];

  ColumnMode = ColumnMode;

  constructor(private RestService:RestService) {

   }

  ngOnInit(): void {
    this.cols = [
      {
        cellTemplate: this.imageTmpl,
        headerTemplate: this.hdrTpl
      }
    ];

    this.cargarData();
  }

  cargarData(): void {
    this.RestService.get(`http://localhost:3000/posts`)
    .subscribe((data:any) => {
      this.data = data
    })
  }

  }

