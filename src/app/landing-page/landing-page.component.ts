import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  isLogged: boolean = false;
  categorias: any = [];
  empresas: any = [];
  productosMuestra: any =[];

  constructor(
    private cookiesService: CookieService,
    private categoriasService: CategoriasService,
    private _route: Router) { }

  ngOnInit(): void {
    if (this.cookiesService.check('nanyUsuarioId')) {
      this.isLogged = true;
    }
    this.categoriasService.obtenerCategorias().subscribe(
      result => {
        this.categorias = result;
        this.categorias.forEach(categoria => {
          if (categoria.empresas.length != 0) {
            categoria.empresas.forEach(empresa => {
              if (empresa.productos.length != 0) {
                empresa.idCategoria = categoria._id;
                this.empresas.push(empresa);

                //Asignar Provicional productos
                empresa.productos.forEach(producto => {
                  producto.idCategoria = categoria._id;
                  producto.idEmpresa = empresa._id;
                  this.productosMuestra.push(producto);
                });
              }
            });
          }
        });
        console.log(this.productosMuestra);
      },
      error => {
        console.log(error);
      }
    );
  }

  verProducto(producto) {
    if (this.isLogged) {
      this._route.navigate([`/categorias/${producto.idCategoria}/empresas/${producto.idEmpresa}/productos`]);
    } else {
      Swal.fire({
        icon: 'info',
        text: 'Inicia sesión para poder agregar al carrito.',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#A6032F'
      });
      this._route.navigate(['/login']);
    }
  }
}
