import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './componentes/table/table.component';
import { HeaderComponent } from './componentes/header/header.component';
import { VistasComponent } from './componentes/vistas/vistas.component';
import { ListComponent } from './componentes/list/list.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from './modals/modal-add-update/modal-add-update.component';
import { FormsModule } from '@angular/forms';
import { ModalDeleteComponent } from './modals/modal-delete/modal-delete.component';
import { FormatoModelosAutosPipe } from './pipes/formato-modelos-autos.pipe';
import { FormatoDescripcionAutosPipe } from './pipes/formato-descripcion-autos.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogComponent } from './componentes/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    HomeComponent,
    ModalAddUpdateComponent,
    ModalDeleteComponent,
    FormatoModelosAutosPipe,
    FormatoDescripcionAutosPipe,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddUpdateComponent]
})
export class AppModule { }
