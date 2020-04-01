import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AutosService } from 'src/app/servicios/autos.service';
import { Automovil } from 'src/app/models';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
  displayProgressBar: boolean;

  page = 1;

  actuallyPage = 1;
  pageSize = 10;
  collectionSize;
  closeResult = '';
  
  txtSearch;
  


  
  constructor(private autosService: AutosService, private modalService: NgbModal) { }

  ngOnInit(actuallyPage: number = this.actuallyPage): void {

    
    this.displayProgressBar = true;

    this.autosService.getAutos().subscribe((response)=>{
      
      setTimeout(()=>
      {
        this.displayProgressBar = false;
        this.collectionSize = response.data.length;
        this.page = this.actuallyPage;
        this.autos = response.data;


      }, 1000)

      
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

    // PROMISE
    modalRef.result.then(
      (auto) => {
        this.autosService.putAutos(auto, auto._id).subscribe((response)=>
        {
          this.autos.push(response);
          alert("Editado con éxito.");

          this.actuallyPage = this.page;
          this.ngOnInit();
        })
      },
      (reason) => {
        console.log(reason)
      }
    )

  }
  openModalAgregar()
  {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    
    modalRef.componentInstance.editar = false;
    modalRef.componentInstance.agregar = true;
    
    modalRef.componentInstance.accion = 'AGREGAR';
    modalRef.componentInstance.autoMarca = "";
    modalRef.componentInstance.autoSubmarca = "";

    modalRef.componentInstance.auto = 
    {
      _id: 0,
      modelos: [],
      marca: "",
      submarca: "",
      descripcion: "",

    };

    //PROMISE
    modalRef.result.then(
      (auto) => {
        this.autosService.postAutos(auto).subscribe((response)=>
        {
          this.autos.push(response);
          alert("Agregado con éxito.");

          // this.actuallyPage = this.finalPage;
          
          console.log(Math.ceil((this.collectionSize+1)/this.pageSize));
          this.actuallyPage = Math.ceil((this.collectionSize+1)/this.pageSize);

          
          this.ngOnInit(/*this.actuallyPage*/);

        })
      },
      (reason) => {
        console.log(reason)
      }
    )
  }
  openModalEliminar(auto:Automovil)
  {
    const modalRef = this.modalService.open(ModalDeleteComponent, {centered: true});

    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'ELIMINAR:';
    modalRef.componentInstance.autoMarca = auto.marca;
    modalRef.componentInstance.autoSubmarca = auto.submarca;

    modalRef.result.then(
      (autoID) => {        
        this.autosService.deleteAutos(autoID).subscribe((response)=>
        {
          alert("Eliminado con éxito.");

          this.actuallyPage = this.page;
          this.ngOnInit();
        })
      },
      (reason) => {
        console.log(reason)
      }
    )

    

  }

  // ICONS
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;
  faSearch = faSearch;
}
