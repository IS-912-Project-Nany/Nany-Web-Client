import { API_BASE_URL } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private httpClient: HttpClient) { }

  obtenerOrdenes(idUsuario: String):Observable<any> {
    return this.httpClient.get(`${API_BASE_URL}/usuarios/${idUsuario}`);
  }

  nuevaOrden(orden):Observable<any> {
    return this.httpClient.post(`${API_BASE_URL}/ordenes`, orden);
  }
}
