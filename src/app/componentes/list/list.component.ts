import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/models';
import { AUTOMOVILES } from 'src/app/data';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  autos: Automovil[];
  autoSeleccionado: Automovil;
  
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  this.autos = AUTOMOVILES;
  }

  OnSelect(auto: Automovil)
  {
    this.autoSeleccionado = auto;
    alert("hi");
  }

  open(auto: Automovil, autoModal) {
    this.autoSeleccionado = auto;

    this.modalService.open(autoModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //Icon
  faEye = faEye;

}
