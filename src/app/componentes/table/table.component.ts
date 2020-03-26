import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/servicios/autos.service';
import { Automovil } from 'src/app/models';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[];
  numero: Array<number>;

  page = 1;
  pageSize = 10;
  collectionSize;

  constructor(private autoService: AutosService) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
      this.collectionSize = response.data.length;

      this.numero = new Array[this.collectionSize];
    })
  }

  

  // ICONS
  faEdit = faEdit;
  faTrash = faTrash;
}
