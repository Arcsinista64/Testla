import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './componentes/list/list.component';
import { TableComponent } from './componentes/table/table.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'list',component: ListComponent},
  {path: 'table',component: TableComponent},
  {path: '**',component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
