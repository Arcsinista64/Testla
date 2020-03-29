import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';
import { NgForm } from '@angular/forms';
import { AutosService } from 'src/app/servicios/autos.service';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})

export class ModalAddUpdateComponent implements OnInit {

  



  accion: string; //Editar o crear.
  auto: Automovil;
  
  autoId: number;
  autoMarca: string;
  autoSubmarca: string;
  autoDescripcion:string;
  autoModelos: [];
  
  editar: boolean;
  agregar: boolean;

 
  constructor(private autosService: AutosService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  
  sendModal(): Automovil
  {
    if(this.agregar == true)
    {
     
      this.auto._id = null;
      this.auto.marca = this.autoMarca;
      this.auto.submarca = this.autoSubmarca;
      this.auto.descripcion = this.autoDescripcion;
      this.auto.modelos = this.autoModelos;
    }
    return (this.auto);
  }
}
