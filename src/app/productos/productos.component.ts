import { Component, OnInit } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { EmpresasService } from '../services/empresas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  company = {
    name: "Wendy's",
    description:
      'La marca Wendy´s se caracteriza por su espíritu innovador lo cual va desde nuevos productos y lanzamientos hasta las mejoras de image de las instalaciones que son frecuentes para tener una marca renovada',
    abstract: 'Restaurante de comida rápida y hamburguesería',
    logo: '../../assets/img/companies/empresa-wendys.jpg',
    schedule: 'Lunes a Viernes: 8:00am a 10:00pm \n Sábados y Domingos: 10:00am a 3:00pm \n',
    location: 'Blvd Morazan Mall Multiplaza Plaza Miraflores',
    banner: '../../assets/img/banners/banner-wendys.jpg',
    rating: 4,
  };
  products = [
    {
      name: 'Coca Cola Vidrio',
      description: 'tamaño 25cm. Vidrio reutilizable.',
      isv: 5.0,
      price: 10.0,
      stock: 10,
      image: '../assets/img/products/Coca-Cola-bebida.webp',
    },
    {
      name: 'Coca Cola Vidrio',
      description: 'tamaño 25cm. Vidrio reutilizable.',
      isv: 5.0,
      price: 10.00,
      stock: 10,
      image: '../assets/img/products/Coca-Cola-bebida.webp',
    },
    {
      name: 'Coca Cola Vidrio',
      description: 'tamaño 25cm. Vidrio reutilizable.',
      isv: 5.0,
      price: 10.0,
      stock: 10,
      image: '../assets/img/products/Coca-Cola-bebida.webp',
    },
  ];

  idCategoria: String = '';
  idEmpresa: String = '';
  empresa: any = '';
  productos:any = [];
  detalleProducto: any = '';
  constructor(
    library: FaIconLibrary,
    private ruta: ActivatedRoute,
    private productosService: ProductosService,
    private empresasService: EmpresasService
    ) {
    library.addIcons(fasStar, farStar);
    this.ruta.params.subscribe(params => {
      this.idCategoria = params.idCategoria;
      this.idEmpresa = params._id;
    })
  }
  ngOnInit(): void {
    this.productosService.obtenerProductos(this.idCategoria, this.idEmpresa).subscribe(
      result => {
        console.log(result);
        this.productos = result;
      },
      error => {
        console.log(error);
      }
    );

    this.empresasService.obtenerEmpresa(this.idCategoria, this.idEmpresa).subscribe(
      result => {
        this.empresa = result.empresas[0];
        console.log(this.empresa);
      },
      error => {
        console.log(error);
      }
    );
  }

  detalleProductoModal(producto) {
    this.detalleProducto = producto;
  }
}
