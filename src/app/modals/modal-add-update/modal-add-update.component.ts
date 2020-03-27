import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {

  accion: string; //Editar o crear.
  auto: Automovil;
  autoMarca: string;
  autoSubmarca: string;
  editar: boolean;
  agregar: boolean;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }




}
