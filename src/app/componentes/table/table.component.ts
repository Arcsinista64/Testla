import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AutosService } from 'src/app/servicios/autos.service';
import { Automovil } from 'src/app/models';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from 'src/app/modals/modal-add-update/modal-add-update.component';
import { ModalDeleteComponent } from 'src/app/modals/modal-delete/modal-delete.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[];
  autoSeleccionado: Automovil;

  page = 1;
  pageSize = 100;
  collectionSize;
  closeResult = '';

  
  constructor(private autosService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((response)=>{
      this.autos = response.data;
      this.collectionSize = response.data.length;
    });
  }

  //OPEN MODAL
  openModalEditar(auto:Automovil)
  {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});

    modalRef.componentInstance.agregar = false;
    modalRef.componentInstance.editar = true;

    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'EDITAR:';
    modalRef.componentInstance.autoMarca = auto.marca;
    modalRef.componentInstance.autoSubmarca = auto.submarca;
  }
  openModalAgregar()
  {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    
    modalRef.componentInstance.editar = false;
    modalRef.componentInstance.agregar = true;
    
    modalRef.componentInstance.accion = 'AGREGAR';
    modalRef.componentInstance.autoMarca = "";
    modalRef.componentInstance.autoSubmarca = "";

    let temporal = {
      marca: "",
      submarca: "",
      descripcion: "",
      modelos:[]
    }

    modalRef.componentInstance.auto = temporal;   
  }
  openModalEliminar(auto:Automovil)
  {
    const modalRef = this.modalService.open(ModalDeleteComponent, {centered: true});

    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'ELIMINAR:';
    modalRef.componentInstance.autoMarca = auto.marca;
    modalRef.componentInstance.autoSubmarca = auto.submarca;

  }

  sendModalEditar(auto:Automovil)
  {
    this.autosService.putAutos(auto).subscribe((response)=>
    {
      this.autos.push(response);
    })
  }
  sendModalAgregar(auto:Automovil)
  {
    this.autosService.postAutos(auto).subscribe((response)=>
    {
      this.autos.push(response);
    })
  }
  confirmarEliminar(autoID: string)
  {
    this.autosService.deleteAutos(autoID).subscribe((response)=>
    {
      alert("Eliminado con éxito?");
    })
  }



  // ICONS
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;
}
