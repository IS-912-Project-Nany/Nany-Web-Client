import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { convertTypeAcquisitionFromJson } from 'typescript';
import { OrdenesService } from '../services/ordenes.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html'
})
export class HistorialComponent implements OnInit {
  orders: any = [
    {
      destination: 'Col. La Travesia',
      buyer: 'Marcos Torres',
      total: 990.00,
      productName: 'Wendys',
      imgOrder: '../../assets/img/products/wendys-food.jpg',
      date:'12/20/2021',
      state: {
        name: "En Camino",
        color: '#FF1E1E'
      }
    },
    {
      destination: 'Col. La Travesia',
      buyer: 'Marcos Torres',
      date:'12/20/2021',
      total: 990.00,
      imgOrder: '../../assets/img/products/wendys-food.jpg',
      state: {
        name: "Entregado",
        color: '#00EF35'
      }
    },
  ];
  constructor(private cookiesService: CookieService, private ordenesService: OrdenesService) { }

  ngOnInit(): void {
    if (this.cookiesService.check('nanyUsuarioId')) {
      this.ordenesService.obtenerOrdenes(this.cookiesService.get('nanyUsuarioId')).subscribe(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
