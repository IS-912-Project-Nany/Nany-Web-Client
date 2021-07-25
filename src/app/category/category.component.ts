import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories = [
    {
      name:'Comida Rápida',
      icon:'../../assets/img/categories/categoria-comida-rapida.png',
      color:'#92509D'
    },
    {
      name:'Bebidas',
      icon:'../../assets/img/categories/categoria-bebidas.png',
      color:'#FC0079'
    },
    {
      name:'Tecnología',
      icon:'../../assets/img/categories/categoria-casa-inteligente.png',
      color:'#4A05DB'
    },
    {
      name:'Maquillaje',
      icon:'../../assets/img/categories/categoria-maquillaje.png',
      color:'#EFF32B'
    },
    {
      name:'Zapatos',
      icon:'../../assets/img/categories/categoria-zapatos.png',
      color:'#3DFCA0'
    },
    {
      name:'Super',
      icon:'../../assets/img/categories/categoria-super.png',
      color:'#A6032F'
    },
    {
      name:'Moda',
      icon:'../../assets/img/categories/categoria-vestir.png',
      color:'#4A05DB'
    },
    {
      name:'Hogar',
      icon:'../../assets/img/categories/categoria-hogar.png',
      color:'#11E94E'
    },
    {
      name:'Ferretería',
      icon:'../../assets/img/categories/categoria-martillo.png',
      color:'#F2B311'
    },
    {
      name:'Salud',
      icon:'../../assets/img/categories/categoria-medicamento.png',
      color:'#EE809E'
    },
    {
      name:'Deportes',
      icon:'../../assets/img/categories/categoria-deportes.png',
      color:'#11BDF2'
    },
    {
      name:'Mascotas',
      icon:'../../assets/img/categories/categoria-mascotas.png',
      color:'#D61104'
    },
    {
      name:'Papelería',
      icon:'../../assets/img/categories/categoria-papeleria.png',
      color:'#15A034'
    },
    {
      name:'Joyería y Accesorios',
      icon:'../../assets/img/categories/categoria-joyeria.png',
      color:'#A60382'
    },
    {
      name:'Niños y Bebes',
      icon:'../../assets/img/categories/categoria-recreo.png',
      color:'#7A04D6'
    },
    {
      name:'Pastelería',
      icon :'../../assets/img/categories/categoria-pastel.png',
      color:'#F82270'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
