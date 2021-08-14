import { API_BASE_URL } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpClient: HttpClient) { }

  obtenerCategorias():Observable<any> {
    return this.httpClient.get(`${API_BASE_URL}/categorias`);
  }
}
