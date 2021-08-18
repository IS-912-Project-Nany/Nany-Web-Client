import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrdenesService } from '../services/ordenes.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
})
export class HistorialComponent implements OnInit {
  ordenes: any = [];
  ordenDetalle: any = '';
  factura: any = '';
  isLoading: boolean = false;
  constructor(
    private cookiesService: CookieService,
    private ordenesService: OrdenesService,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    if (this.cookiesService.check('nanyUsuarioId')) {
      this.isLoading = true;
      this.ordenesService
        .obtenerOrdenes(this.cookiesService.get('nanyUsuarioId'))
        .subscribe(
          (result) => {
            console.log(result);
            result.ordenes.sort((a, b) => {
              a = new Date(a.fecha);
              b = new Date(b.fecha);
              return a > b ? -1 : a < b ? 1 : 0;
            });
            console.log(result.ordenes);
            this.ordenes = result.ordenes;
            this.isLoading = false;
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  verDetalleOrden(index) {
    this.ordenDetalle = this.ordenes[index].detalleProductos;
    this.factura = this.ordenes[index].factura;
  }
}
