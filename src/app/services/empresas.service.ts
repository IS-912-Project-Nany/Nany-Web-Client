import { API_BASE_URL } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private httpClient: HttpClient) { }

  obtenerEmpresas(idCategoria: String):Observable<any> {
    return this.httpClient.get(`${API_BASE_URL}/categorias/${idCategoria}/empresas`);
  }

  obtenerEmpresa(idCategoria: String, idEmpresa: String):Observable<any> {
    return this.httpClient.get(`${API_BASE_URL}/categorias/${idCategoria}/empresas/${idEmpresa}`);
  }
}
