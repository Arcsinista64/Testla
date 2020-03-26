import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { VistasComponent } from './componentes/vistas/vistas.component';
import { ListComponent } from './componentes/list/list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './componentes/table/table.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
