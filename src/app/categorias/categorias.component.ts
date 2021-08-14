import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
})
export class CategoriasComponent implements OnInit {
  // categories = [
  //   {
  //     "nombre":"Comida Rápida",
  //     "icono":"../../assets/img/categories/categoria-comida-rapida.png",
  //     "color":"#92509D",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Bebidas",
  //     "icono":"../../assets/img/categories/categoria-bebidas.png",
  //     "color":"#FC0079",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Tecnología",
  //     "icono":"../../assets/img/categories/categoria-casa-inteligente.png",
  //     "color":"#4A05DB",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Maquillaje",
  //     "icono":"../../assets/img/categories/categoria-maquillaje.png",
  //     "color":"#EFF32B",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Zapatos",
  //     "icono":"../../assets/img/categories/categoria-zapatos.png",
  //     "color":"#3DFCA0",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Super",
  //     "icono":"../../assets/img/categories/categoria-super.png",
  //     "color":"#A6032F",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Moda",
  //     "icono":"../../assets/img/categories/categoria-vestir.png",
  //     "color":"#4A05DB",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Hogar",
  //     "icono":"../../assets/img/categories/categoria-hogar.png",
  //     "color":"#11E94E",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Ferretería",
  //     "icono":"../../assets/img/categories/categoria-martillo.png",
  //     "color":"#F2B311",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Salud",
  //     "icono":"../../assets/img/categories/categoria-medicamento.png",
  //     "color":"#EE809E",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Deportes",
  //     "icono":"../../assets/img/categories/categoria-deportes.png",
  //     "color":"#11BDF2",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Mascotas",
  //     "icono":"../../assets/img/categories/categoria-mascotas.png",
  //     "color":"#D61104",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Papelería",
  //     "icono":"../../assets/img/categories/categoria-papeleria.png",
  //     "color":"#15A034",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Joyería y Accesorios",
  //     "icono":"../../assets/img/categories/categoria-joyeria.png",
  //     "color":"#A60382",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Niños y Bebes",
  //     "icono":"../../assets/img/categories/categoria-recreo.png",
  //     "color":"#7A04D6",
  //     "empresas": []
  //   },
  //   {
  //     "nombre":"Pastelería",
  //     "icono": "../../assets/img/categories/categoria-pastel.png",
  //     "color":"#F82270",
  //     "empresas": []
  //   }
  // ];
  categorias: any = [];
  constructor(private categoriasServices: CategoriasService) {}

  ngOnInit(): void {
    this.scrollToTop();
    this.categoriasServices.obtenerCategorias().subscribe(
      result => {
        this.categorias = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
