import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
