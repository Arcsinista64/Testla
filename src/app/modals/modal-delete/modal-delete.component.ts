import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/servicios/autos.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  accion: string; //Eliminar
  auto: Automovil;
  autoMarca: string;
  autoSubmarca: string;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  enviarConfirmacion(auto: Automovil)
  {
    
    //IMPRESIÓN PRUEBA
    console.log(this.auto);


    //confirmarEliminar(this.auto);

  };

}
