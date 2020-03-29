import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Automovil } from '../models';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosUrl = 'https://catalogo-autos.herokuapp.com/api/autos/';

  constructor(private http: HttpClient) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(`${this.autosUrl}`);
  }

  postAutos(auto: Automovil): Observable<any>
  {
    return this.http.post<any>(`${this.autosUrl}`, auto);
  }

  putAutos(auto: Automovil): Observable<any>
  {
    return this.http.put<any>(`${this.autosUrl}${auto.id}`, auto);
  }

  deleteAutos(autoID: string): Observable<any>
  {
    return this.http.delete<any>(`${this.autosUrl}${autoID}`);
  }

}


