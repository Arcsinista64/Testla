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
    return this.http.get<any>(this.autosUrl);
    
  }
}
