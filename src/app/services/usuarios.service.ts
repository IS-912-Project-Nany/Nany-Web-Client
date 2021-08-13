import { API_BASE_URL } from '../app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  registrar(data: any): Observable<any> {
    return this.httpClient.post(`${API_BASE_URL}/usuarios`, data);
  }

  obtenerUsuario(idUsuario: String): Observable<any> {
    return this.httpClient.get(`${API_BASE_URL}/usuarios/${idUsuario}`);
  }

  actualizarUsuario(idUsuario: String, data: any): Observable<any> {
    return this.httpClient.put(`${API_BASE_URL}/usuarios/${idUsuario}`, data);
  }
}
