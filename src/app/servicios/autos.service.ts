import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Automovil } from '../models';
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosUrl = 'https://catalogo-autos.herokuapp.com/api/autos/';

  constructor(private http: HttpClient, private messageServices: MessagesService) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(`${this.autosUrl}`).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=> this.messageServices.add('Productos obtenidos'))
    )
  }

  getAutosLista(): Observable<any>{
    return this.http.get<any>(`${this.autosUrl}`).pipe(
      catchError(this.handleError<any>('getAutosLista')),
      tap(()=> this.messageServices.add('Productos obtenidos'))
    )
  }

  postAutos(auto: Automovil): Observable<any>
  {
    return this.http.post<any>(`${this.autosUrl}`, auto).pipe(
      catchError(this.handleError<any>('postAutos')),
      tap((result)=> this.messageServices.add(`Producto con id: ${result.data._id} agregado`))
    )
  }

  putAutos(auto: Automovil, autoID: number): Observable<any>
  {
    return this.http.put<any>(`${this.autosUrl}${autoID}`, auto).pipe(
      catchError(this.handleError<any>('putAutos')),
      tap((result)=> this.messageServices.add(`Producto con id: ${result.data._id} editado`))
    )
  }

  deleteAutos(autoID: number): Observable<any>
  {
    return this.http.delete<any>(`${this.autosUrl}${autoID}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap(()=> this.messageServices.add(`Producto con id: ${autoID} eliminado`))
    )
  }

  private handleError <T>(operation = 'operacion', result ? : T)
  {
    return(error: any): Observable<T> =>
    {
      this.messageServices.add(`${operation} falló: ${error.messages}`);
        
      return of(result as T);
    }
  }
}


