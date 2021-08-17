import { Component, OnInit, ViewChild } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { EmpresasService } from '../services/empresas.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  @ViewChild('navbar') navbarComponent: NavbarComponent
  idCategoria: String = '';
  idEmpresa: String = '';
  nombreCategoria: String = '';
  empresa: any = '';
  productos:any = [];
  detalleProducto: any = '';
  cantidadProducto: any = '';
  

  constructor(
    library: FaIconLibrary,
    private ruta: ActivatedRoute,
    private _route: Router,
    private productosService: ProductosService,
    private empresasService: EmpresasService,
    private cookiesService: CookieService
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
        this.nombreCategoria = result.nombre;
      },
      error => {
        console.log(error);
      }
    );
  }

  detalleProductoModal(producto) {
    this.detalleProducto = producto;
  }

  verCantidad(cantidad) {
    this.cantidadProducto = cantidad;
    console.log("Cantidad Producto ", this.cantidadProducto);
  }

  agregarCarrito(producto) {
    if (this.cookiesService.check('nanyUsuarioId')) {
      const localStorage = window.localStorage;     
      let productos:any = [];
      let productoEnviar = {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        categoria: this.nombreCategoria,
        empresa: this.empresa.nombre,
        imagen: producto.imagen,
        precio: producto.precio,
        isv: producto.isv,
      }
      
      let detalleProducto = {
        producto: productoEnviar,
        cantidad: this.cantidadProducto
      }
 
      if (localStorage.getItem('productosCarrito' + this.cookiesService.get('nanyUsuarioNombre')) != undefined) {
        productos = JSON.parse(localStorage.getItem('productosCarrito' + this.cookiesService.get('nanyUsuarioNombre')));
        productos.push(detalleProducto);
        localStorage.setItem('productosCarrito' + this.cookiesService.get('nanyUsuarioNombre'), JSON.stringify(productos));
      } else {
        productos.push(detalleProducto);
        localStorage.setItem('productosCarrito' + this.cookiesService.get('nanyUsuarioNombre'), JSON.stringify(productos));
      }
      this.navbarComponent.ngOnInit();
      Swal.fire({
        icon: 'success',
        title: 'Producto Agregado al carrito',
        text: 'Revisa tu carrito de compras.',
      })
    } else {
      Swal.fire({
        icon: 'info',
        text: 'Inicia sesión para poder agregar al carrito.',
      })
      this._route.navigate(['/login']);
    }
  }
}
